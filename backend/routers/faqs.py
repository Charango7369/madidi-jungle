from fastapi import APIRouter
from typing import List, Optional
from backend.schemas import FAQItem
from backend.database import FAQS_STORE

router = APIRouter(prefix="/faqs", tags=["Frequently Asked Questions"])

@router.get("", response_model=List[FAQItem])
async def list_faqs(category: Optional[str] = None):
    """
    Get frequently asked questions about vaccines, flights from La Paz, gear, payments, and park rules.
    """
    if category:
        return [f for f in FAQS_STORE if f.category.lower() == category.lower()]
    return FAQS_STORE
