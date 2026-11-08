from fastapi import APIRouter
from typing import List
from backend.schemas import ReviewItem
from backend.database import REVIEWS_STORE

router = APIRouter(prefix="/reviews", tags=["Reviews & Social Proof"])

@router.get("", response_model=List[ReviewItem])
async def list_reviews():
    """
    Get verified guest reviews with 5-star ratings from TripAdvisor, Google Reviews, and direct guests.
    """
    return REVIEWS_STORE
