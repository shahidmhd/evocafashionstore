# Evoca Fashion — Premium Fashion Website

A luxury fashion website for Evoca Fashion built with Next.js (App Router), Tailwind CSS, and Framer Motion.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → Open http://localhost:3000

# Build for production (static export)
npm run build
# → Static files exported to /out folder
```

## Project Structure

```
evocafashionstore/
├── app/
│   ├── layout.tsx          # Root layout (Navbar, Footer, WhatsApp)
│   ├── globals.css         # Global styles + Tailwind directives
│   ├── page.tsx            # Home page
│   ├── collections/
│   │   └── page.tsx        # Collections page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navbar.tsx          # Sticky animated navbar
│   ├── Hero.tsx            # Hero section with parallax
│   ├── Collections.tsx     # Collection cards grid
│   ├── CollectionCard.tsx  # Individual collection card
│   ├── ProductGrid.tsx     # Product grid (8 items)
│   ├── StatsBar.tsx        # Animated stats
│   ├── AboutSection.tsx    # About + values
│   ├── Testimonials.tsx    # Auto-rotating carousel
│   ├── LocationsBanner.tsx # 4 store locations
│   ├── Footer.tsx          # Full footer
│   ├── WhatsAppButton.tsx  # Floating WhatsApp button
│   └── ScrollReveal.tsx    # Scroll animation wrapper
├── next.config.js          # Static export config
├── tailwind.config.ts      # Custom gold/obsidian theme
└── package.json
```

## Deployment

### Static Hosting (Netlify / Vercel / cPanel)
After `npm run build`, deploy the `/out` folder to any static host.

### Netlify
```bash
npm run build
# Drag & drop the /out folder to netlify.com/drop
```

### Vercel
```bash
npx vercel --prod
```

## Customization

### Change WhatsApp Number
In `components/WhatsAppButton.tsx` and `app/contact/page.tsx`:
```ts
const WHATSAPP_NUMBER = '91XXXXXXXXXX'  // Replace with actual number
```

### Update Store Details
In `components/LocationsBanner.tsx` and `app/contact/page.tsx` — update city, address, phone, hours.

### Change Colors
In `tailwind.config.ts` — modify the `gold` and `obsidian` color scales.

### Add Real Product Images
Replace the emoji placeholders in `components/ProductGrid.tsx` with `<Image>` components from Next.js pointing to your product photos.

## Tech Stack
- **Next.js 14** — App Router, Static Export
- **Tailwind CSS** — Custom luxury theme
- **Framer Motion** — Scroll animations, parallax, carousel
- **Lucide React** — Icons
