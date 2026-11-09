import type { Metadata } from 'next';
import './globals.css';
import { CookieConsentBanner } from '../components/CookieConsentBanner';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://madidijungle.apolodigital.lat';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Madidi Jungle Ecolodge | 100% Indigenous Eco-Tours in Bolivia Amazon',
  description:
    'Sustainable eco-tours in Madidi National Park, Bolivia. 100% native community owned. Solar eco-cabins, wildlife observation and indigenous guided expeditions.',
  keywords: [
    'Madidi National Park tours',
    'Bolivia jungle tours',
    'Amazon rainforest Bolivia',
    'Madidi ecolodge',
    'Wildlife tours Bolivia',
    'Birdwatching Bolivia Madidi',
    'Rurrenabaque eco tours',
    'San José de Uchupiamonas',
    'Ecoturismo Bolivia'
  ],
  authors: [{ name: 'Madidi Jungle Ecolodge Indigenous Community' }],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: 'https://www.madidijungle.com/images/slideshow1.jpg', type: 'image/jpeg' },
    ],
    apple: [
      { url: 'https://www.madidijungle.com/images/slideshow1.jpg' }
    ],
  },
  openGraph: {
    title: 'Madidi Jungle Ecolodge | Authentic Amazon Eco-Tours Bolivia',
    description:
      'Pristine primary rainforest tours inside Madidi National Park. 100% indigenous community owned. Small groups and private solar cabins.',
    url: SITE_URL,
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
    alternateLocale: ['es_ES', 'fr_FR', 'de_DE'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madidi Jungle Ecolodge | Authentic Amazon Ecotourism Bolivia',
    description: 'Explore Earth\'s most biodiverse national park with native indigenous naturalists.',
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
  other: {
    'geo.region': 'BO-B',
    'geo.placename': 'Rurrenabaque, Parque Nacional Madidi, Beni, Bolivia',
    'geo.position': '-14.4667;-67.9167',
    'ICBM': '-14.4667, -67.9167',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LodgingBusiness', 'TravelAgency'],
      '@id': `${SITE_URL}/#organization`,
      'name': 'Madidi Jungle Ecolodge',
      'image': 'https://www.madidijungle.com/images/slideshow1.jpg',
      'description': '100% native indigenous community eco-lodge inside Madidi National Park, Bolivia. Sustainable solar cabins, guided primary forest wildlife tracking, and birdwatching.',
      'url': SITE_URL,
      'telephone': '+59172288339',
      'priceRange': '$$',
      'currenciesAccepted': 'USD, EUR, BOB',
      'paymentAccepted': 'Cash, Credit Card, Bank Transfer',
      'areaServed': {
        '@type': 'AdministrativeArea',
        'name': 'Parque Nacional y Área Natural de Manejo Integrado Madidi'
      },
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Calle Comercio s/n (Office) / Tuichi River (Lodge)',
        'addressLocality': 'Rurrenabaque',
        'addressRegion': 'Beni',
        'postalCode': '0000',
        'addressCountry': 'BO'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': -14.4667,
        'longitude': -67.9167
      },
      'hasMap': 'https://maps.google.com/?q=Calle+Comercio+Rurrenabaque+Beni+Bolivia',
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
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Official Madidi Rainforest Expeditions',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'TouristTrip',
              'name': 'Cullpana Program (Full Day)',
              'description': 'Full day primary rainforest expedition along the Tuichi River.',
              'touristType': 'Nature lovers, Day visitors',
              'offers': { '@type': 'Offer', 'price': '120.00', 'priceCurrency': 'USD', 'availability': 'https://schema.org/InStock' }
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'TouristTrip',
              'name': 'Mapajo Program (2 Days / 1 Night)',
              'description': 'Jungle getaway with signature guided night walk for nocturnal wildlife discovery.',
              'offers': { '@type': 'Offer', 'price': '205.00', 'priceCurrency': 'USD', 'availability': 'https://schema.org/InStock' }
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'TouristTrip',
              'name': 'Tareche Program (3 Days / 2 Nights) - Best Seller',
              'description': 'Macaw clay licks, piranha fishing in Tuichi lagoons and rich wildlife encounters.',
              'offers': { '@type': 'Offer', 'price': '310.00', 'priceCurrency': 'USD', 'availability': 'https://schema.org/InStock' }
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'TouristTrip',
              'name': 'Wabu Program (4 Days / 3 Nights)',
              'description': 'Deep virgin rainforest expedition, river tubing, and indigenous crafting workshops.',
              'offers': { '@type': 'Offer', 'price': '380.00', 'priceCurrency': 'USD', 'availability': 'https://schema.org/InStock' }
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'TouristTrip',
              'name': 'Biwa Program (5 Days / 4 Nights Expedition)',
              'description': 'Definitive biological expedition for photographers, birdwatchers, and adventurers.',
              'offers': { '@type': 'Offer', 'price': '460.00', 'priceCurrency': 'USD', 'availability': 'https://schema.org/InStock' }
            }
          }
        ]
      }
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How do I get from La Paz to Rurrenabaque?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The recommended way is a 40-minute scenic flight from La Paz (El Alto Airport) to Rurrenabaque. Our staff meets you directly at Rurrenabaque airport for transfer to our river pier.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What vaccines and health precautions are required?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yellow Fever vaccination is required by park authorities. Malaria risk is extremely low along the Tuichi River. DEET 30-50% insect repellent is recommended. Purified drinking water is provided 24/7.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What should I pack in my jungle bag?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Pack lightweight quick-drying long-sleeve clothing in neutral colors, headlamp with extra batteries, sun hat, and binoculars. Rubber boots and rain ponchos are provided.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Is the Madidi National Park entrance fee included?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No. SERNAP charges an official park admission fee of 200 Bolivianos (approx. $30 USD) for foreign visitors, payable strictly in cash at the ranger checkpoint.'
          }
        }
      ]
    }
  ]
};

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
        {/* Preconnect prioritized for LCP Hero image and CDNs */}
        <link rel="preconnect" href="https://www.madidijungle.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased min-h-screen bg-jungle-950 text-sand-100 flex flex-col">
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
