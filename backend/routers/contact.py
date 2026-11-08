from fastapi import APIRouter, Request
from datetime import datetime
try:
    from backend.limiter import limiter
except ImportError:
    from limiter import limiter
from backend.schemas import ContactMessageRequest
from backend.database import CONTACT_MESSAGES_STORE

router = APIRouter(prefix="/contact", tags=["Contact & Direct Inquiries"])

@router.post("")
@limiter.limit("5/minute")
async def send_contact_message(request: Request, payload: ContactMessageRequest):
    """
    Submit a general question or custom travel proposal request directly to the lodge management in Rurrenabaque.
    """
    record = {
        "name": payload.name,
        "email": payload.email,
        "phone": payload.phone,
        "country": payload.country,
        "subject": payload.subject,
        "message": payload.message,
        "received_at": datetime.utcnow()
    }
    CONTACT_MESSAGES_STORE.append(record)

    return {
        "status": "success",
        "message": "Thank you for reaching out to Madidi Jungle Ecolodge. Our team will answer your message within 12 hours.",
        "confirmation_id": f"MSG-{len(CONTACT_MESSAGES_STORE)}"
    }
