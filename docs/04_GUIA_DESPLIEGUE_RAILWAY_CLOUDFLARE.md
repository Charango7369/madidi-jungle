# GUÍA DE DESPLIEGUE CONTINUO (CI/CD): MONOREPO EN RAILWAY Y CLOUDFLARE
## MADIDI JUNGLE ECOLODGE

- **Frontend:** Cloudflare Pages en `https://MadidiJungle.apolodigital.lat`
- **Backend API & Base de Datos:** Railway en `https://api.madidijungle.apolodigital.lat` (o dominio `.up.railway.app`)

---

## 1. ¿POR QUÉ MONOREPO ES LA MEJOR DECISIÓN ARQUITECTÓNICA?

El enfoque **Monorepo** (un solo repositorio en GitHub que contiene `frontend/`, `backend/`, `database/` y `deploy/`) es la opción recomendada por las siguientes razones:

1. **Sincronización Atómica de Código:**  
   Cuando actualizas un endpoint en FastAPI (`backend/routers/bookings.py`) o un esquema Pydantic (`schemas.py`), actualizas los tipos de TypeScript (`frontend/src/types/index.ts`) y los componentes React en el **mismo commit y Pull Request**. Nunca habrá discrepancias de versiones entre frontend y backend.
2. **Soporte Nativo de Cloudflare Pages para Monorepos:**  
   Cloudflare Pages permite definir el **Root directory** como `frontend`. Detecta automáticamente los cambios en esa subcarpeta y ejecuta el build sin tocar el backend.
3. **Soporte Nativo de Railway para Monorepos:**  
   Railway permite especificar el **Root directory** como `/backend` o apuntar a `Dockerfile.backend`. Al realizar un push a `main`, Railway solo reconstruye el backend cuando hay cambios relevantes.
4. **Infraestructura y Documentación Unificadas:**  
   El archivo `docker-compose.yml`, los scripts de base de datos (`schema.sql` y `seed.sql`) y la auditoría permanecen centralizados.

---

## 2. PASO 1: SUBIR EL PROYECTO A GITHUB

Abre tu terminal en `d:\Apps\MaidiJungle`:

```bash
# 1. Asegurar que estás en la rama principal 'main'
git checkout -b main

# 2. Agregar todos los archivos al staging (node_modules y .env están protegidos por .gitignore)
git add .

# 3. Realizar el commit inicial
git commit -m "feat: complete Madidi Jungle Ecolodge platform (Next.js 14 + FastAPI + PostgreSQL)"

# 4. Crear tu repositorio en GitHub (por ejemplo: 'madidi-jungle' o 'MaidiJungle') en tu cuenta de GitHub
# 5. Vincular el repositorio remoto (reemplaza TU_USUARIO por tu cuenta de GitHub):
git remote add origin https://github.com/TU_USUARIO/madidi-jungle.git

# 6. Subir el código a GitHub
git push -u origin main
```

---

## 3. PASO 2: DESPLEGAR EL BACKEND EN RAILWAY

Railway gestionará la API FastAPI y la base de datos PostgreSQL:

1. **Crear Proyecto en Railway:**
   - Ingresa a [railway.app](https://railway.app/) e inicia sesión con tu cuenta de GitHub.
   - Haz clic en **+ New Project** -> **Deploy from GitHub repo**.
   - Selecciona el repositorio `madidi-jungle`.

2. **Configurar el Servicio del Backend:**
   - Ve a la pestaña **Settings** del servicio recién creado.
   - En **Root Directory**, define: `/backend` (o deja `/` usando el Dockerfile).
   - En **Build**, Railway detectará automáticamente el archivo `Dockerfile` o `requirements.txt`.
   - En **Networking** -> Haz clic en **Generate Domain** (te asignará una URL pública como `madidi-backend-production.up.railway.app`).

3. **Añadir la Base de Datos PostgreSQL:**
   - En el mismo proyecto de Railway, haz clic en **+ New** -> **Database** -> **Add PostgreSQL**.
   - Railway creará la base de datos y generará automáticamente la variable `DATABASE_URL`.
   - Conecta el backend con la base de datos enlazando la variable `DATABASE_URL=${{Postgres.DATABASE_URL}}`.

4. **Variables de Entorno en Railway (Backend Settings -> Variables):**
   - `ENVIRONMENT` = `production`
   - `PORT` = `8000`
   - `WHATSAPP_PHONE_NUMBER` = `59172288339`
   - `FRONTEND_URL` = `https://madidijungle.apolodigital.lat`
   - `CORS_ORIGINS` = `["https://madidijungle.apolodigital.lat","http://localhost:3010"]`

5. *(Opcional)* **Subdominio Personalizado para la API:**
   - En Railway -> **Settings** -> **Custom Domain** -> Escribe: `api.madidijungle.apolodigital.lat`.
   - Railway te dará un registro CNAME para agregar en tu panel de Cloudflare DNS.

---

## 4. PASO 3: DESPLEGAR EL FRONTEND EN CLOUDFLARE PAGES

Cloudflare Pages ofrece la red perimetral (Edge CDN) más rápida del mundo con SSL automático:

1. **Crear Aplicación en Cloudflare:**
   - Ingresa a tu panel de [dash.cloudflare.com](https://dash.cloudflare.com/).
   - En el menú lateral, selecciona **Compute (Workers) & Pages** -> **Create application** -> Pestaña **Pages**.
   - Selecciona **Connect to Git** y autoriza tu cuenta de GitHub.
   - Elige el repositorio `madidi-jungle`.

2. **Configuración de Compilación (Build Settings):**
   - **Project name:** `madidi-jungle`
   - **Production branch:** `main`
   - **Framework preset:** `Next.js`
   - **Root directory:** `frontend` ⚠️ *(Fundamental: indica que el código de Next.js está en la subcarpeta frontend)*
   - **Build command:** `npm run build`
   - **Build output directory:** `.next`

3. **Variables de Entorno (Environment Variables):**
   Agrega en la sección de variables de Cloudflare Pages:
   - `NEXT_PUBLIC_API_URL`: La URL pública de tu backend en Railway (ejemplo: `https://madidi-backend-production.up.railway.app` o `https://api.madidijungle.apolodigital.lat`).
   - `NODE_VERSION`: `20`

4. Haz clic en **Save and Deploy**. Cloudflare descargará las dependencias, compilará la aplicación y la publicará en segundos.

---

## 5. PASO 4: ASIGNAR EL SUBDOMINIO `MadidiJungle.apolodigital.lat`

Dado que el dominio `apolodigital.lat` ya está administrado en tu cuenta de Cloudflare:

1. En tu proyecto de Cloudflare Pages, ve a la pestaña **Custom domains**.
2. Haz clic en **Set up a custom domain**.
3. Escribe el subdominio exacto: `MadidiJungle.apolodigital.lat` (o `madidijungle.apolodigital.lat`).
4. Haz clic en **Continue**.
5. Cloudflare configurará automáticamente el registro DNS CNAME correspondiente sin necesidad de que copies IPs ni tokens manuales.
6. En un par de minutos, el certificado SSL/TLS estará activo y el sitio estará en línea en **`https://MadidiJungle.apolodigital.lat`**.
