from fastapi import APIRouter
import urllib.parse
from backend.schemas import WhatsAppLinkRequest, WhatsAppLinkResponse
from backend.config import settings
from backend.database import LEADS_STORE

router = APIRouter(prefix="/whatsapp", tags=["WhatsApp Concierge"])

@router.post("/generate-link", response_model=WhatsAppLinkResponse)
async def generate_whatsapp_link(payload: WhatsAppLinkRequest):
    """
    Generate an intelligent, prefilled WhatsApp click-to-chat URL with context
    about the tour, desired dates, or general questions.
    """
    if payload.custom_message:
        text = payload.custom_message
    elif payload.inquiry_type == "availability":
        text = f"Hola Madidi Jungle, deseo consultar disponibilidad"
        if payload.tour_name:
            text += f" para el tour *{payload.tour_name}*"
        if payload.travel_dates:
            text += f" en las fechas {payload.travel_dates}"
        if payload.pax_count:
            text += f" para {payload.pax_count}"
        text += ". ¿Tienen cabañas disponibles?"
    elif payload.inquiry_type == "logistics":
        text = "Hola Madidi Jungle, necesito orientación sobre cómo llegar en vuelo o bus de La Paz a Rurrenabaque y coordinar traslados."
    elif payload.inquiry_type == "custom_itinerary":
        text = "Hola Madidi Jungle, somos un grupo de observadores de aves / fotógrafos y deseamos cotizar un guía nativo privado especializado."
    else:
        text = "Hola Madidi Jungle, me gustaría recibir más información sobre sus programas en el Parque Nacional Madidi."

    encoded_text = urllib.parse.quote(text)
    url = f"https://wa.me/{settings.WHATSAPP_PHONE_NUMBER}?text={encoded_text}"

    # Record interaction
    LEADS_STORE.append({
        "type": "whatsapp_click",
        "inquiry_type": payload.inquiry_type,
        "details": payload.model_dump()
    })

    return WhatsAppLinkResponse(
        whatsapp_url=url,
        phone_number=settings.WHATSAPP_PHONE_NUMBER,
        prefilled_message=text
    )
