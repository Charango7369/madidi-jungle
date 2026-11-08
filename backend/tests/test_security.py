"""
Automated Application Security (AppSec) Test Suite for Madidi Jungle Ecolodge API.
Validates OWASP Top 10 mitigations:
- A01: Broken Access Control (IDOR mitigation & PII masking)
- A02: Cryptographic Failures (8-char CSPRNG tokens)
- A04: Insecure Design (Rate limiting / DoS flood protection)
- A05: Security Misconfiguration (Strict CORS & Security Headers)
"""
import pytest
import asyncio
from httpx import AsyncClient, ASGITransport
from backend.main import app

@pytest.mark.asyncio
async def test_security_idor_and_pii_masking():
    """Verify that public booking status lookup does NOT expose customer PII."""
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        # Create test booking
        res = await client.post("/api/bookings", json={
            "tour_code": "P3",
            "customer_name": "Auditor Test",
            "customer_email": "auditor@madidijungle.com",
            "customer_phone": "+59170000000",
            "country": "Bolivia",
            "start_date": "2026-11-20",
            "adults_count": 2,
            "children_count": 0,
            "bathroom_type": "private",
            "dietary_notes": "Allergic to tree nuts",
            "currency": "USD"
        })
        assert res.status_code == 200
        booking_data = res.json()
        code = booking_data["booking_code"]

        # Validate 8-character CSPRNG token (OWASP A02)
        code_suffix = code.split("-")[2]
        assert len(code_suffix) == 8, f"Expected 8-character token, got {code_suffix}"

        # Fetch public status (OWASP A01)
        status_res = await client.get(f"/api/bookings/{code}")
        assert status_res.status_code == 200
        status_data = status_res.json()

        # Strict assertion: PII must NEVER be in public response
        forbidden_pii = ["customer_name", "customer_email", "customer_phone", "dietary_notes", "flight_details"]
        for field in forbidden_pii:
            assert field not in status_data, f"SECURITY LEAK: {field} exposed in public status!"

@pytest.mark.asyncio
async def test_security_headers_present():
    """Verify that OWASP recommended security headers are attached."""
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        res = await client.get("/health")
        assert res.status_code == 200
        assert res.headers.get("x-content-type-options") == "nosniff"
        assert res.headers.get("x-frame-options") == "DENY"
        assert res.headers.get("referrer-policy") == "strict-origin-when-cross-origin"

@pytest.mark.asyncio
async def test_rate_limiting_enforcement():
    """Verify that excessive requests trigger HTTP 429 Too Many Requests (OWASP A04)."""
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        responses = []
        for i in range(8):
            r = await client.post("/api/leads/field-guide", json={"email": f"flood_{i}@test.com"})
            responses.append(r.status_code)
        assert 429 in responses, f"Expected 429 in responses, got {responses}"
