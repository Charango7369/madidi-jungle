from fastapi import APIRouter
from backend.schemas import LeadCreateRequest
from backend.database import LEADS_STORE
from datetime import datetime

router = APIRouter(prefix="/leads", tags=["Leads & Field Guide Magnet"])

@router.post("/field-guide")
async def capture_field_guide_lead(payload: LeadCreateRequest):
    """
    Capture lead details and deliver the link to the comprehensive
    Madidi Wildlife, Birds & Primates Field Guide PDF.
    """
    record = {
        "email": payload.email,
        "first_name": payload.first_name,
        "tour_code_interest": payload.tour_code_interest,
        "preferred_language": payload.preferred_language,
        "timestamp": datetime.utcnow()
    }
    LEADS_STORE.append(record)

    return {
        "status": "success",
        "message": f"Thank you {payload.first_name or ''}! Your field guide is ready.",
        "download_url": "/assets/docs/Madidi-Wildlife-Field-Guide-2026.pdf",
        "bonus": "Check your inbox for a 5% direct booking voucher code: MADIDI-DIRECT-2026"
    }
