# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A full-stack monorepo boilerplate combining Next.js 14 (frontend) and NestJS (backend) with MongoDB. Uses pnpm workspaces for package management.

## Commands

### Development

```bash
pnpm dev                    # Run both frontend and backend concurrently
pnpm dev:frontend           # Next.js dev server only (port 3000)
pnpm dev:backend            # NestJS dev server with watch mode (port 3001)
```

### Building & Testing

```bash
pnpm build                  # Build all apps
pnpm test                   # Run Jest unit tests across all packages
pnpm test:e2e               # Run Playwright E2E tests
pnpm --filter backend test:watch  # Run backend tests in watch mode
pnpm --filter backend test:cov    # Run backend tests with coverage
```

### Code Quality

```bash
pnpm lint                   # Lint all packages
pnpm typecheck              # Type check all apps
pnpm format                 # Format all files with Prettier
pnpm format:check           # Check formatting without fixing
```

### Targeting Specific Apps

```bash
pnpm --filter frontend <command>   # Run command in frontend only
pnpm --filter backend <command>    # Run command in backend only
pnpm --filter e2e-tests <command>  # Run command in E2E tests only
```

## Architecture

```
apps/
├── frontend/           # Next.js 14 with App Router
│   └── src/
│       ├── app/        # App Router pages
│       ├── components/ # React components
│       └── lib/        # Utilities
└── backend/            # NestJS application
    └── src/
        ├── main.ts     # Entry point
        └── *.module.ts # Feature modules

tests/
└── e2e/                # Playwright tests with Page Object Model
```

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: NestJS 10, Mongoose 8, class-validator for DTOs
- **Testing**: Jest (unit), Playwright (E2E)
- **Node**: >= 20.0.0, pnpm >= 9.0.0

## Environment Setup

**Frontend** (`apps/frontend/.env.local`):

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

**Backend** (`apps/backend/.env`):

```
MONGODB_URI=mongodb://localhost:27017/your-database
PORT=3001
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

## Code Quality Automation

Pre-commit hooks (via Husky + lint-staged) automatically:

- Run ESLint with auto-fix on staged files
- Format with Prettier
- Type check modified app files

## AI Agent Patterns (from AGENTS.md)

The project defines specialized agent roles. Use the pattern: "As the [agent name], [task description]"

- **Architect Agent**: System design, API contracts, scalability
- **Frontend Developer Agent**: React/Next.js components, styling
- **Backend Developer Agent**: NestJS APIs, database design
- **QA Testing Agent**: Unit/integration tests, coverage
- **E2E Testing Agent**: Playwright tests, Page Object Model
- **Code Review Agent**: Code quality, best practices, security

## Sección de Fechas (Tour Dates)

### Archivos clave

- **Datos**: `apps/frontend/src/constants.ts` → array `TOUR_DATES`
- **Componente**: `apps/frontend/src/components/la-tuki/EventSection.tsx`
- **Traducciones**: `apps/frontend/src/lib/translations.ts` → clave `events`
- **Flyers**: `apps/frontend/public/images/flyers/` — solo formato `.webp`

### Estructura de cada evento

```typescript
{
  id: 'ciudad-MMDD',        // ej: 'roca-0606'
  date: 'DD/MM',            // para mostrar en pantalla
  fullDate: 'YYYY-MM-DD',   // para lógica automática de fechas
  venue: 'Nombre del lugar',
  city: 'CIUDAD, PROVINCIA',
  image: '/images/flyers/nombre-del-archivo.webp',
  ticketUrl: 'https://...',  // omitir si aún no hay link
}
```

### Lógica automática de visualización

El componente calcula todo en base a la fecha actual — **no usar `past: true` manual**:

1. Si el mes actual tiene fechas que aún no pasaron → se muestra el mes actual (pasados como AGOTADO)
2. Si todas las fechas del mes actual ya pasaron y hay un mes futuro publicado → se muestra el mes futuro
3. Si no hay fechas próximas en ningún mes → se muestra "Planificando nuevas fechas..."
4. Se muestran 8 fechas por defecto; las restantes aparecen con "VER MÁS FECHAS"

### Workflow para agregar nuevas fechas

**1. Agregar el evento en `constants.ts`**

- Usar `fullDate` en formato ISO (`YYYY-MM-DD`)
- No agregar `past: true` (se calcula automáticamente)
- Si el venue está vacío, dejar `venue: ''` (el separador `·` no aparece)

**2. Preparar los flyers**
Los flyers que entrega el diseñador suelen ser PNG de alta resolución (4000px+, varios MB).
Antes de subirlos al proyecto, siempre redimensionar y convertir a WebP:

```bash
# Redimensionar a 700px de ancho y convertir a WebP (calidad 82)
magick flyer-original.png -resize 700x -quality 82 nombre-destino.webp
```

Para procesar varios de una vez:

```bash
for f in *.png; do
  magick "$f" -resize 700x -quality 82 "${f%.png}.webp"
done
```

Resultado esperado: de ~5–12 MB PNG a ~50–120 KB WebP a 700×1244px.

**3. Copiar el `.webp` a la carpeta de flyers**

```
apps/frontend/public/images/flyers/
```

Convención de nombres: `ciudad-MMDD.webp` (ej: `roca-0606.webp`)

**4. Nunca dejar archivos PNG en la carpeta de flyers**
Solo `.webp` y `.jpg`. Los PNG sin comprimir rompen la performance de la sección.

**5. Verificar**

```bash
pnpm --filter frontend typecheck
```

---

## Assets pendientes

- **Video hero (#1):** El archivo `LATUKI.mp4` es vertical (1080x1920). Se necesita versión widescreen (16:9) para el hero de desktop. Cuando lo tengan, copiarlo a `apps/frontend/public/videos/hero-bg.mp4`.

## Commit Convention

Follow Conventional Commits:

```
<type>(<scope>): <subject>

Types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
```
