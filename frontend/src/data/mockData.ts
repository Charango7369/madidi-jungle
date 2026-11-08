import { Tour, Accommodation, Review, FAQ } from '../types';

export const TOURS_DATA: Tour[] = [
  {
    code: 'P1',
    slug: 'cullpana-full-day',
    name: 'Cullpana Full Day Expedition',
    tagline: 'Ideal for travelers with limited time seeking immediate primary rainforest immersion.',
    days: 1,
    nights: 0,
    price_shared_usd: 120,
    price_private_usd: 120,
    difficulty: 'easy',
    highlight_wildlife: ['Capuchin Monkeys', 'Hoatzin Birds', 'Caimans', 'Giant Ficus Trees'],
    included_items: [
      'Round-trip motorized riverboat transport (3h)',
      'Native bilingual naturalist guide (San José de Uchupiamonas)',
      'Traditional Amazonian lunch wrapped in banana leaves',
      'Rubber boots and rain ponchos',
      'Guided trek on Cullpana primary trail'
    ],
    excluded_items: [
      'Madidi National Park admission (200 BOB ~ $30 USD in cash)',
      'Flights to/from Rurrenabaque',
      'Personal snacks and soft drinks'
    ],
    is_featured: false,
    hero_image: 'https://www.madidijungle.com/images/slideshow1.jpg',
    gallery_images: [
      'https://www.madidijungle.com/archivos/foto74_b.jpg',
      'https://www.madidijungle.com/archivos/foto45_b.jpg'
    ],
    itinerary: [
      {
        day_number: 1,
        title: 'Bala Canyon Navigation & Cullpana Giant Trees',
        description: 'Depart 8:30 AM by riverboat through Bala Canyon into the Tuichi river. Guided hike through primary forest, lunch, and return drift to Rurrenabaque by 4:30 PM.',
        meals: 'Lunch',
        activities: ['Riverboat 3h', 'Primary Forest Trek', 'Gastronomy']
      }
    ]
  },
  {
    code: 'P2',
    slug: 'mapajo-2d-1n',
    name: 'Mapajo 2 Days / 1 Night',
    tagline: 'A nocturnal wildlife discovery featuring our signature night safari walk.',
    days: 2,
    nights: 1,
    price_shared_usd: 205,
    price_private_usd: 220,
    difficulty: 'moderate',
    highlight_wildlife: ['Squirrel Monkeys', 'Toucans', 'Tarantulas & Frogs', 'Parrots', 'Medicinal Trees'],
    included_items: [
      'Airport/terminal pickup in Rurrenabaque',
      'Motorboat transfers along Beni and Tuichi rivers',
      '1 night in traditional jatata eco-cabin',
      'All meals (lunch, dinner, breakfast, lunch)',
      'Native naturalist guide',
      'Guided night safari expedition'
    ],
    excluded_items: [
      'Park admission fee (200 BOB)',
      'Domestic flights',
      'Bar purchases'
    ],
    is_featured: false,
    hero_image: 'https://www.madidijungle.com/archivos/foto76_b.jpg',
    gallery_images: [
      'https://www.madidijungle.com/archivos/foto33_b.jpg',
      'https://www.madidijungle.com/archivos/foto38_b.jpg'
    ],
    itinerary: [
      {
        day_number: 1,
        title: 'Tuichi River Navigation & Night Safari',
        description: 'Navigate upriver to the lodge. Check-in, afternoon botanical walk, and evening night safari searching for glowing insects, tarantulas, and night monkeys.',
        meals: 'Lunch, Dinner',
        activities: ['River Navigation', 'Mapajo Trail', 'Night Walk']
      },
      {
        day_number: 2,
        title: 'Dawn Birding & Scenic Return Drift',
        description: 'Wake up with howler monkeys and toucans. Morning hike on Tareche loop. Farewell Amazonian lunch and peaceful downriver return to Rurrenabaque.',
        meals: 'Breakfast, Lunch',
        activities: ['Dawn Birding', 'Tareche Loop', 'Downriver Transfer']
      }
    ]
  },
  {
    code: 'P3',
    slug: 'tareche-3d-2n',
    name: 'Tareche 3 Days / 2 Nights (Best Seller)',
    tagline: 'Our flagship immersion: Macaw clay cliffs, piranha fishing, and ancestral legends.',
    days: 3,
    nights: 2,
    price_shared_usd: 290,
    price_private_usd: 320,
    difficulty: 'moderate',
    highlight_wildlife: ['Red Howler Monkeys', 'Red-and-Green Macaws', 'Wild Peccaries', 'Giant River Otters', 'Piranhas'],
    included_items: [
      'All riverboat transportation with covered roofs and life jackets',
      '2 nights in hand-woven jatata eco-cabins with private balcony',
      'Full board Amazonian gourmet meals and fresh tropical juices',
      'Private indigenous naturalist guide (max 5 guests per guide)',
      'Boat excursion to the Macaw Clay Cliff (Farallón de Parabas)',
      'Traditional catch-and-release piranha fishing',
      'Night jungle safari walks',
      'Rubber boots and ponchos'
    ],
    excluded_items: [
      'Madidi Park admission (200 BOB ~ $30 USD in cash)',
      'Aero tickets La Paz - Rurrenabaque',
      'Bar drinks and tips'
    ],
    is_featured: true,
    hero_image: 'https://www.madidijungle.com/archivos/foto37_b.jpg',
    gallery_images: [
      'https://www.madidijungle.com/archivos/foto44_b.jpg',
      'https://www.madidijungle.com/archivos/foto29_b.jpg',
      'https://www.madidijungle.com/archivos/foto47_b.jpg'
    ],
    itinerary: [
      {
        day_number: 1,
        title: 'Bala Canyon & Tareche Primary Rainforest',
        description: 'Scenic 3-hour motorized riverboat up the Beni and Tuichi rivers. Check into your cabin. 3-hour hike on the Tareche trail exploring gigantic thousand-year-old trees. Night safari after dinner.',
        meals: 'Lunch, Dinner',
        activities: ['River Navigation 3h', 'Tareche Trail 3h', 'Night Safari']
      },
      {
        day_number: 2,
        title: 'Farallón de Parabas (Macaw Cliff) & Biwa Trail',
        description: 'Sunrise boat ride to the macaw nesting cliff where dozens of red-and-green macaws feed. Deep forest hike on Biwa trail tracking peccaries and brown capuchins. Afternoon piranha fishing.',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Macaw Cliff Excursion', 'Biwa Deep Trail', 'Piranha Fishing', 'Campfire Stories']
      },
      {
        day_number: 3,
        title: 'Ancestral Medicinal Plants & Farewell Drift',
        description: 'Morning botanical masterclass exploring curative tree bark, natural repellents, and water lianas. Farewell Amazonian lunch and peaceful river drift back to Rurrenabaque.',
        meals: 'Breakfast, Lunch',
        activities: ['Medicinal Masterclass', 'Farewell Lunch', 'Return Transfer']
      }
    ]
  },
  {
    code: 'P4',
    slug: 'wabu-4d-3n',
    name: 'Wabu 4 Days / 3 Nights',
    tagline: 'Deep primary rainforest exploration: Remote mammal clay licks and river tubing.',
    days: 4,
    nights: 3,
    price_shared_usd: 375,
    price_private_usd: 420,
    difficulty: 'challenging',
    highlight_wildlife: ['Jaguar Tracks', 'Tapirs', 'Spider Monkeys', 'King Vultures', 'Amazon Horned Frogs'],
    included_items: [
      'Complete river and airport transfers in Rurrenabaque',
      '3 nights accommodation in eco-cabin with hammock veranda',
      'All meals, fresh river snacks, and spring water',
      'Dedicated native wildlife tracker',
      'Remote mammal clay lick (salitral) expedition',
      'Tuichi river tubing drift (seasonal dry months)',
      'All gear, rubber boots and ponchos'
    ],
    excluded_items: [
      'Madidi Park entry fee (200 BOB)',
      'Flights',
      'Personal bar purchases'
    ],
    is_featured: true,
    hero_image: 'https://www.madidijungle.com/archivos/foto32_b.jpg',
    gallery_images: [
      'https://www.madidijungle.com/archivos/foto43_b.jpg',
      'https://www.madidijungle.com/archivos/foto30_b.jpg'
    ],
    itinerary: [
      {
        day_number: 1,
        title: 'Into the Wild Tuichi & Night Safari',
        description: 'Navigate upriver to the lodge. Welcome drink and check-in. Introductory hike on Tareche loop and first night safari.',
        meals: 'Lunch, Dinner',
        activities: ['Tuichi Navigation', 'Tareche Hike', 'Night Safari']
      },
      {
        day_number: 2,
        title: 'Macaw Cliffs & Mammal Mineral Clay Lick',
        description: 'Dawn visit to macaw nesting cliffs. Long trek to remote mineral clay lick where tapirs and wild pigs gather.',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Macaw Cliff', 'Clay Lick Trek', 'Mammal Tracking']
      },
      {
        day_number: 3,
        title: 'Deep Wabu Trail & Tuichi River Tubing',
        description: 'Deep virgin rainforest exploration along Wabu trail searching for feline tracks. Afternoon relaxing river tubing drift on the pristine Tuichi River.',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Wabu Deep Trail', 'River Tubing', 'Campfire Legends']
      },
      {
        day_number: 4,
        title: 'Indigenous Seed Crafts & Return Drift',
        description: 'Morning workshop on ancestral craft making using rainforest seeds and fibers. Farewell lunch and river drift back to Rurrenabaque.',
        meals: 'Breakfast, Lunch',
        activities: ['Craft Workshop', 'Return Transfer']
      }
    ]
  },
  {
    code: 'P5',
    slug: 'biwa-5d-4n',
    name: 'Biwa 5 Days / 4 Nights (Full Expedition)',
    tagline: 'The ultimate immersion for ornithologists, photographers, and deep wilderness seekers.',
    days: 5,
    nights: 4,
    price_shared_usd: 460,
    price_private_usd: 520,
    difficulty: 'expedition',
    highlight_wildlife: ['Ocelots', 'Giant Anteaters', 'Harpy Eagles (rare)', 'Over 200 bird species', 'Wild Orchids'],
    included_items: [
      'Comprehensive river navigation and logistics',
      '4 nights in private handcrafted eco-cabins',
      'Custom catering and trail provisions',
      'Senior native guide with specialized ornithology training',
      'Exclusive access to remote interior trails and ridge lines',
      'Rubber boots, ponchos, and safety equipment'
    ],
    excluded_items: [
      'Madidi Park admission',
      'Flights',
      'Bar consumption'
    ],
    is_featured: false,
    hero_image: 'https://www.madidijungle.com/archivos/foto49_b.jpg',
    gallery_images: [
      'https://www.madidijungle.com/archivos/foto31_b.jpg',
      'https://www.madidijungle.com/archivos/foto34_b.jpg',
      'https://www.madidijungle.com/archivos/foto41_b.jpg'
    ],
    itinerary: [
      {
        day_number: 1,
        title: 'Arrival & Tareche Trail',
        description: 'Boat upstream through Bala Canyon to the lodge. Check-in, afternoon walk, and night safari.',
        meals: 'Lunch, Dinner',
        activities: ['River Navigation', 'Tareche Walk', 'Night Safari']
      },
      {
        day_number: 2,
        title: 'Macaw Cliff & Deep Biwa Loop',
        description: 'Macaw cliff morning visit. 4-hour deep jungle trek observing primates, canopy birds, and giant hardwoods.',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Macaw Cliff', 'Biwa Deep Trail', 'Piranha Fishing']
      },
      {
        day_number: 3,
        title: 'Interior Oxbow Lagoons & Caiman Tracking',
        description: 'Expedition to hidden oxbow lagoons seeking black caimans, prehistoric hoatzins, and giant otters.',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Hidden Lagoon Trek', 'Aquatic Wildlife Tracking']
      },
      {
        day_number: 4,
        title: 'Canopy Ridge Views & River Tubing',
        description: 'Trek to panoramic ridge lines overlooking the endless Amazon green canopy. Afternoon river tubing drift.',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Canopy Ridge Trek', 'Tuichi Tubing', 'Indigenous Stories']
      },
      {
        day_number: 5,
        title: 'Dawn Birding & Farewell River Drift',
        description: 'Final early morning bird photography session. Farewell lunch and peaceful river drift return to Rurrenabaque.',
        meals: 'Breakfast, Lunch',
        activities: ['Dawn Birding', 'Farewell Lunch', 'Return Transfer']
      }
    ]
  }
];

export const ACCOMMODATIONS_DATA: Accommodation[] = [
  {
    slug: 'cabana-privada-tuichi',
    name: 'Tuichi Traditional Cabin (Private Bathroom)',
    cabin_type: 'Traditional Jatata Cabin',
    max_guests: 3,
    bed_configuration: '1 King Bed + 1 Single Bed',
    bathroom_type: 'private',
    amenities: [
      'Private en-suite bathroom',
      'Pure natural spring water shower',
      'High-density mosquito netting',
      'Private balcony with Amazonian hammock',
      'Solar-powered lighting & USB charging',
      'Room safety box'
    ],
    image_url: 'https://www.madidijungle.com/archivos/foto15_b.jpg',
    description: 'Handcrafted by Uchupiamonas artisans using fallen native timber and natural jatata palm leaf weaving that naturally regulates temperature. Includes a private veranda overlooking the virgin canopy.'
  },
  {
    slug: 'cabana-familiar-bala',
    name: 'El Bala Family Bungalow',
    cabin_type: 'Family Bungalow',
    max_guests: 5,
    bed_configuration: '2 Queen Beds + 1 Single Bed',
    bathroom_type: 'private',
    amenities: [
      'En-suite double private bathroom',
      'Large wraparound porch with 2 hammocks',
      'Panoramic mosquito screening',
      'Natural spring water',
      'Solar reading lamps'
    ],
    image_url: 'https://www.madidijungle.com/archivos/foto53_b.jpg',
    description: 'Spacious jungle bungalow designed for families or nature-loving travel companions, offering maximum comfort, safety, and acoustic immersion into the jungle.'
  },
  {
    slug: 'cabana-aventura-compartida',
    name: 'Adventure Rustic Cabin (Shared Bathroom)',
    cabin_type: 'Rustic Eco-Cabin',
    max_guests: 2,
    bed_configuration: '2 Twin Beds',
    bathroom_type: 'shared',
    amenities: [
      'Shared modern eco-bathrooms (cleaned 24/7)',
      'Spring water showers',
      'High quality mosquito netting',
      'Shared relaxing terrace with hammocks'
    ],
    image_url: 'https://www.madidijungle.com/archivos/foto1_b.jpg',
    description: 'The ideal budget-conscious choice for backpackers and solo adventurers without compromising deep restful sleep, hygiene, or comfort.'
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    author_name: 'Sarah & Mark Jenkins',
    author_country: 'United Kingdom',
    author_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    platform: 'TripAdvisor',
    title: 'Unbeatable wildlife encounter and authentic indigenous hospitality',
    comment: 'We chose the 3D/2N Tareche tour and it exceeded all expectations. Our guide, Jaime, grew up in the Uchupiamonas community and could spot monkeys hundreds of meters up in the canopy by sound alone! The food prepared with local ingredients was delicious, and the cabins are surprisingly comfortable and clean. Do not hesitate to book direct!',
    tour_taken: 'Tareche 3D/2N Program',
    visit_date: 'August 2026'
  },
  {
    author_name: 'Dr. Michael Becker',
    author_country: 'Germany',
    author_avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    platform: 'TripAdvisor',
    title: 'Beste Urwald-Erfahrung unseres Lebens!',
    comment: 'Als Vogelbeobachter war Madidi mein Lebenstraum. Wir haben im 5-Tage Biwa Programm über 180 Vogelarten dokumentiert, darunter Ara-Kolonien und Trogone. Die Ecolodge setzt Maßstäbe in Sachen nachhaltiger Indigenen-Tourismus. Fantastische Organisation ab Rurrenabaque.',
    tour_taken: 'Biwa 5D/4N Expedition',
    visit_date: 'July 2026'
  },
  {
    author_name: 'Camille & Antoine Laurent',
    author_country: 'France',
    author_avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    platform: 'TripAdvisor',
    title: 'Une aventure magique en Amazonie bolivienne',
    comment: 'La navigation sur la rivière Tuichi est spectaculaire. Dormir au milieu des bruits de la forêt dans une cabane en jatata est inoubliable. L’équipe a adapté tous les repas pour mon régime végétarien sans problème. Bravo à toute la communauté pour la protection du parc !',
    tour_taken: 'Tareche 3D/2N Program',
    visit_date: 'September 2026'
  },
  {
    author_name: 'Carlos Mendoza & Familia',
    author_country: 'España',
    author_avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    platform: 'Google Reviews',
    title: 'Experiencia educativa y humana insuperable',
    comment: 'Fuimos con nuestros dos hijos de 9 y 12 años. Los guías cuidaron cada detalle de seguridad en el río y en la selva. Ver guacamayos libres en el farallón y pescar pirañas fue la mayor aventura de sus vidas. ¡Orgullo boliviano!',
    tour_taken: 'Tareche 3D/2N Program',
    visit_date: 'October 2026'
  }
];

export const FAQS_DATA: FAQ[] = [
  {
    category: 'transport',
    question: 'How do I get from La Paz to Rurrenabaque?',
    answer: 'The recommended and easiest way is a 40-minute scenic flight from La Paz (El Alto Airport) to Rurrenabaque on regional airlines (e.g. Ecojet). Our staff waits for you directly outside Rurrenabaque airport with a personalized name sign for your seamless transfer to our river pier.'
  },
  {
    category: 'health',
    question: 'What vaccines and health precautions are required?',
    answer: 'The Yellow Fever vaccination is officially required by park authorities (administered at least 10 days before travel). Because Madidi Jungle is situated on the fast-flowing, clean waters of the Tuichi River, malaria risk is extremely low. DEET 30-50% insect repellent is strongly recommended. We provide unlimited certified purified drinking water 24/7.'
  },
  {
    category: 'gear',
    question: 'What should I pack in my jungle bag?',
    answer: 'Pack lightweight, quick-drying clothing in neutral earthy colors (long sleeves and long pants), a powerful headlamp with spare batteries, sun hat, binoculars, and sandals for relaxing at the cabins. We provide rubber boots (sizes 35 to 46) and rain ponchos for all excursions.'
  },
  {
    category: 'payment',
    question: 'Is the Madidi National Park entrance fee included?',
    answer: 'No. Bolivia’s National Protected Areas Service (SERNAP) charges an official park admission fee of 200 Bolivianos (approx. $30 USD) for foreign visitors, payable strictly in cash at the ranger checkpoint along the river.'
  }
];
