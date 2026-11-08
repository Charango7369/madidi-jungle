from pydantic import BaseModel, EmailStr, Field
from typing import List, Optional
from datetime import date, datetime
from enum import Enum

class DifficultyLevel(str, Enum):
    easy = "easy"
    moderate = "moderate"
    challenging = "challenging"
    expedition = "expedition"

class BathroomType(str, Enum):
    shared = "shared"
    private = "private"

class CurrencyType(str, Enum):
    USD = "USD"
    EUR = "EUR"
    BOB = "BOB"

class TourItineraryDay(BaseModel):
    day_number: int
    title_es: str
    title_en: str
    title_fr: Optional[str] = None
    title_de: Optional[str] = None
    description_es: str
    description_en: str
    meals: str
    activities: List[str]

class TourBase(BaseModel):
    code: str
    slug: str
    name_es: str
    name_en: str
    name_fr: Optional[str] = None
    name_de: Optional[str] = None
    tagline_es: str
    tagline_en: str
    days: int
    nights: int
    price_shared_usd: float
    price_private_usd: float
    difficulty: DifficultyLevel
    highlight_wildlife: List[str]
    included_items: List[str]
    excluded_items: List[str]
    is_featured: bool
    hero_image: str
    gallery_images: List[str]

class TourDetail(TourBase):
    itinerary: List[TourItineraryDay] = []

class AccommodationItem(BaseModel):
    slug: str
    name_es: str
    name_en: str
    cabin_type: str
    max_guests: int
    bed_configuration: str
    bathroom_type: BathroomType
    amenities: List[str]
    image_url: str
    description_es: str
    description_en: str

class QuoteCalculationRequest(BaseModel):
    tour_code: str
    adults: int = Field(ge=1, default=2)
    children: int = Field(ge=0, default=0) # <12 yo: 50% discount
    infants: int = Field(ge=0, default=0)  # <3 yo: 75% discount
    bathroom_type: BathroomType = BathroomType.private
    currency: CurrencyType = CurrencyType.USD

class PriceBreakdown(BaseModel):
    adults_subtotal: float
    children_subtotal: float
    infants_subtotal: float
    park_fee_estimated_bob: float = Field(default=200.0, description="Madidi Park fee payable in cash")
    total_amount: float
    currency: CurrencyType
    total_in_usd: float

class BookingCreateRequest(BaseModel):
    tour_code: str
    customer_name: str
    customer_email: EmailStr
    customer_phone: str
    country: str
    start_date: date
    adults_count: int = Field(ge=1, default=2)
    children_count: int = Field(ge=0, default=0)
    bathroom_type: BathroomType = BathroomType.private
    dietary_notes: Optional[str] = None
    flight_details: Optional[str] = None
    currency: CurrencyType = CurrencyType.USD
    source: str = "web_form"

class BookingResponse(BaseModel):
    booking_code: str
    status: str
    message: str
    total_amount_usd: float
    currency: str
    whatsapp_direct_link: str
    created_at: datetime

class WhatsAppLinkRequest(BaseModel):
    tour_name: Optional[str] = None
    travel_dates: Optional[str] = None
    pax_count: Optional[str] = None
    inquiry_type: str = "availability" # "availability", "custom_itinerary", "logistics"
    custom_message: Optional[str] = None

class WhatsAppLinkResponse(BaseModel):
    whatsapp_url: str
    phone_number: str
    prefilled_message: str

class LeadCreateRequest(BaseModel):
    email: EmailStr
    first_name: Optional[str] = None
    tour_code_interest: Optional[str] = None
    preferred_language: str = "en"

class ContactMessageRequest(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    country: Optional[str] = None
    subject: str
    message: str

class ReviewItem(BaseModel):
    author_name: str
    author_country: str
    author_avatar: Optional[str] = None
    rating: int
    platform: str
    title: str
    comment: str
    tour_taken: str
    visit_date: str

class FAQItem(BaseModel):
    category: str
    question_es: str
    question_en: str
    question_fr: Optional[str] = None
    question_de: Optional[str] = None
    answer_es: str
    answer_en: str
    answer_fr: Optional[str] = None
    answer_de: Optional[str] = None
