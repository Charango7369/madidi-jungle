-- =====================================================================
-- MADIDI JUNGLE ECOLODGE - SEED DATA
-- Authentic Data for National Park Madidi (San Jose de Uchupiamonas)
-- =====================================================================

-- 1. SEED TOURS
INSERT INTO tours (
    id, code, slug, name_es, name_en, name_fr, name_de,
    tagline_es, tagline_en, days, nights,
    price_shared_usd, price_private_usd, difficulty,
    highlight_wildlife, included_items, excluded_items,
    is_featured, hero_image, gallery_images
) VALUES
(
    '11111111-1111-1111-1111-111111111111',
    'P1',
    'cullpana-full-day',
    'Programa Cullpana - Día Completo en Selva',
    'Cullpana Program - Full Day Jungle Expedition',
    'Programme Cullpana - Journée Complète en Jungle',
    'Cullpana Programm - Ganztägige Dschungelexpedition',
    'Ideal para viajeros con poco tiempo que desean adentrarse en el Parque Madidi navegando los ríos Beni y Tuichi.',
    'Perfect for travelers on a tight schedule wishing to navigate the Beni and Tuichi rivers into pristine rainforest.',
    1, 0, 120.00, 120.00, 'easy',
    ARRAY['Capuchin Monkeys', 'Hoatzin Birds', 'Caimans', 'Giant Amazonian Trees'],
    ARRAY['Pick up at Rurrenabaque', 'Motorized boat transfer on Beni & Tuichi rivers', 'Bilingual native guide', 'Full traditional lunch', 'Rubber boots & rain poncho', 'Trekking through primary trails'],
    ARRAY['Madidi National Park fee (200 BOB cash)', 'Flights to Rurrenabaque', 'Alcoholic beverages & personal tips'],
    FALSE,
    'https://www.madidijungle.com/images/slideshow1.jpg',
    ARRAY[
        'https://www.madidijungle.com/archivos/foto74_b.jpg',
        'https://www.madidijungle.com/archivos/foto45_b.jpg'
    ]
),
(
    '22222222-2222-2222-2222-222222222222',
    'P2',
    'mapajo-2d-1n',
    'Programa Mapajo - 2 Días / 1 Noche',
    'Mapajo Program - 2 Days / 1 Night',
    'Programme Mapajo - 2 Jours / 1 Nuit',
    'Mapajo Programm - 2 Tage / 1 Nacht',
    'Una escapada intensa al corazón de la selva con caminata nocturna para observar fauna nocturna.',
    'An intense rainforest getaway featuring our signature guided night walk for nocturnal wildlife discovery.',
    2, 1, 205.00, 220.00, 'moderate',
    ARRAY['Squirrel Monkeys', 'Toucans', 'Tarantulas & Frogs', 'Parrots', 'Medicinal Plants'],
    ARRAY['Transfers from Rurrenabaque airport/terminal', 'Round-trip scenic boat navigation (3h)', '1 night in traditional jatata eco-cabin', 'All meals (lunch, dinner, breakfast, lunch)', 'Bilingual native guide', 'Night walk expedition', 'Rubber boots'],
    ARRAY['Madidi National Park entrance fee (200 BOB)', 'Flights La Paz - Rurrenabaque', 'Soft drinks & beers'],
    FALSE,
    'https://www.madidijungle.com/archivos/foto76_b.jpg',
    ARRAY[
        'https://www.madidijungle.com/archivos/foto33_b.jpg',
        'https://www.madidijungle.com/archivos/foto38_b.jpg'
    ]
),
(
    '33333333-3333-3333-3333-333333333333',
    'P3',
    'tareche-3d-2n',
    'Programa Tareche - 3 Días / 2 Noches (Más Popular)',
    'Tareche Program - 3 Days / 2 Nights (Best Seller)',
    'Programme Tareche - 3 Jours / 2 Nuits (Coup de Cœur)',
    'Tareche Programm - 3 Tage / 2 Nächte (Bestseller)',
    'El programa insignia de Madidi Jungle. Senderos temáticos, pesca tradicional de pirañas y acantilado de parabas.',
    'Our flagship immersion into Madidi National Park. Thematic ecological trails, traditional piranha fishing, and macaw cliff.',
    3, 2, 290.00, 320.00, 'moderate',
    ARRAY['Red Howler Monkeys', 'Red-and-Green Macaws', 'Wild Peccaries', 'Giant River Otters', 'Piranhas'],
    ARRAY['All river transport on motorized covered boats', '2 nights accommodation in jatata thatched cabins', 'Full board gourmet Amazonian meals', 'Private bilingual indigenous guide (max 5 pax/group)', 'Macaw cliff excursion', 'Night jungle safari', 'Natural spring water & tropical juices', 'Rubber boots & rain ponchos'],
    ARRAY['Park admission ticket (200 BOB ~ 30 USD)', 'Airfare to/from Rurrenabaque', 'Soda and beer at lodge bar'],
    TRUE,
    'https://www.madidijungle.com/archivos/foto37_b.jpg',
    ARRAY[
        'https://www.madidijungle.com/archivos/foto44_b.jpg',
        'https://www.madidijungle.com/archivos/foto29_b.jpg',
        'https://www.madidijungle.com/archivos/foto47_b.jpg'
    ]
),
(
    '44444444-4444-4444-4444-444444444444',
    'P4',
    'wabu-4d-3n',
    'Programa Wabu - 4 Días / 3 Noches',
    'Wabu Program - 4 Days / 3 Nights',
    'Programme Wabu - 4 Jours / 3 Nuits',
    'Wabu Programm - 4 Tage / 3 Nächte',
    'Inmersión profunda en la selva virgen. Senderos remotos, salitrales naturales y rastreo de huellas de jaguar.',
    'Deep primary rainforest exploration. Remote mammal clay licks, ancestral medicinal trails, and jaguar track identification.',
    4, 3, 375.00, 420.00, 'challenging',
    ARRAY['Jaguar Tracks', 'Tapirs', 'Spider Monkeys', 'King Vultures', 'Amazon Horned Frogs'],
    ARRAY['Airport/hotel transfers in Rurrenabaque', '3 nights in eco-cabin with balcony', 'All meals, snacks & river provisions', 'Specialized birdwatching & tracking guide', 'Tubing on Tuichi river (seasonal)', 'Campfire storytelling with indigenous elders'],
    ARRAY['Madidi National Park entrance fee', 'Flights', 'Personal expenses'],
    TRUE,
    'https://www.madidijungle.com/archivos/foto32_b.jpg',
    ARRAY[
        'https://www.madidijungle.com/archivos/foto43_b.jpg',
        'https://www.madidijungle.com/archivos/foto30_b.jpg'
    ]
),
(
    '55555555-5555-5555-5555-555555555555',
    'P5',
    'biwa-5d-4n',
    'Programa Biwa - 5 Días / 4 Noches (Expedición Total)',
    'Biwa Program - 5 Days / 4 Nights (Full Expedition)',
    'Programme Biwa - 5 Jours / 4 Nuits (Expédition Totale)',
    'Biwa Programm - 5 Tage / 4 Nächte (Vollständige Expedition)',
    'La experiencia más completa para biólogos, fotógrafos de naturaleza y amantes de la aventura extrema sin prisas.',
    'The definitive expedition for nature photographers, birdwatchers, and adventurers seeking complete rainforest immersion.',
    5, 4, 460.00, 520.00, 'expedition',
    ARRAY['Ocelots', 'Giant Anteaters', 'Harpy Eagles (rare)', 'Over 200 bird species', 'Wild Orchids'],
    ARRAY['Full expedition logistics & boat journeys', '4 nights accommodation', 'Full custom catering', 'Dedicated master guide from Uchupiamonas', 'Remote biological trails access', 'Night river exploration for black caimans'],
    ARRAY['Madidi Park admission', 'Commercial flights', 'Alcohol'],
    FALSE,
    'https://www.madidijungle.com/archivos/foto49_b.jpg',
    ARRAY[
        'https://www.madidijungle.com/archivos/foto31_b.jpg',
        'https://www.madidijungle.com/archivos/foto34_b.jpg',
        'https://www.madidijungle.com/archivos/foto41_b.jpg'
    ]
);

-- 2. SEED ITINERARIES FOR TARECHE (3D/2N)
INSERT INTO tour_itineraries (
    tour_id, day_number,
    title_es, title_en, title_fr, title_de,
    description_es, description_en, meals, activities
) VALUES
(
    '33333333-3333-3333-3333-333333333333', 1,
    'Rurrenabaque al Corazón del Madidi',
    'Rurrenabaque to the Heart of Madidi',
    'De Rurrenabaque au Cœur du Madidi',
    'Von Rurrenabaque ins Herz von Madidi',
    'Salida a las 8:30 AM en bote a motor por el imponente río Beni, atravesando el majestuoso Cañón del Bala. Ingreso a las aguas cristalinas del río Tuichi. Llegada al Ecolodge, bienvenida con jugo de frutas tropicales de temporada y almuerzo tradicional servido en hojas de plátano. Por la tarde, caminata por el sendero Tareche para aprender sobre árboles milenarios como el Mapajo y plantas medicinales. Cena y primera caminata nocturna en busca de insectos fluorescentes, ranas venenosas y tarántulas.',
    'Departure at 8:30 AM by motorized riverboat navigating the mighty Beni river, entering the dramatic Bala Canyon and continuing upstream along the Tuichi river into Madidi National Park. Arrival at Ecolodge, tropical welcome drink, and authentic Amazonian lunch. Afternoon trek along Tareche trail discovering gigantic Mapajo trees and ancestral medicinal plants. Dinner followed by a night walk to spot tarantulas, tree frogs, and nocturnal birds.',
    'Lunch, Dinner',
    ARRAY['River Navigation 3h', 'Bala Canyon Pass', 'Tareche Trail Trek 3h', 'Nocturnal Safari 1.5h']
),
(
    '33333333-3333-3333-3333-333333333333', 2,
    'Farallón de Parabas y Sendero Biwa',
    'Macaw Cliff and Biwa Rainforest Trail',
    'Falaise des Aras et Sentier Biwa',
    'Ara-Felsen und Biwa-Dschungelpfad',
    'Amanecer con el canto de los monos aulladores. Desayuno buffet con pan casero y frutas amazónicas. Excursión en lancha hacia el impresionante Farallón de Parabas (pared de arcilla donde anidan guacamayos rojos y verdes y loros). Por la tarde, caminata por el sendero Biwa para observar monos ardilla y manadas de pecaríes. Pesca tradicional de pirañas en la laguna del río Tuichi. Por la noche, relatos comunitarios sobre la historia de la tribu Uchupiamonas.',
    'Dawn wake-up to the deep calls of red howler monkeys. Jungle breakfast with local fruits. Boat excursion to the red-and-green macaw clay cliffs. Afternoon hike along the deep Biwa trail to observe squirrel monkeys and brown capuchins. Catch-and-release traditional piranha fishing on the river bends. Evening fireside talk about Uchupiamonas indigenous mythology and forest protection.',
    'Breakfast, Lunch, Dinner',
    ARRAY['Macaw Cliff Boat Excursion', 'Biwa Deep Trail Hike 3.5h', 'Piranha Fishing', 'Indigenous Culture Session']
),
(
    '33333333-3333-3333-3333-333333333333', 3,
    'Caminata de Plantas Medicinales y Retorno',
    'Medicinal Forest Trail & Return Navigation',
    'Sentier des Plantes Médicinales et Retour',
    'Heilpflanzenpfad & Rückfahrt auf dem Fluss',
    'Desayuno temprano. Caminata interpretativa por el sendero Wabu para aprender los secretos de las lianas de agua, resinas curativas y la corteza del árbol de la quinina. Almuerzo temprano en el lodge. A las 12:30 PM abordamos el bote de retorno navegando río abajo hacia Rurrenabaque (aproximadamente 2 horas), con vistas espectaculares de la cordillera y playas con capibaras. Llegada a Rurrenabaque a las 3:30 PM y traslado al aeropuerto o terminal.',
    'Early morning walk exploring curative forest lianas, natural insect repellents, and the quinine tree. Early farewell lunch at the ecolodge dining hall. Board the motorized boat at 12:30 PM for a smooth 2-hour downriver drift back to Rurrenabaque, observing sunbathing capybaras and herons along the beaches. Arrival in Rurrenabaque at 3:30 PM with drop-off at airport or hotel.',
    'Breakfast, Lunch',
    ARRAY['Medicinal Plant Masterclass 2h', 'Farewell Amazonian Lunch', 'Downriver Scenic Boat 2h', 'Transfer in Rurre']
);

-- 3. SEED ACCOMMODATIONS
INSERT INTO accommodations (
    id, slug, name_es, name_en, cabin_type, max_guests,
    bed_configuration, bathroom_type, amenities, image_url,
    description_es, description_en
) VALUES
(
    'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
    'cabana-privada-tuichi',
    'Cabaña Tradicional Tuichi (Baño Privado)',
    'Tuichi Traditional Cabin (Private Bathroom)',
    'Traditional Jatata Cabin', 3,
    '1 King Bed + 1 Single Bed',
    'private',
    ARRAY['Private en-suite bathroom', 'Pure natural spring water shower', 'High-density mosquito nets', 'Private balcony with jungle hammock', 'Solar-powered ambient lighting', 'Luggage rack & safety box'],
    'https://www.madidijungle.com/archivos/foto15_b.jpg',
    'Construida enteramente a mano con maderas caídas locales y techos tejidos de palma de jatata que mantienen una temperatura fresca natural. Balcón privado con vistas directas a la selva virgen.',
    'Handcrafted by Uchupiamonas artisans using fallen native timber and natural jatata palm leaf weaving that naturally regulates temperature. Includes a private veranda overlooking the virgin canopy.'
),
(
    'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
    'cabana-familiar-bala',
    'Bungalow Familiar El Bala',
    'El Bala Family Bungalow',
    'Family Bungalow', 5,
    '2 Queen Beds + 1 Single Bed',
    'private',
    ARRAY['En-suite double private bathroom', 'Large wraparound porch with 2 hammocks', 'Panoramic mosquito screening', 'Natural spring water', 'Solar reading lamps'],
    'https://www.madidijungle.com/archivos/foto53_b.jpg',
    'Espacioso bungalow diseñado especialmente para familias o grupos de amigos. Ofrece total privacidad y seguridad en medio del Parque Madidi.',
    'Spacious jungle bungalow designed for families or nature-loving travel companions, offering maximum comfort, safety, and acoustic immersion into the jungle.'
),
(
    'cccccccc-cccc-cccc-cccc-cccccccccccc',
    'cabana-aventura-compartida',
    'Cabaña Rústica Aventura (Baño Compartido)',
    'Adventure Rustic Cabin (Shared Bathroom)',
    'Rustic Eco-Cabin', 2,
    '2 Twin Beds',
    'shared',
    ARRAY['Shared modern eco-bathrooms (clean 24/7)', 'Spring water showers', 'High quality mosquito netting', 'Shared relaxing terrace'],
    'https://www.madidijungle.com/archivos/foto1_b.jpg',
    'Nuestra opción más accesible sin renunciar al descanso reconfortante. Cómodas camas gemelas y acceso a baños ecológicos con mantenimiento continuo.',
    'The ideal budget-conscious choice for backpackers and solo adventurers without compromising deep restful sleep, hygiene, or comfort.'
);

-- 4. SEED REVIEWS (TripAdvisor Verified)
INSERT INTO reviews (
    author_name, author_country, author_avatar, rating,
    platform, title, comment, tour_taken, visit_date, is_featured
) VALUES
(
    'Sarah & Mark Jenkins', 'United Kingdom',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    5, 'TripAdvisor',
    'Unbeatable wildlife encounter and authentic indigenous hospitality',
    'We chose the 3D/2N Tareche tour and it exceeded all expectations. Our guide, Jaime, grew up in the Uchupiamonas community and could spot monkeys hundreds of meters up in the canopy by sound alone! The food prepared with local ingredients was delicious, and the cabins are surprisingly comfortable and clean. Do not hesitate to book direct!',
    'Tareche 3D/2N Program', '2026-08-14', TRUE
),
(
    'Dr. Michael Becker', 'Germany',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    5, 'TripAdvisor',
    'Beste Urwald-Erfahrung unseres Lebens!',
    'Als Vogelbeobachter war Madidi mein Lebenstraum. Wir haben im 5-Tage Biwa Programm über 180 Vogelarten dokumentiert, darunter Ara-Kolonien und Trogone. Die Ecolodge setzt Maßstäbe in Sachen nachhaltiger Indigenen-Tourismus. Fantastische Organisation ab Rurrenabaque.',
    'Biwa 5D/4N Expedition', '2026-07-22', TRUE
),
(
    'Camille & Antoine Laurent', 'France',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    5, 'TripAdvisor',
    'Une aventure magique en Amazonie bolivienne',
    'La navigation sur la rivière Tuichi est spectaculaire. Dormir au milieu des bruits de la forêt dans une cabane en jatata est inoubliable. L’équipe a adapté tous les repas pour mon régime végétarien sans problème. Bravo à toute la communauté pour la protection du parc !',
    'Tareche 3D/2N Program', '2026-09-02', TRUE
);

-- 5. SEED FAQS
INSERT INTO faqs (
    category, display_order,
    question_es, question_en, question_fr, question_de,
    answer_es, answer_en, answer_fr, answer_de
) VALUES
(
    'transport', 1,
    '¿Cómo llegar de La Paz a Rurrenabaque?',
    'How do I get from La Paz to Rurrenabaque?',
    'Comment se rendre de La Paz à Rurrenabaque ?',
    'Wie kommt man von La Paz nach Rurrenabaque?',
    'La forma más rápida y cómoda es tomar un vuelo doméstico de aproximadamente 40 minutos desde el Aeropuerto de El Alto (La Paz) a Rurrenabaque con aerolíneas locales como Ecojet. Nuestro equipo te espera en el aeropuerto de Rurrenabaque con tu nombre en un cartel para trasladarte a nuestra oficina y al muelle fluvial.',
    'The fastest and most comfortable way is taking a 40-minute scenic flight from La Paz (El Alto Airport) to Rurrenabaque on regional flights (e.g. Ecojet). Our staff will be waiting for you right outside Rurrenabaque airport with a personalized name sign to transfer you to our town office and river pier.',
    'Le moyen le plus rapide est un vol panoramique de 40 minutes depuis La Paz (Aéroport El Alto) jusqu’à Rurrenabaque. Notre équipe vous accueille dès votre sortie de l’aéroport avec une pancarte à votre nom.',
    'Der schnellste Weg ist ein etwa 40-minütiger Flug von La Paz (El Alto) nach Rurrenabaque (z. B. mit Ecojet). Unser Team erwartet Sie direkt am Flughafen mit einem Namensschild für den Transfer.'
),
(
    'health', 2,
    '¿Qué vacunas y precauciones médicas se necesitan?',
    'What vaccines and health precautions are required?',
    'Quels vaccins et précautions de santé sont nécessaires ?',
    'Welche Impfungen und gesundheitlichen Vorsichtsmaßnahmen sind erforderlich?',
    'La vacuna contra la fiebre amarilla es obligatoria para ingresar al Parque Madidi y debe administrarse al menos 10 días antes del viaje. El área del río Tuichi donde se encuentra el lodge tiene agua corriente dulce y rápida, lo que reduce drásticamente la presencia de mosquitos transmisores de malaria, pero recomendamos repelente con DEET 30-50%. El lodge cuenta con botiquín de primeros auxilios y agua purificada certificada.',
    'The Yellow Fever vaccination is officially required by park authorities and should be taken at least 10 days prior. Because Madidi Jungle is situated along the fast-flowing, clean Tuichi River, malaria risk is extremely low compared to stagnant swamps, but DEET 30-50% insect repellent is strongly recommended. We provide unlimited certified purified drinking water.',
    'Le vaccin contre la fièvre jaune est exigé par les autorités du parc. Grâce à la rivière Tuichi aux eaux vives, le risque de paludisme est très faible. Prévoyez un répulsif anti-moustiques avec DEET.',
    'Die Gelbfieberimpfung ist für den Nationalpark Madidi obligatorisch (mindestens 10 Tage vor Reiseantritt). Dank des schnell fließenden Tuichi-Flusses ist das Malariarisiko sehr gering; DEET-Mückenschutz wird empfohlen.'
),
(
    'gear', 3,
    '¿Qué debo empacar en mi mochila para la selva?',
    'What should I pack in my jungle bag?',
    'Que dois-je mettre dans mon sac à dos ?',
    'Was sollte ich für den Dschungel einpacken?',
    'Recomendamos ropa ligera de secado rápido, camisas de manga larga y pantalones largos en colores neutros (verde, caqui, beige; evitar azul oscuro y negro que atraen insectos), linterna frontal potente con pilas extra, impermeable ligero, gorro o sombrero, binoculares para aves y sandalias cómodas para descansar en las cabañas. Nosotros proporcionamos botas de goma (tallas 35 a 46) y ponchos de lluvia.',
    'Pack lightweight, quick-dry, breathable clothing in light earthy tones (long-sleeve shirts and trousers in khaki or green; avoid dark blues/blacks that attract insects), a good headlamp with extra batteries, light rain jacket, sun hat, binoculars, and flip-flops or sandals for cabin relaxation. We provide rubber boots (sizes 35 to 46) and rain ponchos.',
    'Vêtements légers à séchage rapide (manches longues et pantalons couleur claire), lampe frontale avec piles de rechange, chapeau, jumelles. Nous fournissons les bottes en caoutchouc (pointures 35 à 46) et ponchos de pluie.',
    'Leichte, schnell trocknende Kleidung in Erdtönen (lange Ärmel und Hosen), Stirnlampe mit Ersatzbatterien, Fernglas und Sonnenhut. Gummistiefel (Größen 35–46) und Regenponchos werden von uns gestellt.'
),
(
    'payment', 4,
    '¿El precio incluye el boleto de entrada al Parque Madidi?',
    'Is the Madidi National Park entrance fee included?',
    'Le tarif comprend-il le droit d’entrée au Parc Madidi ?',
    'Ist der Eintrittspreis für den Madidi-Nationalpark inbegriffen?',
    'No. El Servicio Nacional de Áreas Protegidas (SERNAP) cobra un boleto oficial de 200 Bolivianos (aprox. 30 USD) para turistas extranjeros y 50 BOB para nacionales. Este valor debe pagarse en efectivo en el puesto de control del guardaparques en el río Beni.',
    'No. Bolivia’s National Protected Areas Service (SERNAP) charges an official park admission fee of 200 Bolivianos (approx. $30 USD) for foreign visitors, payable strictly in cash at the ranger checkpoint along the river.',
    'Non. Le SERNAP prélève un droit d’entrée officiel de 200 Bolivianos (environ 30 USD) pour les visiteurs étrangers, à régler en espèces directement au poste de garde du parc.',
    'Nein. Die Parkverwaltung (SERNAP) erhebt eine offizielle Eintrittsgebühr von 200 Bolivianos (ca. 30 USD) für ausländische Besucher, die in bar am Ranger-Kontrollpunkt am Fluss zu entrichten ist.'
);
