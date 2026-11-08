"""
Database access and mock storage layer for Madidi Jungle Ecolodge.
Supports live PostgreSQL via async SQLAlchemy or fast in-memory store
for seamless standalone execution.
"""
from typing import Dict, List, Optional
import uuid
from datetime import datetime, date
from backend.schemas import (
    TourBase, TourDetail, TourItineraryDay, AccommodationItem,
    ReviewItem, FAQItem, DifficultyLevel, BathroomType
)

# In-memory storage of authentic Madidi Jungle data
TOURS_STORE: List[TourDetail] = [
    TourDetail(
        code="P1",
        slug="cullpana-full-day",
        name_es="Programa Cullpana - Día Completo en Selva",
        name_en="Cullpana Program - Full Day Jungle Expedition",
        name_fr="Programme Cullpana - Journée Complète en Jungle",
        name_de="Cullpana Programm - Ganztägige Dschungelexpedition",
        tagline_es="Ideal para viajeros con poco tiempo que desean adentrarse en el Parque Madidi navegando los ríos Beni y Tuichi.",
        tagline_en="Perfect for travelers on a tight schedule wishing to navigate the Beni and Tuichi rivers into pristine rainforest.",
        days=1,
        nights=0,
        price_shared_usd=120.0,
        price_private_usd=120.0,
        difficulty=DifficultyLevel.easy,
        highlight_wildlife=["Capuchin Monkeys", "Hoatzin Birds", "Caimans", "Giant Amazonian Trees"],
        included_items=[
            "Pick up at Rurrenabaque airport/hotel",
            "Motorized riverboat navigation (3h)",
            "Native bilingual guide (San José de Uchupiamonas)",
            "Amazonian lunch served in banana leaves",
            "Rubber boots and rain poncho",
            "Cullpana primary rainforest trail hike"
        ],
        excluded_items=[
            "Madidi National Park admission fee (200 BOB ~ 30 USD cash)",
            "Flights to/from Rurrenabaque",
            "Alcoholic beverages and personal tips"
        ],
        is_featured=False,
        hero_image="https://www.madidijungle.com/images/slideshow1.jpg",
        gallery_images=[
            "https://www.madidijungle.com/archivos/foto74_b.jpg",
            "https://www.madidijungle.com/archivos/foto45_b.jpg"
        ],
        itinerary=[
            TourItineraryDay(
                day_number=1,
                title_es="Rurrenabaque al Cañón del Bala y Selva del Tuichi",
                title_en="Rurrenabaque through Bala Canyon into Tuichi Rainforest",
                description_es="Salida a las 8:30 AM en lancha a motor por el río Beni. Pasamos el Cañón del Bala hacia el río Tuichi. Caminata guiada de 3 horas por el sendero Cullpana para ver árboles gigantes y monos capuchinos. Almuerzo amazónico y retorno a Rurrenabaque a las 4:30 PM.",
                description_en="8:30 AM departure by riverboat on the Beni River, entering Bala Canyon and the Tuichi River. Guided 3-hour walk on the Cullpana trail observing giant ficus trees and squirrel monkeys. Traditional lunch and scenic return drift to Rurrenabaque by 4:30 PM.",
                meals="Lunch",
                activities=["Riverboat Navigation 3h", "Cullpana Trail Trek", "Amazonian Gastronomy"]
            )
        ]
    ),
    TourDetail(
        code="P2",
        slug="mapajo-2d-1n",
        name_es="Programa Mapajo - 2 Días / 1 Noche",
        name_en="Mapajo Program - 2 Days / 1 Night",
        name_fr="Programme Mapajo - 2 Jours / 1 Nuit",
        name_de="Mapajo Programm - 2 Tage / 1 Nacht",
        tagline_es="Una escapada intensa al corazón de la selva con caminata nocturna para observar fauna.",
        tagline_en="An intense rainforest getaway featuring our signature guided night walk for nocturnal wildlife discovery.",
        days=2,
        nights=1,
        price_shared_usd=205.0,
        price_private_usd=220.0,
        difficulty=DifficultyLevel.moderate,
        highlight_wildlife=["Squirrel Monkeys", "Toucans", "Tarantulas & Frogs", "Parrots", "Medicinal Plants"],
        included_items=[
            "Transfers from Rurrenabaque airport/terminal",
            "Round-trip scenic boat navigation (3h each way)",
            "1 night in traditional jatata eco-cabin",
            "All meals (lunch, dinner, breakfast, lunch)",
            "Bilingual native guide",
            "Night safari walk",
            "Rubber boots & ponchos"
        ],
        excluded_items=[
            "Madidi National Park fee (200 BOB)",
            "Flights La Paz - Rurre",
            "Bar consumption"
        ],
        is_featured=False,
        hero_image="https://www.madidijungle.com/archivos/foto76_b.jpg",
        gallery_images=[
            "https://www.madidijungle.com/archivos/foto33_b.jpg",
            "https://www.madidijungle.com/archivos/foto38_b.jpg"
        ],
        itinerary=[
            TourItineraryDay(
                day_number=1,
                title_es="Navegación Fluvial y Primera Expedición Nocturna",
                title_en="Riverboat Navigation & Night Jungle Safari",
                description_es="Zarpamos a las 8:30 AM hacia el lodge. Almuerzo y acomodación en cabaña tradicional. Caminata de reconocimiento botánico. Tras la cena, caminata nocturna para observar ranas arbóreas, tarántulas y aves dormidas.",
                description_en="Depart at 8:30 AM up the Tuichi River. Arrival at lodge, welcome and cabin check-in. Afternoon hike to ancestral Mapajo trees. Night walk to observe bioluminescent fungi, tarantulas, and tree frogs.",
                meals="Lunch, Dinner",
                activities=["Boat Navigation", "Mapajo Trail", "Night Safari"]
            ),
            TourItineraryDay(
                day_number=2,
                title_es="Amanecer en la Selva y Retorno a Rurrenabaque",
                title_en="Jungle Sunrise & Scenic Downriver Return",
                description_es="Caminata al alba para avistar tucanes y monos ardilla activos. Desayuno reconfortante. Caminata corta por el sendero Tareche. Almuerzo y navegación río abajo hacia Rurrenabaque llegando a las 3:30 PM.",
                description_en="Early birding hike to spot toucans and active howler monkeys. Jungle breakfast. Short hike on the Tareche loop. Farewell lunch and scenic boat return arriving in Rurrenabaque by 3:30 PM.",
                meals="Breakfast, Lunch",
                activities=["Dawn Birding", "Tareche Trail", "Return Boat Transfer"]
            )
        ]
    ),
    TourDetail(
        code="P3",
        slug="tareche-3d-2n",
        name_es="Programa Tareche - 3 Días / 2 Noches (El Más Popular)",
        name_en="Tareche Program - 3 Days / 2 Nights (Best Seller)",
        name_fr="Programme Tareche - 3 Jours / 2 Nuits (Coup de Cœur)",
        name_de="Tareche Programm - 3 Tage / 2 Nächte (Bestseller)",
        tagline_es="El programa insignia de Madidi Jungle. Senderos temáticos, pesca tradicional de pirañas y acantilado de parabas.",
        tagline_en="Our flagship immersion into Madidi National Park. Thematic ecological trails, traditional piranha fishing, and macaw cliff.",
        days=3,
        nights=2,
        price_shared_usd=290.0,
        price_private_usd=320.0,
        difficulty=DifficultyLevel.moderate,
        highlight_wildlife=["Red Howler Monkeys", "Red-and-Green Macaws", "Wild Peccaries", "Giant River Otters", "Piranhas"],
        included_items=[
            "All river transport on motorized covered boats with life vests",
            "2 nights accommodation in jatata thatched cabins",
            "Full board gourmet Amazonian meals & tropical juices",
            "Private bilingual indigenous guide (max 5 pax/group)",
            "Excursion to Red Macaw Cliff (Farallón de Parabas)",
            "Catch-and-release piranha fishing",
            "Night safari expeditions",
            "Rubber boots & rain ponchos"
        ],
        excluded_items=[
            "Park admission ticket (200 BOB ~ 30 USD in cash)",
            "Airfare to/from Rurrenabaque",
            "Bar purchases and tips"
        ],
        is_featured=True,
        hero_image="https://www.madidijungle.com/archivos/foto37_b.jpg",
        gallery_images=[
            "https://www.madidijungle.com/archivos/foto44_b.jpg",
            "https://www.madidijungle.com/archivos/foto29_b.jpg",
            "https://www.madidijungle.com/archivos/foto47_b.jpg"
        ],
        itinerary=[
            TourItineraryDay(
                day_number=1,
                title_es="Rurrenabaque al Corazón del Madidi y Noche de Selva",
                title_en="Rurrenabaque to the Heart of Madidi & Jungle Night",
                description_es="Zarpe a las 8:30 AM por el Cañón del Bala. Llegada al ecolodge, bienvenida y almuerzo. Caminata de 3 horas por el sendero Tareche conociendo árboles milenarios. Cena y primera caminata nocturna.",
                description_en="Scenic 3-hour riverboat upstream through Bala Canyon. Check-in, tropical welcome drink, and lunch. 3-hour hike on Tareche Trail exploring primary rainforest. Dinner and evening night walk.",
                meals="Lunch, Dinner",
                activities=["Bala Canyon Navigation", "Tareche Trail", "Night Safari"]
            ),
            TourItineraryDay(
                day_number=2,
                title_es="Farallón de Parabas, Pesca de Pirañas y Sendero Biwa",
                title_en="Macaw Clay Cliffs, Piranha Fishing & Deep Biwa Trail",
                description_es="Despertar con aulladores. Navegación al impresionante farallón donde anidan decenas de guacamayos rojos y verdes. Caminata por el sendero Biwa para rastrear pecaríes. Pesca tradicional de pirañas en la tarde.",
                description_en="Howler monkey dawn wakeup. Boat ride to the spectacular red-and-green macaw clay wall. Deep hike on Biwa trail observing wild peccaries and spider monkeys. Afternoon traditional piranha fishing.",
                meals="Breakfast, Lunch, Dinner",
                activities=["Macaw Cliff Expedition", "Biwa Deep Trail", "Piranha Fishing", "Campfire Legends"]
            ),
            TourItineraryDay(
                day_number=3,
                title_es="Sendero de Farmacia Viva y Navegación de Retorno",
                title_en="Living Pharmacy Trail & Downriver Return to Rurrenabaque",
                description_es="Caminata interpretativa con nuestro guía nativo sobre plantas medicinales, resinas curativas y lianas de agua. Almuerzo de despedida. Bote de retorno a las 12:30 PM, arribando a Rurrenabaque a las 3:30 PM.",
                description_en="Interpretive morning walk on indigenous medicinal plants and curative tree barks. Farewell Amazonian lunch. Downriver drift back to Rurrenabaque arriving at 3:30 PM with airport transfer.",
                meals="Breakfast, Lunch",
                activities=["Medicinal Plant Masterclass", "Farewell Lunch", "Scenic Return Drift"]
            )
        ]
    ),
    TourDetail(
        code="P4",
        slug="wabu-4d-3n",
        name_es="Programa Wabu - 4 Días / 3 Noches",
        name_en="Wabu Program - 4 Days / 3 Nights",
        name_fr="Programme Wabu - 4 Jours / 3 Nuits",
        name_de="Wabu Programm - 4 Tage / 3 Nächte",
        tagline_es="Inmersión profunda en la selva virgen. Senderos remotos, salitrales naturales y rastreo de huellas de jaguar.",
        tagline_en="Deep primary rainforest exploration. Remote mammal clay licks, ancestral medicinal trails, and jaguar track identification.",
        days=4,
        nights=3,
        price_shared_usd=375.0,
        price_private_usd=420.0,
        difficulty=DifficultyLevel.challenging,
        highlight_wildlife=["Jaguar Tracks", "Tapirs", "Spider Monkeys", "King Vultures", "Amazon Horned Frogs"],
        included_items=[
            "Full round-trip transfers and private riverboat journeys",
            "3 nights accommodation in authentic eco-cabins",
            "All gourmet meals, trail snacks and beverages",
            "Specialized native tracker guide",
            "Clay lick (salitral) remote trek",
            "River tubing on the pristine Tuichi River (dry season)",
            "All field equipment, rubber boots & rain ponchos"
        ],
        excluded_items=[
            "Madidi Park fee (200 BOB)",
            "Air tickets to Rurre",
            "Bar consumptions"
        ],
        is_featured=True,
        hero_image="https://www.madidijungle.com/archivos/foto32_b.jpg",
        gallery_images=[
            "https://www.madidijungle.com/archivos/foto43_b.jpg",
            "https://www.madidijungle.com/archivos/foto30_b.jpg"
        ],
        itinerary=[
            TourItineraryDay(
                day_number=1,
                title_es="Navegación al Parque Madidi y Sendero Tareche",
                title_en="River Navigation to Madidi & Tareche Trail",
                description_es="Travesía en bote a motor. Check-in en el lodge. Caminata introductoria por el sendero Tareche y primera expedición nocturna.",
                description_en="Scenic boat journey to lodge. Check-in and lunch. Tareche trail introduction and first nocturnal creature walk.",
                meals="Lunch, Dinner",
                activities=["Tuichi Navigation", "Tareche Trail", "Night Safari"]
            ),
            TourItineraryDay(
                day_number=2,
                title_es="Farallón de Parabas y Salitral de Mamíferos",
                title_en="Macaw Nesting Cliffs & Mammal Clay Lick Expedition",
                description_es="Visita al farallón de guacamayos al amanecer. Trekking extenso hacia el salitral natural donde acuden tapires y chanchos salvajes a comer minerales.",
                description_en="Dawn visit to macaw nesting cliffs. Long trek to the mineral clay lick where tapirs and wild peccaries gather.",
                meals="Breakfast, Lunch, Dinner",
                activities=["Macaw Cliff", "Clay Lick Trek", "Mammal Tracking"]
            ),
            TourItineraryDay(
                day_number=3,
                title_es="Sendero Wabu Profundo y Tubing en el Río Tuichi",
                title_en="Deep Wabu Trail & Tuichi River Tubing",
                description_es="Exploración de la selva virgen en el sendero Wabu buscando huellas de felinos. Por la tarde, descenso en neumáticos por el río Tuichi (seguro y refrescante).",
                description_en="Full day deep virgin rainforest trek along the Wabu trail searching for feline tracks. Afternoon relaxing river tubing drift on the Tuichi river.",
                meals="Breakfast, Lunch, Dinner",
                activities=["Wabu Deep Trail 4h", "Tuichi River Tubing", "Campfire Legends"]
            ),
            TourItineraryDay(
                day_number=4,
                title_es="Caminata de Artesanías Ancestrales y Retorno",
                title_en="Ancestral Forest Crafts & Return to Rurrenabaque",
                description_es="Taller con guía sobre recolección de semillas para artesanías y plantas medicinales. Almuerzo y navegación de regreso a Rurrenabaque.",
                description_en="Morning workshop on traditional seed gathering for indigenous crafts and botanical healing. Farewell lunch and river drift back.",
                meals="Breakfast, Lunch",
                activities=["Craft & Botanical Workshop", "Downriver Boat Return"]
            )
        ]
    ),
    TourDetail(
        code="P5",
        slug="biwa-5d-4n",
        name_es="Programa Biwa - 5 Días / 4 Noches (Expedición Biológica)",
        name_en="Biwa Program - 5 Days / 4 Nights (Biological Expedition)",
        name_fr="Programme Biwa - 5 Jours / 4 Nuits (Expédition Biologique)",
        name_de="Biwa Programm - 5 Tage / 4 Nächte (Biologische Expedition)",
        tagline_es="La experiencia más completa para biólogos, fotógrafos de naturaleza y amantes de la aventura extrema sin prisas.",
        tagline_en="The definitive expedition for nature photographers, birdwatchers, and adventurers seeking complete rainforest immersion.",
        days=5,
        nights=4,
        price_shared_usd=460.0,
        price_private_usd=520.0,
        difficulty=DifficultyLevel.expedition,
        highlight_wildlife=["Ocelots", "Giant Anteaters", "Harpy Eagles (rare)", "Over 200 bird species", "Wild Orchids"],
        included_items=[
            "All transfers, private expeditions, and boat navigation",
            "4 nights in private eco-cabins",
            "All gourmet meals, specialty coffee and natural fruit juices",
            "Dedicated senior native guide (specialist in ornithology)",
            "Access to all 40+ km of protected ecological trails",
            "Rubber boots, ponchos, and river safety equipment"
        ],
        excluded_items=[
            "Madidi Park fee (200 BOB)",
            "Flights La Paz - Rurre",
            "Alcoholic beverages"
        ],
        is_featured=False,
        hero_image="https://www.madidijungle.com/archivos/foto49_b.jpg",
        gallery_images=[
            "https://www.madidijungle.com/archivos/foto31_b.jpg",
            "https://www.madidijungle.com/archivos/foto34_b.jpg",
            "https://www.madidijungle.com/archivos/foto41_b.jpg"
        ],
        itinerary=[
            TourItineraryDay(
                day_number=1,
                title_es="Llegada y Sendero Tareche",
                title_en="Arrival & Tareche Trail",
                description_es="Zarpe desde Rurrenabaque al corazón del Madidi. Bienvenida en el lodge, caminata diurna y nocturna.",
                description_en="Boat upstream to the ecolodge. Check-in, afternoon primary forest walk and night safari.",
                meals="Lunch, Dinner",
                activities=["Tuichi Navigation", "Tareche Hike", "Night Walk"]
            ),
            TourItineraryDay(
                day_number=2,
                title_es="Farallón de Parabas y Sendero Biwa Profundo",
                title_en="Macaw Clay Lick & Deep Biwa Trail",
                description_es="Avistamiento de guacamayos en la pared de arcilla. Trekking profundo de 4 horas observando monos y aves de dosel.",
                description_en="Macaw cliff morning visit. 4-hour deep jungle trek observing primates, canopy birds, and giant hardwoods.",
                meals="Breakfast, Lunch, Dinner",
                activities=["Macaw Cliff", "Biwa Deep Trail", "Piranha Fishing"]
            ),
            TourItineraryDay(
                day_number=3,
                title_es="Expedición a Lagunas Interiores y Caimanes",
                title_en="Inland Oxbow Lagoons & Caiman Tracking",
                description_es="Expedición a pie hacia lagunas interiores buscando caimanes negros, aves acuáticas como el hoatzín y nutrias gigantes.",
                description_en="Foot expedition to hidden interior forest lagoons seeking black caimans, prehistoric hoatzins, and giant otters.",
                meals="Breakfast, Lunch, Dinner",
                activities=["Hidden Lagoon Trek", "Aquatic Wildlife Tracking"]
            ),
            TourItineraryDay(
                day_number=4,
                title_es="Cumbres de Observación y Tubing en el Río",
                title_en="Canopy Ridge Views & River Tubing Drift",
                description_es="Subida a colinas panorámicas con vista al dosel amazónico. Por la tarde, descenso en boyas por el río Tuichi.",
                description_en="Trek to panoramic ridge lines overlooking the endless Amazon green ocean. Afternoon relaxing river tubing drift.",
                meals="Breakfast, Lunch, Dinner",
                activities=["Canopy Ridge Trek", "Tuichi River Tubing", "Storytelling"]
            ),
            TourItineraryDay(
                day_number=5,
                title_es="Amanecer de Aves y Retorno Fluvial",
                title_en="Dawn Birding & Scenic River Drift Return",
                description_es="Última sesión fotográfica de aves al amanecer. Desayuno, almuerzo de despedida y navegación hacia Rurrenabaque.",
                description_en="Final early morning bird photography session. Farewell lunch and peaceful river drift return to Rurrenabaque.",
                meals="Breakfast, Lunch",
                activities=["Dawn Birding Session", "Farewell Lunch", "Return Transfer"]
            )
        ]
    )
]

ACCOMMODATIONS_STORE: List[AccommodationItem] = [
    AccommodationItem(
        slug="cabana-privada-tuichi",
        name_es="Cabaña Tradicional Tuichi (Baño Privado)",
        name_en="Tuichi Traditional Cabin (Private Bathroom)",
        cabin_type="Traditional Jatata Cabin",
        max_guests=3,
        bed_configuration="1 King Bed + 1 Single Bed",
        bathroom_type=BathroomType.private,
        amenities=[
            "Private en-suite bathroom",
            "Spring water shower with fresh pressure",
            "High-density mosquito netting",
            "Private balcony with Amazonian hammock",
            "Solar-powered lighting & USB charging",
            "Security safety box"
        ],
        image_url="https://www.madidijungle.com/archivos/foto15_b.jpg",
        description_es="Construida enteramente a mano con maderas caídas locales y techos tejidos de palma de jatata que mantienen una temperatura fresca natural. Balcón privado con vistas directas a la selva virgen.",
        description_en="Handcrafted by Uchupiamonas artisans using fallen native timber and natural jatata palm leaf weaving that naturally regulates temperature. Includes a private veranda overlooking the virgin canopy."
    ),
    AccommodationItem(
        slug="cabana-familiar-bala",
        name_es="Bungalow Familiar El Bala",
        name_en="El Bala Family Bungalow",
        cabin_type="Family Bungalow",
        max_guests=5,
        bed_configuration="2 Queen Beds + 1 Single Bed",
        bathroom_type=BathroomType.private,
        amenities=[
            "En-suite double private bathroom",
            "Large wraparound porch with 2 hammocks",
            "Panoramic mosquito screening",
            "Natural spring water",
            "Solar reading lamps"
        ],
        image_url="https://www.madidijungle.com/archivos/foto53_b.jpg",
        description_es="Espacioso bungalow diseñado especialmente para familias o grupos de amigos. Ofrece total privacidad y seguridad en medio del Parque Madidi.",
        description_en="Spacious jungle bungalow designed for families or nature-loving travel companions, offering maximum comfort, safety, and acoustic immersion into the jungle."
    ),
    AccommodationItem(
        slug="cabana-aventura-compartida",
        name_es="Cabaña Rústica Aventura (Baño Compartido)",
        name_en="Adventure Rustic Cabin (Shared Bathroom)",
        cabin_type="Rustic Eco-Cabin",
        max_guests=2,
        bed_configuration="2 Twin Beds",
        bathroom_type=BathroomType.shared,
        amenities=[
            "Shared modern eco-bathrooms (cleaned 24/7)",
            "Spring water showers",
            "High quality mosquito netting",
            "Shared relaxing terrace with hammocks"
        ],
        image_url="https://www.madidijungle.com/archivos/foto1_b.jpg",
        description_es="Nuestra opción más accesible sin renunciar al descanso reconfortante. Cómodas camas gemelas y acceso a baños ecológicos con mantenimiento continuo.",
        description_en="The ideal budget-conscious choice for backpackers and solo adventurers without compromising deep restful sleep, hygiene, or comfort."
    )
]

REVIEWS_STORE: List[ReviewItem] = [
    ReviewItem(
        author_name="Sarah & Mark Jenkins",
        author_country="United Kingdom",
        author_avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        rating=5,
        platform="TripAdvisor",
        title="Unbeatable wildlife encounter and authentic indigenous hospitality",
        comment="We chose the 3D/2N Tareche tour and it exceeded all expectations. Our guide, Jaime, grew up in the Uchupiamonas community and could spot monkeys hundreds of meters up in the canopy by sound alone! The food prepared with local ingredients was delicious, and the cabins are surprisingly comfortable and clean. Do not hesitate to book direct!",
        tour_taken="Tareche 3D/2N Program",
        visit_date="August 2026"
    ),
    ReviewItem(
        author_name="Dr. Michael Becker",
        author_country="Germany",
        author_avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        rating=5,
        platform="TripAdvisor",
        title="Beste Urwald-Erfahrung unseres Lebens!",
        comment="Als Vogelbeobachter war Madidi mein Lebenstraum. Wir haben im 5-Tage Biwa Programm über 180 Vogelarten dokumentiert, darunter Ara-Kolonien und Trogone. Die Ecolodge setzt Maßstäbe in Sachen nachhaltiger Indigenen-Tourismus. Fantastische Organisation ab Rurrenabaque.",
        tour_taken="Biwa 5D/4N Expedition",
        visit_date="July 2026"
    ),
    ReviewItem(
        author_name="Camille & Antoine Laurent",
        author_country="France",
        author_avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        rating=5,
        platform="TripAdvisor",
        title="Une aventure magique en Amazonie bolivienne",
        comment="La navigation sur la rivière Tuichi est spectaculaire. Dormir au milieu des bruits de la forêt dans une cabane en jatata est inoubliable. L'équipe a adapté tous les repas pour mon régime végétarien sans problème. Bravo à toute la communauté pour la protection du parc !",
        tour_taken="Tareche 3D/2N Program",
        visit_date="September 2026"
    ),
    ReviewItem(
        author_name="Carlos Mendoza & Familia",
        author_country="España",
        author_avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        rating=5,
        platform="Google Reviews",
        title="Experiencia educativa y humana insuperable",
        comment="Fuimos con nuestros dos hijos de 9 y 12 años. Los guías cuidaron cada detalle de seguridad en el río y en la selva. Ver guacamayos libres en el farallón y pescar pirañas fue la mayor aventura de sus vidas. ¡Orgullo boliviano!",
        tour_taken="Tareche 3D/2N Program",
        visit_date="October 2026"
    )
]

FAQS_STORE: List[FAQItem] = [
    FAQItem(
        category="transport",
        question_es="¿Cómo llegar de La Paz a Rurrenabaque?",
        question_en="How do I get from La Paz to Rurrenabaque?",
        question_fr="Comment se rendre de La Paz à Rurrenabaque ?",
        question_de="Wie kommt man von La Paz nach Rurrenabaque?",
        answer_es="La forma recomendada es tomar un vuelo doméstico de 40 minutos desde el Aeropuerto de El Alto (La Paz) a Rurrenabaque (aerolínea Ecojet u otras locales). Nuestro equipo te espera en el aeropuerto con un cartel con tu nombre para trasladarte a nuestra oficina y al muelle fluvial.",
        answer_en="The recommended and easiest way is a 40-minute scenic flight from La Paz (El Alto Airport) to Rurrenabaque on regional flights (e.g. Ecojet). Our staff waits for you directly outside Rurrenabaque airport with a personalized name sign for your seamless transfer to our river pier.",
        answer_fr="Le moyen recommandé est un vol panoramique de 40 minutes depuis La Paz (Aéroport El Alto) jusqu'à Rurrenabaque. Notre équipe vous accueille dès votre sortie de l'aéroport avec une pancarte à votre nom pour votre transfert au fleuve.",
        answer_de="Der empfohlene Weg ist ein 40-minütiger Flug von La Paz (El Alto) nach Rurrenabaque (z. B. mit Ecojet). Unser Team erwartet Sie direkt am Flughafen mit einem Namensschild für den Transfer zu unserem Flussanleger."
    ),
    FAQItem(
        category="health",
        question_es="¿Qué vacunas y precauciones médicas se necesitan?",
        question_en="What vaccines and health precautions are required?",
        question_fr="Quels vaccins et précautions de santé sont nécessaires ?",
        question_de="Welche Impfungen und gesundheitlichen Vorsichtsmaßnahmen sind erforderlich?",
        answer_es="La vacuna contra la fiebre amarilla es obligatoria para ingresar al Parque Madidi (al menos 10 días antes). Gracias a que el lodge está a orillas del río Tuichi de aguas cristalinas y rápidas, la incidencia de mosquitos y riesgo de malaria es sumamente baja. Se recomienda repelente DEET 30-50%. En el lodge proveemos agua purificada certificada ilimitada.",
        answer_en="The Yellow Fever vaccination is officially required by park authorities (administered at least 10 days before travel). Because Madidi Jungle is situated on the fast-flowing, clean waters of the Tuichi River, malaria risk is extremely low. DEET 30-50% insect repellent is strongly recommended. We provide unlimited certified purified drinking water 24/7.",
        answer_fr="Le vaccin contre la fièvre jaune est obligatoire pour entrer dans le parc national Madidi. Grâce aux eaux vives de la rivière Tuichi, le risque de paludisme est extrêmement faible. Prévoyez un répulsif anti-moustiques avec DEET. Eau potable purifiée illimitée sur place.",
        answer_de="Die Gelbfieberimpfung ist für den Nationalpark Madidi vorgeschrieben (mindestens 10 Tage vor Abreise). Dank des schnell fließenden Tuichi-Flusses ist das Malariarisiko minimal; DEET-Mückenschutz wird empfohlen. Unbegrenzt zertifiziertes Trinkwasser vorhanden."
    ),
    FAQItem(
        category="gear",
        question_es="¿Qué debo empacar en mi mochila para la selva?",
        question_en="What should I pack in my jungle bag?",
        question_fr="Que dois-je mettre dans mon sac à dos ?",
        question_de="Was sollte ich für den Dschungel einpacken?",
        answer_es="Recomendamos ropa ligera de secado rápido en tonos claros y neutros (mangas largas y pantalones para proteger de ramas e insectos), linterna frontal potente con baterías extra, gorra, binoculares y sandalias para el lodge. Nosotros proporcionamos botas de goma (tallas 35 a 46) y ponchos impermeables.",
        answer_en="Pack lightweight, quick-drying clothing in neutral earthy colors (long sleeves and long pants), a powerful headlamp with spare batteries, sun hat, binoculars, and sandals for relaxing at the cabins. We provide rubber boots (sizes 35 to 46) and rain ponchos for all excursions.",
        answer_fr="Vêtements légers à séchage rapide (manches longues et pantalons couleur claire), lampe frontale puissante, chapeau, jumelles et sandales. Nous fournissons les bottes en caoutchouc (tailles 35 à 46) et ponchos imperméables.",
        answer_de="Leichte, schnell trocknende Kleidung in Erdtönen (lange Ärmel und Hosen), Stirnlampe mit Ersatzbatterien, Fernglas und Sandalen. Gummistiefel (Größen 35 bis 46) und Regenponchos werden von uns gestellt."
    ),
    FAQItem(
        category="payment",
        question_es="¿El precio incluye el boleto de entrada al Parque Madidi?",
        question_en="Is the Madidi National Park entrance fee included?",
        question_fr="Le tarif comprend-il le droit d'entrée au Parc Madidi ?",
        question_de="Ist der Eintrittspreis für den Madidi-Nationalpark inbegriffen?",
        answer_es="No. El Servicio Nacional de Áreas Protegidas (SERNAP) cobra un boleto oficial de 200 Bolivianos (aprox. 30 USD) para turistas extranjeros y 50 BOB para bolivianos. Este monto se abona estrictamente en efectivo en el puesto de guardaparques en el río Beni.",
        answer_en="No. Bolivia's National Protected Areas Service (SERNAP) charges an official park admission fee of 200 Bolivianos (approx. $30 USD) for foreign visitors, payable strictly in cash at the ranger checkpoint along the river.",
        answer_fr="Non. Le SERNAP prélève un droit d'entrée officiel de 200 Bolivianos (environ 30 USD) pour les visiteurs étrangers, à régler en espèces directement au poste de garde du parc.",
        answer_de="Nein. Die Parkverwaltung (SERNAP) erhebt eine offizielle Eintrittsgebühr von 200 Bolivianos (ca. 30 USD) für ausländische Besucher, zahlbar in bar am Ranger-Kontrollpunkt."
    )
]

BOOKINGS_STORE: Dict[str, dict] = {}
LEADS_STORE: List[dict] = []
CONTACT_MESSAGES_STORE: List[dict] = []
