# Saisrini Jewellers — Premium Gold Jewellery Website

A production-ready luxury jewellery eCommerce website for **Saisrini Jewellers**, Hyderabad.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| CMS | Sanity v3 (Studio at `/studio`) |
| Cart State | Zustand |
| Forms | React Hook Form |
| WhatsApp | Custom URL builder |

## Getting Started

### 1. Clone & Install

```bash
cd d:/Projects/SaiSriniJewellars
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required variables:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID from [sanity.io/manage](https://sanity.io/manage) |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (usually `production`) |
| `SANITY_API_TOKEN` | Sanity API token with read/write access |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number with country code, no `+` (e.g. `919876543210`) |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` | Google Maps embed URL from Maps > Share > Embed a map |

### 3. Set Up Sanity CMS

1. Create a new project at [sanity.io](https://sanity.io)
2. Copy the **Project ID** and **Dataset** to `.env.local`
3. Generate an API token at `sanity.io/manage > API > Tokens`
4. Start the dev server — Sanity Studio is embedded at `/studio`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Access Sanity Studio

Open [http://localhost:3000/studio](http://localhost:3000/studio)

Add your products, categories, reviews, and site settings through the CMS.

## Project Structure

```
app/
├── (site)/          # Public-facing pages
│   ├── page.tsx          # Home (8 sections)
│   ├── products/         # Products listing + detail
│   ├── about/            # About page
│   ├── reviews/          # Customer reviews
│   └── contact/          # Contact + WhatsApp form
└── studio/[[...index]]/ # Sanity CMS studio

components/
├── layout/          # Navbar + Footer
├── home/            # 8 home sections
├── products/        # Product card, grid, filters
└── cart/            # Cart drawer + WhatsApp button

lib/
├── cart-store.ts    # Zustand cart state
└── whatsapp.ts      # WhatsApp message builder

sanity/
├── schema/          # All CMS schemas
├── lib/             # Sanity client + GROQ queries
└── sanity.config.ts # Studio configuration
```

## Key Features

- **WhatsApp Quote Cart** — Add items, write a name + requirement, send a pre-filled WhatsApp message
- **Sanity CMS** — Manage products, categories, reviews, banners, and settings
- **SEO Ready** — Metadata, JSON-LD, sitemap.xml, robots.txt on all pages
- **Framer Motion** — Scroll animations, stagger reveals, carousel transitions
- **Gold Shimmer** — CSS keyframe animation on hero headline
- **Mobile First** — Responsive on all screen sizes; hamburger menu, filter drawer

## Deploying to Vercel

```bash
npm run build
# Push to GitHub → connect to Vercel → add env variables in Vercel dashboard
```

## Updating WhatsApp Number

Change `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local`:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX
```

## Adding Real Products

1. Open Sanity Studio at `/studio`
2. Add **Categories** first (e.g. "Bridal Jewellery", "Gold Chains")
3. Add **Products** — attach images, weight, purity, price (or leave blank for "Ask for Price")
4. Toggle `isFeatured` for homepage showcase items
5. Toggle `isNew` for "New Arrival" badge

---

Built with ❤️ for Saisrini Jewellers, Hyderabad
