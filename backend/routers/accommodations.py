from fastapi import APIRouter
from typing import List
from backend.schemas import AccommodationItem
from backend.database import ACCOMMODATIONS_STORE

router = APIRouter(prefix="/accommodations", tags=["Accommodations"])

@router.get("", response_model=List[AccommodationItem])
async def list_accommodations():
    """
    List all handcrafted eco-cabins built from sustainable jatata palms and fallen wood.
    """
    return ACCOMMODATIONS_STORE
