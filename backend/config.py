import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Madidi Jungle Ecolodge API"
    VERSION: str = "2.0.0"
    API_V1_STR: str = "/api"
    DATABASE_URL: str = os.getenv("DATABASE_URL", "postgresql+asyncpg://postgres:postgres@localhost:5432/madidi_jungle")
    WHATSAPP_PHONE_NUMBER: str = os.getenv("WHATSAPP_PHONE_NUMBER", "59172288339") # Official Madidi WhatsApp
    WHATSAPP_DEFAULT_AGENT: str = os.getenv("WHATSAPP_DEFAULT_AGENT", "Jaime - Guía Nativo Madidi")
    FRONTEND_URL: str = os.getenv("FRONTEND_URL", "http://localhost:3010")
    CORS_ORIGINS: list[str] = [
        "http://localhost:3000",
        "http://localhost:3010",
        "http://127.0.0.1:3010",
        "http://127.0.0.1:3000",
        "https://madidijungle.com",
        "https://www.madidijungle.com",
        "https://madidijungle.apolodigital.lat",
        "https://api.madidijungle.apolodigital.lat"
    ]
    ENVIRONMENT: str = os.getenv("ENVIRONMENT", "development")

    class Config:
        env_file = ".env"
        case_sensitive = True
        extra = "ignore"

settings = Settings()
