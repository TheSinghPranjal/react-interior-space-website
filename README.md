# Interior Space — Marketing Website

Production-ready marketing landing page for **Interior Space**, a professional interior design and apartment blueprint tool built for real estate agents, property developers, and interior designers.

Built with **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lenis** smooth scroll. Deploy-ready for **Vercel**.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO metadata, Lenis wrapper
│   ├── page.tsx            # Landing page (all scroll sections)
│   └── globals.css         # Tailwind + brand tokens
├── components/
│   ├── sections/           # Hero, Features, SketchMode, Pricing, etc.
│   ├── ui/                 # Button, FeatureCard, DeviceFrame, Accordion
│   └── layout/             # Header, Footer, SmoothScroll, JsonLd
├── lib/
│   ├── constants.ts        # Links, nav items, app name
│   ├── animations.ts       # Framer Motion variants
│   └── utils.ts            # cn() helper
└── public/screenshots/     # App screenshot placeholders (replace with real PNGs)
```

## Adding Screenshots

Replace placeholder PNGs in `public/screenshots/` with real app screenshots:

| File | Used In |
|------|---------|
| `hero-app.png` | Hero section (priority load) |
| `screenshot-blueprint.png` | Three Modes — Blueprint |
| `screenshot-sketch.png` | Three Modes — Sketch |
| `screenshot-sketch-annotated.png` | Sketch Deep Dive |
| `screenshot-3d.png` | Three Modes — 3D |
| `screenshot-3d-room.png` | 3D Visualization |
| `screenshot-3d-top-view.png` | 3D before/after slider |
| `screenshot-interior-mode.png` | Interior vs Apartment |
| `screenshot-apartment-mode.png` | Interior vs Apartment |
| `screenshot-furniture.png` | Room Features grid |
| `screenshot-walls.png` | Room Features grid |
| `screenshot-pdf-export.png` | Export & Share |
| `screenshot-export-menu.png` | Export & Share |
| `screenshot-ai-assist.png` | AI Assist teaser |

### How to capture from the Flutter app

1. Run the app on emulator or device (consistent frame: iPhone 15 Pro or Pixel 7)
2. Capture: Home, Blueprint, Sketch with annotations, 3D preview, Apartment layout, PDF export
3. Export at 2x or 3x resolution
4. Drop files into `public/screenshots/` keeping the same filenames

## Updating Copy

- **App name & tagline:** `lib/constants.ts`
- **Download / demo links:** `lib/constants.ts` → `LINKS` object
- **Section content:** Individual files in `components/sections/`
- **SEO metadata:** `app/layout.tsx` → `metadata` export
- **Pricing tiers:** `components/sections/Pricing.tsx`

## Deploying to Vercel

### Option 1: Vercel CLI (one command)

```bash
# First deploy (creates project, links directory)
npx vercel

# Production deploy
npx vercel --prod
```

### Option 2: GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Every push to `main` triggers automatic production deploys

### Custom Domain

1. Vercel Dashboard → Project → **Settings** → **Domains**
2. Add your domain (e.g. `interiorspace.app`)
3. Update DNS records as shown by Vercel

## Environment Variables

No secrets required for the marketing site. Optional analytics (add in Vercel Dashboard → Settings → Environment Variables):

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible analytics domain |

Access in code: `process.env.NEXT_PUBLIC_GA_ID`

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint via next lint
```

## Tech Notes

- Images use `next/image` for automatic optimization on Vercel
- Hero image has `priority` for LCP optimization; below-fold images lazy-load
- Scroll animations use Framer Motion `whileInView` with `prefers-reduced-motion` support
- Smooth scroll via Lenis (`lenis/react`) wrapped in root layout
- JSON-LD `SoftwareApplication` schema in layout for SEO

## License

Private — Interior Space © 2026
