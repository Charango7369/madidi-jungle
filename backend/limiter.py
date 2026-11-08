"""Rate limiting infrastructure for Madidi Jungle Ecolodge API (OWASP A04: DoS Mitigation)."""
from slowapi import Limiter
from slowapi.util import get_remote_address

limiter = Limiter(key_func=get_remote_address, default_limits=["120/minute"])
