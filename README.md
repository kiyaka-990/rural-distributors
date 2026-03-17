# Rural Distributors Enterprises Limited — Next.js Website

A full-featured, production-grade Next.js 14 website for **Rural Distributors Enterprises Limited**, a premier civil & construction company based in Nairobi, Kenya.

## ✨ Features

- **Next.js 14** App Router with TypeScript
- **Glassmorphic UI** — frosted glass cards, ambient orbs, noise texture
- **Navy + Green + Gold** brand theme extracted from company profile
- **Animated Carousel** — auto-advancing portfolio slideshow with fading edges
- **AI Chatbot** — fully trained on company knowledge, no API needed
- **Interactive Map** — Google Maps embed pinned to Cianda House, Koinange St
- **Scroll Reveal** — staggered entrance animations on all sections
- **Animated Counters** — stat numbers count up on scroll
- **5 Pages**: Home, About, Services, Portfolio, Contact
- **Contact Form** — with service selector and success state
- **Responsive** — mobile-first, hamburger nav on small screens
- **SEO** — metadata on every page via Next.js Metadata API
- **Custom 404** page
- **Tailwind CSS** with custom brand tokens

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
rde-nextjs/
├── app/
│   ├── layout.tsx          # Root layout (fonts, orbs, noise overlay)
│   ├── globals.css         # Tailwind + custom CSS
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── portfolio/page.tsx  # Portfolio (filterable grid)
│   ├── contact/page.tsx    # Contact form + map
│   └── not-found.tsx       # 404 page
├── components/
│   ├── Navbar.tsx          # Sticky glassmorphic nav
│   ├── Footer.tsx          # Footer with links & contacts
│   ├── Chatbot.tsx         # AI chatbot widget
│   ├── Carousel.tsx        # Auto-advancing portfolio carousel
│   ├── Counter.tsx         # Animated stat counter
│   └── Reveal.tsx          # Scroll-triggered reveal wrapper
├── lib/
│   ├── data.ts             # All company data, services, projects
│   └── useReveal.ts        # IntersectionObserver hook
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## 🎨 Brand Tokens (Tailwind)

| Token | Value | Usage |
|-------|-------|-------|
| `navy` | `#0d1b3e` | Background |
| `navy-mid` | `#152547` | Cards |
| `green-brand` | `#1a6b3c` | Primary |
| `green-light` | `#22883f` | Accent |
| `gold` | `#c9a84c` | Highlight |
| `gold-light` | `#e8c96a` | Display text |

## 📞 Contact Information

- **Phone**: +254 722 313 131
- **Email**: ruraldist22@gmail.com
- **Address**: 7th Floor, Cianda House, Koinange Street, Nairobi
- **Post**: P.O. Box 19055 – 00500, Nairobi, Kenya
