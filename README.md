# Vinay Bajrangi Astrologer — Next.js + Tailwind CSS

A full conversion of the original HTML astrology website into a modern Next.js 14 + Tailwind CSS project.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
vinaybajrangi-nextjs/
├── app/
│   ├── globals.css       # Global styles + CSS variables
│   ├── layout.js         # Root layout with fonts & metadata
│   └── page.js           # Main page (assembles all sections)
├── components/
│   ├── Topbar.jsx           # Top contact bar (purple)
│   ├── Logobar.jsx          # Logo + search + nav links
│   ├── Navbar.jsx           # Sticky gradient navbar
│   ├── ReportsBar.jsx       # Auto-scrolling reports marquee
│   ├── HeroSection.jsx      # Life problems grid + zodiac tabs
│   ├── CoursesBanner.jsx    # Astrology courses (red gradient)
│   ├── PopularReports.jsx   # Report cards + Karma report
│   ├── PanchangServices.jsx # Daily panchang + services list
│   ├── CalculatorsSection.jsx # Vedic calculator grid
│   ├── FormsSection.jsx     # Moon sign / Kundli / matching forms
│   ├── ServiceTypes.jsx     # Service type cards + promo banners
│   ├── AboutSection.jsx     # About the astrologer
│   ├── Footer.jsx           # Glass-dark footer
│   ├── FloatWidget.jsx      # Floating side widget buttons
│   ├── StickyButtons.jsx    # Sticky bottom CTA buttons
│   └── MobileMenu.jsx       # Full-screen mobile nav menu
├── public/               # Static assets
├── tailwind.config.js    # Tailwind config with custom colors
├── postcss.config.js
├── next.config.js
├── jsconfig.json
└── package.json
```

## 🎨 Design System

Custom colors defined in `tailwind.config.js`:
- `or` / `or2` — Orange brand (#E8650A / #F97316)
- `navy` / `navy2` — Navy blue (#1a237e / #283593)
- `purple2` — Purple (#7C3AED)
- `teal` — Teal (#0D7377)
- `gold` — Gold (#C9921A)

Custom fonts: **Playfair Display** (headings) + **Nunito** (body)

## ✨ Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Sticky navbar with glass morphism effect
- ✅ Auto-scrolling reports ticker
- ✅ Interactive horoscope tabs
- ✅ Gender toggle forms
- ✅ Mobile hamburger menu
- ✅ Floating side widgets
- ✅ Sticky bottom CTA buttons
- ✅ Glass-dark footer with hover animations
