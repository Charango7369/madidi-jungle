# MADIDI JUNGLE ECOLODGE — PLATAFORMA WEB INTEGRAL 2.0
> **Rediseño, Arquitectura de Software, Ecoturismo de Aventura y Conversión Digital**  
> *Parque Nacional Madidi, Rurrenabaque, Bolivia • 100% Empresa Comunitaria Indígena*

---

## 🌿 Resumen del Proyecto

Este proyecto es el resultado del trabajo coordinado de un equipo multidisciplinario (UX/UI Senior, Arquitecto de Software, Full Stack Senior, SEO Internacional, Especialista CRO, Accesibilidad WCAG 2.2, Ecoturismo y Web Performance) para transformar radicalmente la presencia digital de **Madidi Jungle Ecolodge**.

El objetivo central es **maximizar las reservas directas**, reducir la dependencia de intermediarios/OTAs, potenciar la conversión instantánea vía **WhatsApp Concierge**, y posicionar al ecolodge como el referente número 1 de turismo responsable y avistamiento de fauna en la Amazonía boliviana.

---

## 📁 Estructura del Repositorio (`MaidiJungle`)

```text
MaidiJungle/
├── backend/                        # API REST de Alto Rendimiento (FastAPI + Pydantic v2)
│   ├── config.py                   # Configuración y variables de entorno
│   ├── database.py                 # Capa de datos y almacenamiento con fallback
│   ├── main.py                     # Inicialización de FastAPI, CORS y middlewares
│   ├── requirements.txt            # Dependencias Python
│   ├── schemas.py                  # Modelos y contratos de datos Pydantic
│   └── routers/                    # Endpoints modulares
│       ├── accommodations.py       # Cabañas de jatata y amenidades
│       ├── bookings.py             # Cotizador dinámico y gestión de pre-reservas
│       ├── contact.py              # Mensajería y solicitudes personalizadas
│       ├── faqs.py                 # Preguntas frecuentes clasificadas
│       ├── leads.py                # Captura de leads (Guía de aves en PDF)
│       ├── reviews.py              # Reseñas verificadas de TripAdvisor / Google
│       ├── tours.py                # Catálogo de los 5 programas e itinerarios diarios
│       └── whatsapp.py             # Generador de enlaces inteligentes de WhatsApp
│
├── frontend/                       # Aplicación Web Moderna (Next.js 14 + React + TypeScript + Tailwind)
│   ├── next.config.mjs             # Cabeceras de seguridad y optimización de imágenes
│   ├── package.json                # Dependencias Frontend
│   ├── postcss.config.js
│   ├── tailwind.config.js          # Design System con paleta inspirada en la selva
│   ├── tsconfig.json
│   └── src/
│       ├── app/
│       │   ├── globals.css         # Directivas Tailwind y estilos de accesibilidad
│       │   ├── layout.tsx          # Metadatos SEO, OpenGraph y JSON-LD (LodgingBusiness)
│       │   ├── page.tsx            # Página principal interactiva con orquestación de estado
│       │   ├── robots.ts           # Configuración técnica de robots.txt
│       │   └── sitemap.ts          # Generador de Sitemap XML con hreflang (EN, ES, FR, DE)
│       ├── components/             # Componentes React Atómicos y Accesibles
│       │   ├── AccommodationsSection.tsx # Cabañas tradicionales jatata y confort ecológico
│       │   ├── CommunityConservation.tsx # Narrativa del pueblo San José de Uchupiamonas
│       │   ├── FAQAccordion.tsx          # Acordeón accesible (WCAG 2.2) con buscador
│       │   ├── Footer.tsx                # Pie de página con sellos SERNAP y enlaces
│       │   ├── Hero.tsx                  # Hero inmersivo con video/imagen y social proof
│       │   ├── InteractiveBookingWizard.tsx # Wizard de cotización y reserva en 3 pasos
│       │   ├── ItineraryModal.tsx        # Explorador detallado de itinerario día por día
│       │   ├── LeadMagnetModal.tsx       # Modal de descarga de la Guía de Campo (PDF)
│       │   ├── MadidiMapViewer.tsx       # Mapa visual interactivo de la ruta fluvial
│       │   ├── Navbar.tsx                # Barra fija con selector i18n y multimoneda
│       │   ├── PricingComparisonTable.tsx# Matriz comparativa de precios y baños
│       │   ├── QuickSearch.tsx           # Barra rápida de búsqueda de tours y fechas
│       │   ├── ReviewsSection.tsx        # Reseñas verificadas con 5 estrellas
│       │   ├── TourCard.tsx              # Tarjeta de tour con insignias y llamado dual
│       │   ├── TourGrid.tsx              # Catálogo con filtros interactivos por duración
│       │   └── WhatsAppFloatingWidget.tsx# Botón flotante con asistente interactivo
│       ├── data/
│       │   └── mockData.ts         # Datos reales y auténticos sincronizados
│       ├── i18n/
│       │   └── translations.ts     # Diccionario multilingüe: Inglés, Español, Francés, Alemán
│       └── types/
│           └── index.ts            # Interfaces TypeScript estrictas
│
├── database/                       # Base de Datos PostgreSQL
│   ├── schema.sql                  # DDL de tablas, índices B-Tree/GIN, constraints y triggers
│   └── seed.sql                    # Datos auténticos de Madidi Jungle (P1..P5, cabañas, reviews)
│
├── deploy/                         # Despliegue e Infraestructura como Código (IaC)
│   ├── .env.example                # Plantilla de variables de entorno documentadas
│   ├── docker-compose.yml          # Orquestación multi-contenedor (DB, Backend, Frontend)
│   ├── Dockerfile.backend          # Imagen Python 3.11 optimizada
│   ├── Dockerfile.frontend         # Imagen Node Alpine multi-stage para Next.js
│   ├── railway.json                # Configuración de despliegue en Railway
│   └── vercel.json                 # Configuración de despliegue en Vercel
│
└── docs/                           # Documentación Estratégica Multidisciplinaria
    ├── 01_AUDITORIA_Y_BENCHMARK.md # Auditoría de 8 ejes y benchmark Costa Rica, Perú y Ecuador
    ├── 02_ARQUITECTURA_Y_DISENO.md # Mapa del sitio, wireframes, modelo ER, design tokens y SEO
    └── 03_ESTRATEGIA_MANTENIMIENTO.md # Monitoreo de Core Web Vitals, backups y resiliencia en selva
```

---

## 🚀 Puesta en Marcha Rápida (Local)

### 1. Backend (FastAPI)
```bash
cd backend
# Instalar dependencias
pip install -r requirements.txt

# Iniciar servidor de desarrollo en puerto 8010
python -m uvicorn backend.main:app --reload --port 8010
```
- Documentación OpenAPI Swagger: `http://localhost:8010/docs`
- Health check: `http://localhost:8010/health`

### 2. Frontend (Next.js)
```bash
cd frontend
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en puerto 3010
npm run dev
```
- Aplicación Web: `http://localhost:3010`

### 3. Despliegue con Docker Compose (Recomendado para Producción)
Puedes ejecutarlo directamente desde la raíz del proyecto `MaidiJungle`:

```bash
# Validar sintaxis y configuración
docker compose config

# Levantar todos los servicios en segundo plano (Base de Datos + Backend FastAPI + Frontend Next.js)
docker compose up --build -d

# Ver registros en tiempo real
docker compose logs -f

# Detener los contenedores
docker compose down
```

---

## 🌍 Programas Oficiales Integrados
1. **P1: Programa Cullpana (Full Day):** USD 120 (Baño Privado / Compartido).
2. **P2: Programa Mapajo (2D / 1N):** USD 205 (Compartido) / USD 220 (Privado).
3. **P3: Programa Tareche (3D / 2N - Bestseller):** USD 290 (Compartido) / USD 320 (Privado).
4. **P4: Programa Wabu (4D / 3N):** USD 375 (Compartido) / USD 420 (Privado).
5. **P5: Programa Biwa (5D / 4N - Expedición Total):** USD 460 (Compartido) / USD 520 (Privado).

*Descuentos automáticos implementados:*
- Niños menores a 12 años: 50% de descuento.
- Infantes menores a 3 años: 75% de descuento en logística.
- Monedas admitidas en tiempo real: USD ($), EUR (€), BOB (Bs.).
