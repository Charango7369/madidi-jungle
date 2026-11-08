export type Language = 'en' | 'es' | 'fr' | 'de';
export type Currency = 'USD' | 'EUR' | 'BOB';
export type BathroomPreference = 'private' | 'shared';

export interface TourItineraryDay {
  day_number: number;
  title: string;
  description: string;
  meals: string;
  activities: string[];
}

export interface Tour {
  code: string;
  slug: string;
  name: string;
  tagline: string;
  days: number;
  nights: number;
  price_shared_usd: number;
  price_private_usd: number;
  difficulty: 'easy' | 'moderate' | 'challenging' | 'expedition';
  highlight_wildlife: string[];
  included_items: string[];
  excluded_items: string[];
  is_featured: boolean;
  hero_image: string;
  gallery_images: string[];
  itinerary: TourItineraryDay[];
}

export interface Accommodation {
  slug: string;
  name: string;
  cabin_type: string;
  max_guests: number;
  bed_configuration: string;
  bathroom_type: BathroomPreference;
  amenities: string[];
  image_url: string;
  description: string;
}

export interface Review {
  author_name: string;
  author_country: string;
  author_avatar?: string;
  rating: number;
  platform: string;
  title: string;
  comment: string;
  tour_taken: string;
  visit_date: string;
}

export interface FAQ {
  category: 'transport' | 'health' | 'gear' | 'payment';
  question: string;
  answer: string;
}

export interface BookingFormData {
  tour_code: string;
  travel_date: string;
  adults: number;
  children: number;
  infants: number;
  bathroom_type: BathroomPreference;
  currency: Currency;
  name: string;
  email: string;
  phone: string;
  country: string;
  dietary_notes?: string;
}
