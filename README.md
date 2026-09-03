# 🏋️ IRON PEAK FITNESS
### Project 1 — Responsive Frontend Interface
**Full Stack Development Training | HTML5 + CSS3 + Vanilla JavaScript | 2025**

---

## 📌 Project Overview

**Iron Peak Fitness** is a professional, fully responsive gym & fitness website built as **Project 1** of a 3-phase Full Stack Development program. 


the preview for the project is here https://thunderous-lamington-881818.netlify.app/

| Detail | Value |
|---|---|
| Project Name | Iron Peak Fitness |
| Project Phase | Project 1 of 3 |
| Tech Stack | HTML5, CSS3, Vanilla JavaScript (ES6+) |
| UI Style | Dark Theme + Glassmorphism + 3D Scroll Effects + Parallax |
| Color Theme | Purple / Black — premium luxury aesthetic |
| Pages | 7 pages |
| Year | 2025 |

---

## 🗺️ Project Roadmap

| Phase | Project | Technology | Status |
|---|---|---|---|
| **Project 1** | **Frontend Interface** | HTML5, CSS3, Vanilla JS | ✅ Current |
| Project 2 | Backend Integration | Node.js, Express, REST APIs | 🔜 Upcoming |
| Project 3 | Database Connectivity | MongoDB / MySQL | 🔜 Upcoming |

---

## 📄 Pages

| Page | File | Key Features |
|---|---|---|
| Home | `index.html` | Hero with parallax, Why Choose Us, Stats, Classes preview, Testimonials |
| About | `about.html` | Our Story, Timeline, Mission/Vision/Values, Achievement Counters, Team |
| Classes | `classes.html` | Category Tab Filter, Class Cards, Weekly Schedule Table |
| Trainers | `trainers.html` | Specialty Filter, Trainer Cards, Detail Modal, Spotlight Section |
| Pricing | `pricing.html` | Billing Toggle, 3 Plan Cards, BMI Calculator, FAQ Accordion |
| Contact | `contact.html` | Form with Validation, Map Placeholder, Opening Hours |
| Auth | `auth.html` | Login / Register, Password Strength Meter, Success Screen |

---

## 🎨 Design System

### Color Palette

| Name | Hex | Usage |
|---|---|---|
| Deep Black | `#050508` | Main page background |
| Surface | `#0e0e1a` | Card backgrounds |
| Purple | `#6b21a8` | Brand base |
| Purple Light | `#a855f7` | Borders, icons, labels |
| Accent | `#e879f9` | Button gradients, highlights |
| White | `#f8f4ff` | Primary text |
| Muted | `#8878a8` | Secondary text |
| Gold | `#d4af6a` | Star ratings only |

### Typography

| Font | Type | Usage |
|---|---|---|
| Bebas Neue | Display | Hero titles, section headings |
| Cormorant Garamond | Serif | Subtitles, quotes, italic accents |
| Space Grotesk | Body | Paragraphs, labels, buttons |

### Signature Effects
- **Glassmorphism** — `backdrop-filter: blur(20px)` frosted glass cards
- **3D Scroll Reveal** — `perspective(1000px) rotateX()` entrance animations via IntersectionObserver
- **Parallax Hero** — `background-attachment: fixed` (disabled on mobile for iOS compatibility)
- **Custom Cursor** — purple dot + lagging ring with `requestAnimationFrame`
- **Magnetic Buttons** — subtle mouse-follow pull on CTA buttons

---

## 📁 Folder Structure

```
iron-peak-fitness/
│
├── index.html              ← Home
├── about.html              ← About
├── classes.html            ← Classes
├── trainers.html           ← Trainers
├── pricing.html            ← Pricing + BMI Calculator
├── contact.html            ← Contact
├── auth.html               ← Login / Register
│
├── css/
│   ├── style.css           ← CSS variables, reset, typography, buttons
│   ├── navbar.css          ← Navigation bar
│   ├── hero.css            ← Home hero + inner page heroes
│   ├── cards.css           ← All glassmorphism card styles
│   ├── animations.css      ← Cursor, scroll reveal, orbs, progress bar
│   ├── responsive.css      ← All shared media queries
│   └── pages/
│       ├── home.css
│       ├── about.css
│       ├── classes.css
│       ├── trainers.css
│       ├── pricing.css
│       ├── contact.css
│       └── auth.css
│
├── js/
│   ├── main.js             ← Shared: cursor, navbar, scroll reveal, magnetic
│   ├── counter.js          ← Animated number counters
│   ├── tabs.js             ← Class category tab filter
│   ├── filter.js           ← Trainer specialty filter
│   ├── modal.js            ← Trainer detail modal
│   ├── slider.js           ← Testimonials carousel
│   ├── accordion.js        ← FAQ accordion
│   ├── bmi.js              ← BMI Calculator
│   ├── form.js             ← Contact form validation
│   ├── schedule.js         ← Today's hours highlight
│   ├── billing.js          ← Monthly/Annual price toggle
│   └── auth.js             ← Auth tabs, password strength, validation
│
├── images/
│   ├── hero/
│   ├── trainers/
│   ├── classes/
│   ├── gallery/
│   ├── og-image.jpg
│   └── logo.png
│
└── README.md
```

---

## ⚙️ JavaScript Features

| File | Page(s) | What It Does |
|---|---|---|
| `main.js` | All | Custom cursor, scroll progress bar, navbar scroll effect, hamburger menu, 3D scroll reveal, magnetic buttons |
| `counter.js` | Home, About, Trainers | Animated number count-up via IntersectionObserver |
| `tabs.js` | Classes | Tab filter — shows/hides class cards by category |
| `filter.js` | Trainers | Filter trainer cards by specialty |
| `modal.js` | Trainers | Opens full trainer bio in accessible modal with focus trap |
| `slider.js` | Home | Auto-playing testimonials carousel with manual controls |
| `accordion.js` | Pricing, Contact | One-at-a-time FAQ expand/collapse with aria-expanded |
| `bmi.js` | Pricing | BMI calculation, color-coded result, animated progress bar |
| `form.js` | Contact | Field-level validation, character counter, success state |
| `schedule.js` | Contact | Highlights today's opening hours and shows Open/Closed status |
| `billing.js` | Pricing | Toggles between monthly and annual pricing with animation |
| `auth.js` | Auth | Tab switching, password visibility, strength meter, form validation, success screen |

---

## 📱 Responsive Breakpoints

| Breakpoint | Screen | Layout Changes |
|---|---|---|
| Default | < 480px | Single column, stacked buttons |
| 480px+ | Small phones | 2-col grids where possible |
| 768px+ | Tablets | Full nav shown, 2–3 col grids |
| 1024px+ | Laptops | 4-col grids, full layouts |
| 1280px+ | Desktop | Max-width container (1200px) |

> **Mobile fixes applied:**
> - Parallax disabled on mobile (iOS `background-attachment: fixed` bug)
> - 3D animations disabled via `prefers-reduced-motion`
> - Auth left panel hidden on mobile

---

## ♿ Accessibility

- Semantic HTML5 elements throughout (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- One `<h1>` per page with correct heading hierarchy
- All images have descriptive `alt` attributes
- All form inputs have associated `<label>` elements
- Hamburger and accordion buttons have `aria-expanded`
- Modal uses `role="dialog"`, `aria-modal="true"`, and focus trapping
- Icon-only buttons have `aria-label`
- Decorative Font Awesome icons have `aria-hidden="true"`
- Skip-to-content link for screen reader users
- Custom `:focus-visible` styles on all interactive elements
- `prefers-reduced-motion` media query disables all transform animations
- Error messages use `role="alert"` for screen reader announcements
- Color contrast exceeds WCAG AA 4.5:1 ratio

---

## 🔍 SEO

- Unique `<title>` and `<meta name="description">` per page
- Open Graph tags (`og:title`, `og:description`, `og:image`) on all pages
- `<link rel="canonical">` on every page
- Google Fonts loaded with `display=swap` (prevents FOUT)
- Semantic HTML structure for crawler readability
- Optimized image alt text

---

## 🚫 What's NOT Included (Future Projects)

| Feature | Planned For |
|---|---|
| Node.js / Express server | Project 2 |
| Real email sending from contact form | Project 2 |
| User authentication / JWT tokens | Project 2 |
| REST API endpoints | Project 2 |
| MongoDB / MySQL database | Project 3 |
| Online membership payments | Project 3 |
| Admin dashboard / CMS | Project 3 |

> This project uses **zero frameworks** — no React, Vue, Angular, Bootstrap, or Tailwind CSS.

---

## 🚀 Getting Started

1. **Clone or download** the project folder
2. Open `index.html` in **Google Chrome** or **Microsoft Edge**
3. No build step, no npm install, no server required — it's pure HTML/CSS/JS

```bash
# Optional: serve locally with VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

---

## 🧪 Browser Support

| Browser | Support |
|---|---|
| Google Chrome | ✅ Full |
| Microsoft Edge | ✅ Full |
| Mozilla Firefox | ✅ (requires `-webkit-backdrop-filter` prefix — already included) |
| Safari (Mac/iOS) | ✅ (parallax disabled on mobile) |

---

## 👥 Gym Data

**8 Trainers** — Marcus Cole, Aria Sharma, Zara Knox, Leon Voss, Damon Pierce, Selena Park, Rhys Calloway, Nadia Osei

**8 Classes** — HIIT, Power Lift, Zen Yoga, CrossFit WOD, Cardio Burn, Recovery Flow, Combat Fit, Olympic Lift

**3 Membership Plans** — Essential ($49/mo), Elite ($99/mo), Legend ($179/mo)

---

## 📚 References

- [MDN Web Docs — HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs — CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN Web Docs — JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MDN — IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)
- [Google Fonts](https://fonts.google.com) — Bebas Neue, Cormorant Garamond, Space Grotesk
- [Font Awesome v6](https://fontawesome.com)
- [WCAG 2.1 Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- DecodeLabs Internship Training Material

---

*Iron Peak Fitness — Project 1 | Full Stack Development Training | 2025*
*Build clean. Build responsive. Build accessible.*
