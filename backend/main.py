import sys
import os

# Ensure backend root is on python path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
try:
    from backend.config import settings
    from backend.routers import (
        tours,
        accommodations,
        bookings,
        whatsapp,
        leads,
        reviews,
        faqs,
        contact
    )
except ImportError:
    from config import settings
    from routers import (
        tours,
        accommodations,
        bookings,
        whatsapp,
        leads,
        reviews,
        faqs,
        contact
    )

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="High-performance backend for Madidi Jungle Ecolodge (Bolivia). Powers dynamic bookings, currency conversion, WhatsApp concierge, and lead generation.",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allow all origins for seamless development and cross-deployment previews
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API Routers
app.include_router(tours.router, prefix=settings.API_V1_STR)
app.include_router(accommodations.router, prefix=settings.API_V1_STR)
app.include_router(bookings.router, prefix=settings.API_V1_STR)
app.include_router(whatsapp.router, prefix=settings.API_V1_STR)
app.include_router(leads.router, prefix=settings.API_V1_STR)
app.include_router(reviews.router, prefix=settings.API_V1_STR)
app.include_router(faqs.router, prefix=settings.API_V1_STR)
app.include_router(contact.router, prefix=settings.API_V1_STR)

@app.get("/health", tags=["System"])
async def health_check():
    """
    Health check endpoint for container orchestrators (Railway / Docker / Kubernetes)
    """
    return {
        "status": "healthy",
        "service": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "environment": settings.ENVIRONMENT
    }

@app.get("/", tags=["System"])
async def root():
    return {
        "message": "Welcome to Madidi Jungle Ecolodge API",
        "docs": "/docs",
        "health": "/health",
        "api_v1": settings.API_V1_STR
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)
