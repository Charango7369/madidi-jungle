import sys
import os

# Ensure backend root is on python path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
try:
    from backend.config import settings
    from backend.limiter import limiter
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
    from limiter import limiter
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
from slowapi.errors import RateLimitExceeded
from slowapi import _rate_limit_exceeded_handler

# Security: Disable interactive docs in production to prevent schema enumeration (OWASP A05)
docs_url = "/docs" if settings.ENVIRONMENT.lower() != "production" else None
redoc_url = "/redoc" if settings.ENVIRONMENT.lower() != "production" else None

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="High-performance backend for Madidi Jungle Ecolodge (Bolivia). Powers dynamic bookings, currency conversion, WhatsApp concierge, and lead generation.",
    docs_url=docs_url,
    redoc_url=redoc_url
)

# Register SlowAPI rate limiter
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Security Middleware: Strict CORS policy (OWASP A05: No wildcard with credentials)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization", "Accept", "Origin", "X-Requested-With"],
)

# Security Headers Middleware (OWASP Secure Headers)
@app.middleware("http")
async def add_security_headers(request, call_next):
    response = await call_next(request)
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    response.headers["Permissions-Policy"] = "camera=(), microphone=(), geolocation=()"
    if settings.ENVIRONMENT.lower() == "production":
        response.headers["Strict-Transport-Security"] = "max-age=63072000; includeSubDomains; preload"
    return response

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
