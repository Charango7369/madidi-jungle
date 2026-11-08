from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from backend.schemas import TourBase, TourDetail, DifficultyLevel
from backend.database import TOURS_STORE

router = APIRouter(prefix="/tours", tags=["Tours"])

@router.get("", response_model=List[TourDetail])
async def list_tours(
    featured_only: bool = False,
    difficulty: Optional[DifficultyLevel] = None,
    min_days: Optional[int] = Query(None, ge=1),
    max_days: Optional[int] = Query(None, le=10)
):
    """
    List all available ecotourism programs with optional filters for days, difficulty, or featured tours.
    """
    results = TOURS_STORE
    if featured_only:
        results = [t for t in results if t.is_featured]
    if difficulty:
        results = [t for t in results if t.difficulty == difficulty]
    if min_days is not None:
        results = [t for t in results if t.days >= min_days]
    if max_days is not None:
        results = [t for t in results if t.days <= max_days]
    return results

@router.get("/{slug_or_code}", response_model=TourDetail)
async def get_tour(slug_or_code: str):
    """
    Retrieve full tour details and day-by-day itinerary by slug (e.g. 'tareche-3d-2n') or tour code (e.g. 'P3').
    """
    search_term = slug_or_code.lower()
    for tour in TOURS_STORE:
        if tour.slug.lower() == search_term or tour.code.lower() == search_term:
            return tour
    raise HTTPException(status_code=404, detail=f"Tour '{slug_or_code}' not found")
