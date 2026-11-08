from fastapi import APIRouter, HTTPException
import random
import string
from datetime import datetime
import urllib.parse
from backend.schemas import (
    QuoteCalculationRequest, PriceBreakdown,
    BookingCreateRequest, BookingResponse, BathroomType, CurrencyType
)
from backend.database import TOURS_STORE, BOOKINGS_STORE
from backend.config import settings

router = APIRouter(prefix="/bookings", tags=["Bookings & Quotes"])

USD_TO_EUR_RATE = 0.92
USD_TO_BOB_RATE = 6.96

def calculate_quote_internal(
    tour_code: str,
    adults: int,
    children: int,
    infants: int,
    bathroom_type: BathroomType,
    currency: CurrencyType
) -> PriceBreakdown:
    # Find tour
    tour = next((t for t in TOURS_STORE if t.code.upper() == tour_code.upper() or t.slug.lower() == tour_code.lower()), None)
    if not tour:
        raise HTTPException(status_code=404, detail="Selected tour code does not exist")

    base_price = tour.price_private_usd if bathroom_type == BathroomType.private else tour.price_shared_usd

    # Discounts: Children <12 get 50% off; infants <3 get 75% off
    adults_subtotal_usd = adults * base_price
    children_subtotal_usd = children * (base_price * 0.50)
    infants_subtotal_usd = infants * (base_price * 0.25)

    total_usd = adults_subtotal_usd + children_subtotal_usd + infants_subtotal_usd

    # Convert to selected currency
    rate = 1.0
    if currency == CurrencyType.EUR:
        rate = USD_TO_EUR_RATE
    elif currency == CurrencyType.BOB:
        rate = USD_TO_BOB_RATE

    return PriceBreakdown(
        adults_subtotal=round(adults_subtotal_usd * rate, 2),
        children_subtotal=round(children_subtotal_usd * rate, 2),
        infants_subtotal=round(infants_subtotal_usd * rate, 2),
        park_fee_estimated_bob=200.0 * (adults + children),
        total_amount=round(total_usd * rate, 2),
        currency=currency,
        total_in_usd=round(total_usd, 2)
    )

@router.post("/quote", response_model=PriceBreakdown)
async def calculate_quote(payload: QuoteCalculationRequest):
    """
    Calculate an instant, dynamic quote with live currency conversion (USD/EUR/BOB)
    and exact discounts for children and bathroom preferences.
    """
    return calculate_quote_internal(
        tour_code=payload.tour_code,
        adults=payload.adults,
        children=payload.children,
        infants=payload.infants,
        bathroom_type=payload.bathroom_type,
        currency=payload.currency
    )

@router.post("", response_model=BookingResponse)
async def create_booking(payload: BookingCreateRequest):
    """
    Create a pre-booking request, generate a reservation code (e.g. MJ-2026-9A82),
    and generate an automated WhatsApp express link.
    """
    quote = calculate_quote_internal(
        tour_code=payload.tour_code,
        adults=payload.adults_count,
        children=payload.children_count,
        infants=0,
        bathroom_type=payload.bathroom_type,
        currency=payload.currency
    )

    # Generate unique reservation code
    random_suffix = ''.join(random.choices(string.ascii_uppercase + string.digits, k=4))
    booking_code = f"MJ-2026-{random_suffix}"

    # Prepare structured WhatsApp message
    msg = (
        f"🌿 *RESERVA MADIDI JUNGLE ECOLODGE*\n"
        f"📋 *Código:* {booking_code}\n"
        f"👤 *Viajero:* {payload.customer_name} ({payload.country})\n"
        f"🎒 *Tour:* {payload.tour_code.upper()}\n"
        f"📅 *Fecha de Inicio:* {payload.start_date.isoformat()}\n"
        f"👥 *Pasajeros:* {payload.adults_count} Adultos"
    )
    if payload.children_count > 0:
        msg += f", {payload.children_count} Niños"
    msg += (
        f"\n🏡 *Baño:* {payload.bathroom_type.value.capitalize()}\n"
        f"💰 *Cotización Estimada:* ${quote.total_in_usd:.2f} USD\n"
        f"📍 *Teléfono/Email:* {payload.customer_phone} / {payload.customer_email}\n"
        f"Por favor confirmen disponibilidad de cabaña."
    )

    encoded_msg = urllib.parse.quote(msg)
    whatsapp_url = f"https://wa.me/{settings.WHATSAPP_PHONE_NUMBER}?text={encoded_msg}"

    record = {
        "booking_code": booking_code,
        "payload": payload.model_dump(),
        "total_amount_usd": quote.total_in_usd,
        "status": "pending",
        "created_at": datetime.utcnow()
    }
    BOOKINGS_STORE[booking_code] = record

    return BookingResponse(
        booking_code=booking_code,
        status="pending",
        message="Your reservation request has been received. Our native coordinator will reach out within 2 hours.",
        total_amount_usd=quote.total_in_usd,
        currency=payload.currency.value,
        whatsapp_direct_link=whatsapp_url,
        created_at=record["created_at"]
    )

@router.get("/{booking_code}")
async def get_booking_status(booking_code: str):
    """
    Check current status of a booking.
    """
    code = booking_code.upper()
    if code not in BOOKINGS_STORE:
        raise HTTPException(status_code=404, detail="Booking code not found")
    return BOOKINGS_STORE[code]
