-- =====================================================================
-- MADIDI JUNGLE ECOLODGE - POSTGRESQL DATABASE SCHEMA
-- Production-Ready Schema for Ecotourism Booking & Operations Platform
-- =====================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Clean existing tables if needed
DROP TABLE IF EXISTS audit_logs CASCADE;
DROP TABLE IF EXISTS blog_posts CASCADE;
DROP TABLE IF EXISTS gallery_items CASCADE;
DROP TABLE IF EXISTS faqs CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS leads CASCADE;
DROP TABLE IF EXISTS bookings CASCADE;
DROP TABLE IF EXISTS tour_itineraries CASCADE;
DROP TABLE IF EXISTS accommodations CASCADE;
DROP TABLE IF EXISTS tours CASCADE;

-- Enums
CREATE TYPE booking_status_enum AS ENUM ('pending', 'confirmed', 'cancelled', 'completed');
CREATE TYPE bathroom_preference_enum AS ENUM ('shared', 'private');
CREATE TYPE platform_source_enum AS ENUM ('web_form', 'whatsapp_concierge', 'ota_direct', 'phone');
CREATE TYPE difficulty_level_enum AS ENUM ('easy', 'moderate', 'challenging', 'expedition');

-- 1. TOURS TABLE
CREATE TABLE tours (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code VARCHAR(10) NOT NULL UNIQUE, -- P1, P2, P3, P4, P5
    slug VARCHAR(100) NOT NULL UNIQUE,
    name_es VARCHAR(150) NOT NULL,
    name_en VARCHAR(150) NOT NULL,
    name_fr VARCHAR(150) NOT NULL,
    name_de VARCHAR(150) NOT NULL,
    tagline_es VARCHAR(255) NOT NULL,
    tagline_en VARCHAR(255) NOT NULL,
    days INT NOT NULL CHECK (days >= 1),
    nights INT NOT NULL CHECK (nights >= 0),
    price_shared_usd NUMERIC(10, 2) NOT NULL CHECK (price_shared_usd > 0),
    price_private_usd NUMERIC(10, 2) NOT NULL CHECK (price_private_usd >= price_shared_usd),
    difficulty difficulty_level_enum NOT NULL DEFAULT 'moderate',
    highlight_wildlife TEXT[] NOT NULL DEFAULT '{}',
    included_items TEXT[] NOT NULL DEFAULT '{}',
    excluded_items TEXT[] NOT NULL DEFAULT '{}',
    is_featured BOOLEAN NOT NULL DEFAULT FALSE,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    hero_image VARCHAR(500) NOT NULL,
    gallery_images TEXT[] NOT NULL DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_tours_slug ON tours(slug);
CREATE INDEX idx_tours_is_featured ON tours(is_featured);

-- 2. TOUR ITINERARIES TABLE (Day-by-day breakdowns)
CREATE TABLE tour_itineraries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tour_id UUID NOT NULL REFERENCES tours(id) ON DELETE CASCADE,
    day_number INT NOT NULL CHECK (day_number >= 1),
    title_es VARCHAR(200) NOT NULL,
    title_en VARCHAR(200) NOT NULL,
    title_fr VARCHAR(200) NOT NULL,
    title_de VARCHAR(200) NOT NULL,
    description_es TEXT NOT NULL,
    description_en TEXT NOT NULL,
    meals VARCHAR(100) NOT NULL, -- e.g. "Lunch, Dinner"
    activities TEXT[] NOT NULL DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_tour_day UNIQUE (tour_id, day_number)
);

CREATE INDEX idx_itineraries_tour_id ON tour_itineraries(tour_id);

-- 3. ACCOMMODATIONS TABLE
CREATE TABLE accommodations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(100) NOT NULL UNIQUE,
    name_es VARCHAR(150) NOT NULL,
    name_en VARCHAR(150) NOT NULL,
    cabin_type VARCHAR(50) NOT NULL, -- 'Traditional Jatata Cabin', 'Family Bungalow'
    max_guests INT NOT NULL DEFAULT 2,
    bed_configuration VARCHAR(100) NOT NULL,
    bathroom_type bathroom_preference_enum NOT NULL DEFAULT 'private',
    amenities TEXT[] NOT NULL DEFAULT '{}',
    image_url VARCHAR(500) NOT NULL,
    description_es TEXT NOT NULL,
    description_en TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. BOOKINGS TABLE
CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    booking_code VARCHAR(20) NOT NULL UNIQUE, -- MJ-2026-XXXX
    tour_id UUID NOT NULL REFERENCES tours(id),
    customer_name VARCHAR(150) NOT NULL,
    customer_email VARCHAR(150) NOT NULL,
    customer_phone VARCHAR(50) NOT NULL,
    country VARCHAR(100) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    adults_count INT NOT NULL CHECK (adults_count >= 1),
    children_count INT NOT NULL DEFAULT 0 CHECK (children_count >= 0),
    bathroom_type bathroom_preference_enum NOT NULL DEFAULT 'private',
    dietary_notes TEXT,
    flight_arrival_details TEXT,
    currency_selected VARCHAR(3) NOT NULL DEFAULT 'USD',
    total_amount_usd NUMERIC(10, 2) NOT NULL CHECK (total_amount_usd >= 0),
    status booking_status_enum NOT NULL DEFAULT 'pending',
    source platform_source_enum NOT NULL DEFAULT 'web_form',
    internal_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_bookings_code ON bookings(booking_code);
CREATE INDEX idx_bookings_dates ON bookings(start_date, end_date);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_email ON bookings(customer_email);

-- 5. LEADS TABLE (Lead capture & Field guide downloads)
CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(150) NOT NULL,
    first_name VARCHAR(100),
    interested_tour_code VARCHAR(10),
    campaign_source VARCHAR(100) DEFAULT 'field_guide_download',
    preferred_language VARCHAR(5) DEFAULT 'en',
    has_downloaded_guide BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_leads_email ON leads(email);

-- 6. REVIEWS TABLE (TripAdvisor & Verified Guest Reviews)
CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    author_name VARCHAR(100) NOT NULL,
    author_country VARCHAR(100) NOT NULL,
    author_avatar VARCHAR(500),
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    platform VARCHAR(50) NOT NULL DEFAULT 'TripAdvisor',
    title VARCHAR(200) NOT NULL,
    comment TEXT NOT NULL,
    tour_taken VARCHAR(100),
    visit_date DATE NOT NULL,
    is_featured BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_reviews_rating ON reviews(rating);

-- 7. FAQS TABLE
CREATE TABLE faqs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category VARCHAR(50) NOT NULL, -- 'transport', 'health', 'gear', 'payment', 'wildlife'
    question_es VARCHAR(300) NOT NULL,
    question_en VARCHAR(300) NOT NULL,
    question_fr VARCHAR(300) NOT NULL,
    question_de VARCHAR(300) NOT NULL,
    answer_es TEXT NOT NULL,
    answer_en TEXT NOT NULL,
    answer_fr TEXT NOT NULL,
    answer_de TEXT NOT NULL,
    display_order INT NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE INDEX idx_faqs_category ON faqs(category);

-- 8. GALLERY ITEMS TABLE
CREATE TABLE gallery_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title_es VARCHAR(150) NOT NULL,
    title_en VARCHAR(150) NOT NULL,
    category VARCHAR(50) NOT NULL, -- 'wildlife', 'landscapes', 'community', 'lodge'
    image_url VARCHAR(500) NOT NULL,
    thumbnail_url VARCHAR(500) NOT NULL,
    photographer_credit VARCHAR(100) DEFAULT 'Madidi Jungle Guides',
    is_featured BOOLEAN DEFAULT FALSE,
    display_order INT DEFAULT 0
);

-- 9. AUDIT LOGS
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    action VARCHAR(50) NOT NULL,
    entity_name VARCHAR(50) NOT NULL,
    entity_id UUID,
    payload JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Trigger to update updated_at timestamp automatically
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_tours_updated_at BEFORE UPDATE ON tours FOR EACH ROW EXECUTE FUNCTION update_timestamp();
CREATE TRIGGER trg_bookings_updated_at BEFORE UPDATE ON bookings FOR EACH ROW EXECUTE FUNCTION update_timestamp();
