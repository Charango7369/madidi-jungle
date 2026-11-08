import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Madidi Jungle Ecolodge | 100% Indigenous Eco-Tours in Bolivia Amazon',
  description:
    'Experience Earth\'s most biodiverse primary rainforest in Madidi National Park, Bolivia. Owned and guided 100% by native San José de Uchupiamonas indigenous naturalists. Small groups, solar cabins, and direct booking guarantee.',
  keywords: [
    'Madidi National Park tours',
    'Bolivia jungle tours',
    'Amazon rainforest Bolivia',
    'Madidi ecolodge',
    'Wildlife tours Bolivia',
    'Birdwatching Bolivia Madidi',
    'Rurrenabaque eco tours',
    'San José de Uchupiamonas'
  ],
  authors: [{ name: 'Madidi Jungle Ecolodge Indigenous Community' }],
  metadataBase: new URL('https://madidijungle.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'es': '/es',
      'fr': '/fr',
      'de': '/de',
      'x-default': '/',
    },
  },
  openGraph: {
    title: 'Madidi Jungle Ecolodge | Bolivia Amazon Tours',
    description:
      'Pristine primary rainforest tours inside Madidi National Park. 100% native community owned. Small groups and private solar cabins.',
    url: 'https://madidijungle.com',
    siteName: 'Madidi Jungle Ecolodge',
    images: [
      {
        url: 'https://www.madidijungle.com/images/slideshow1.jpg',
        width: 1200,
        height: 630,
        alt: 'Madidi Jungle Ecolodge river navigation on Tuichi River Bolivia',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madidi Jungle Ecolodge | Authentic Amazon Ecotourism Bolivia',
    description: 'Explore Earth\'s most biodiverse national park with indigenous native guides.',
    images: ['https://www.madidijungle.com/images/slideshow1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  'name': 'Madidi Jungle Ecolodge',
  'image': 'https://www.madidijungle.com/images/slideshow1.jpg',
  'description': '100% native indigenous community eco-lodge inside Madidi National Park, Bolivia. Sustainable solar cabins, guided primary forest wildlife tracking, and birdwatching.',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Tuichi River, Madidi National Park',
    'addressLocality': 'Rurrenabaque',
    'addressRegion': 'Beni',
    'addressCountry': 'BO'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': -14.4667,
    'longitude': -67.9167
  },
  'url': 'https://madidijungle.com',
  'telephone': '+59172288339',
  'priceRange': '$$',
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '5.0',
    'reviewCount': '450',
    'bestRating': '5',
    'worstRating': '1'
  },
  'amenityFeature': [
    { '@type': 'LocationFeatureSpecification', 'name': 'Pure Natural Spring Water', 'value': true },
    { '@type': 'LocationFeatureSpecification', 'name': 'Solar Electric Power', 'value': true },
    { '@type': 'LocationFeatureSpecification', 'name': 'Bilingual Indigenous Guides', 'value': true },
    { '@type': 'LocationFeatureSpecification', 'name': 'Private Balcony with Hammocks', 'value': true },
    { '@type': 'LocationFeatureSpecification', 'name': 'Full Board Amazonian Cuisine', 'value': true }
  ]
};

import { CookieConsentBanner } from '../components/CookieConsentBanner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="antialiased min-h-screen bg-jungle-950 text-sand-100 flex flex-col">
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
