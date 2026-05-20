# IRON PEAK FITNESS — Complete Copilot Documentation
### Full Stack Development | Project 1 | Frontend Interface
### Technology: HTML5 + CSS3 + Vanilla JavaScript | 2025

---

> **READ THIS FIRST — INSTRUCTIONS FOR COPILOT**
>
> This document is the single source of truth for the Iron Peak Fitness project.
> Every page, every file, every CSS variable, every JavaScript function, every
> design decision is documented here. Before writing or editing ANY code:
> 1. Read the Design System section completely
> 2. Read the Folder Structure section completely
> 3. Read the Shared Components section completely
> 4. Read the specific page section you are working on
> 5. Never repeat shared code — always link external files
> 6. Never use frameworks, Bootstrap, Tailwind, React, Vue, or Angular
> 7. Never use `cursor: auto` — custom cursor is always active

---

## TABLE OF CONTENTS

1. [Project Overview](#1-project-overview)
2. [Full Folder Structure](#2-full-folder-structure)
3. [Design System — The Single Source of Truth](#3-design-system)
4. [Shared Components — Never Repeat These](#4-shared-components)
5. [CSS File Breakdown — What Goes Where](#5-css-file-breakdown)
6. [JavaScript File Breakdown — What Goes Where](#6-javascript-file-breakdown)
7. [HTML File Rules — Every Page](#7-html-file-rules)
8. [Page 1 — index.html (Home)](#8-page-1--indexhtml-home)
9. [Page 2 — about.html (About)](#9-page-2--abouthml-about)
10. [Page 3 — classes.html (Classes)](#10-page-3--classeshtml-classes)
11. [Page 4 — trainers.html (Trainers)](#11-page-4--trainershtml-trainers)
12. [Page 5 — pricing.html (Pricing)](#12-page-5--pricinghml-pricing)
13. [Page 6 — contact.html (Contact)](#13-page-6--contacthtml-contact)
14. [Page 7 — auth.html (Login / Register)](#14-page-7--authhtml-login--register)
15. [Responsive Breakpoints](#15-responsive-breakpoints)
16. [Accessibility Rules](#16-accessibility-rules)
17. [SEO Rules](#17-seo-rules)
18. [What Is NOT in This Project](#18-what-is-not-in-this-project)
19. [Common Mistakes to Avoid](#19-common-mistakes-to-avoid)
20. [Data — Trainers, Classes, Pricing, FAQs](#20-data)

---

## 1. PROJECT OVERVIEW

**Project Name:** Iron Peak Fitness
**Type:** Responsive Gym & Fitness Frontend Website
**Phase:** Project 1 of 3 (Frontend Only — no backend, no database)
**Pages:** 7 pages (Home, About, Classes, Trainers, Pricing, Contact, Auth)
**UI Style:** Dark theme + Purple/Black luxury + Glassmorphism + 3D scroll effects + Parallax + Custom cursor
**Color Theme:** Purple + Black (premium, luxury, elite)
**Year:** 2025

### Project Phases (Full Stack Program)
| Phase | Project | Technology |
|---|---|---|
| **Project 1 (Current)** | Frontend Interface | HTML5, CSS3, Vanilla JavaScript |
| Project 2 | Backend Integration | Node.js, Express, REST APIs |
| Project 3 | Database Connectivity | MongoDB / MySQL |

### What This Project Demonstrates
- Advanced CSS: glassmorphism, backdrop-filter, CSS custom properties, clamp(), perspective transforms
- JavaScript DOM manipulation: IntersectionObserver, custom cursor, form validation, modal, accordion, tabs, filter, counter animation
- Responsive design: mobile-first, 5 breakpoints
- Accessibility: semantic HTML, ARIA labels, keyboard navigation, focus management
- Performance: GPU-accelerated animations only, prefers-reduced-motion support, font-display: swap

---

## 2. FULL FOLDER STRUCTURE

```
iron-peak-fitness/
│
├── index.html              ← Home page
├── about.html              ← About page
├── classes.html            ← Classes page
├── trainers.html           ← Trainers page
├── pricing.html            ← Pricing + BMI Calculator page
├── contact.html            ← Contact page
├── auth.html               ← Login / Register page
│
├── css/
│   ├── style.css           ← ROOT: CSS variables, reset, typography, buttons, utilities, noise overlay
│   ├── navbar.css          ← Navbar + mobile nav overlay ONLY
│   ├── hero.css            ← Page hero (shared across all inner pages) + home hero
│   ├── cards.css           ← All glass card styles, feature cards, trainer cards, pricing cards
│   ├── animations.css      ← Cursor, progress bar, scroll reveal classes, orbs, diagonal lines, marquee
│   ├── responsive.css      ← ALL shared media queries (page-specific queries go in pages/ files)
│   └── pages/
│       ├── home.css        ← Home-only sections: features grid, classes preview, stats bar, testimonials
│       ├── about.css       ← About-only: story split, timeline, MVV section, values strip, team grid
│       ├── classes.css     ← Classes-only: filter tabs, class cards grid, schedule table
│       ├── trainers.css    ← Trainers-only: stats bar, filter buttons, trainer grid, spotlight, modal
│       ├── pricing.css     ← Pricing-only: billing toggle, pricing cards, comparison table, BMI, FAQ
│       ├── contact.css     ← Contact-only: info cards, form, map, hours, mini FAQ
│       └── auth.css        ← Auth-only: split layout, form tabs, password strength, success state
│
├── js/
│   ├── main.js             ← SHARED: cursor, progress bar, navbar scroll, hamburger, scroll reveal, magnetic buttons
│   ├── counter.js          ← Counter animation (IntersectionObserver + setInterval) — About, Home, Trainers
│   ├── tabs.js             ← Category tab filter — Classes page
│   ├── filter.js           ← Trainer specialty filter — Trainers page
│   ├── modal.js            ← Trainer detail modal (open/close/focus trap/keyboard) — Trainers page
│   ├── slider.js           ← Testimonials auto-scroll carousel — Home page
│   ├── accordion.js        ← FAQ accordion (one-at-a-time, aria-expanded, chevron rotate) — Pricing + Contact
│   ├── bmi.js              ← BMI Calculator (validate, calculate, color result, progress bar) — Pricing page
│   ├── form.js             ← Contact form (validate, character counter, success state) — Contact page
│   ├── schedule.js         ← Hours highlight (today's day + open/closed logic) — Contact page
│   ├── billing.js          ← Monthly/annual toggle + price swap with animation — Pricing page
│   └── auth.js             ← Tab switch, password toggle, strength meter, validation, loading states — Auth page
│
├── images/
│   ├── hero/               ← Hero background images (hero-bg.jpg, about-hero.jpg, etc.)
│   ├── trainers/           ← Trainer profile photos
│   ├── classes/            ← Class images (hiit.jpg, yoga.jpg, etc.)
│   ├── gallery/            ← Gym interior photos
│   ├── og-image.jpg        ← Open Graph social share image
│   └── logo.png            ← Iron Peak Fitness logo
│
└── README.md               ← Project readme
```

### CSS Load Order (every HTML page must follow this exact order)
```html
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/navbar.css">
<link rel="stylesheet" href="css/hero.css">
<link rel="stylesheet" href="css/cards.css">
<link rel="stylesheet" href="css/animations.css">
<link rel="stylesheet" href="css/responsive.css">
<link rel="stylesheet" href="css/pages/[pagename].css">
```

### JS Load Order (always at bottom of `<body>`, always in this order)
```html
<script src="js/main.js"></script>
<!-- Then page-specific scripts -->
<script src="js/counter.js"></script>   <!-- if page has counters -->
<script src="js/tabs.js"></script>      <!-- if page has tabs -->
<!-- etc. -->
```

---

## 3. DESIGN SYSTEM

> **CRITICAL FOR COPILOT:** These values are defined ONCE in `css/style.css` inside `:root {}`.
> Never hardcode these values anywhere else. Always use the CSS variable name.

### CSS Custom Properties (paste into `css/style.css` `:root {}`)

```css
:root {
  /* ── Backgrounds ── */
  --black:        #050508;    /* Darkest — main page bg */
  --deep:         #0a0a12;    /* Section alternate bg */
  --surface:      #0e0e1a;    /* Card background */
  --surface2:     #13131f;    /* Card hover background */
  --purple-dark:  #1a0a2e;    /* Deep purple sections */

  /* ── Brand Colors ── */
  --purple:       #6b21a8;
  --purple-mid:   #8b2be2;
  --purple-light: #a855f7;    /* Primary accent — borders, icons, labels */
  --purple-glow:  #c084fc;    /* Glow effects, gradient endpoints */
  --violet:       #7c3aed;    /* Button gradient start */
  --accent:       #e879f9;    /* Button gradient end, highlights */
  --gold:         #d4af6a;    /* Star ratings only */

  /* ── Text ── */
  --white:        #f8f4ff;    /* Primary text */
  --muted:        #8878a8;    /* Secondary text, placeholders */

  /* ── Glass Effect ── */
  --glass:        rgba(168, 85, 247, 0.06);
  --glass-border: rgba(168, 85, 247, 0.18);

  /* ── Typography ── */
  --font-display: 'Bebas Neue', sans-serif;       /* Hero titles, section headings, nav logo */
  --font-serif:   'Cormorant Garamond', serif;    /* Subtitles, quotes, italic body text */
  --font-body:    'Space Grotesk', sans-serif;    /* All body text, labels, buttons */

  /* ── Spacing ── */
  --section-py:   130px;      /* Standard section top/bottom padding */
  --card-radius:  2px;        /* All cards — sharp premium look, NOT rounded */
  --border-radius: 2px;

  /* ── Transitions ── */
  --transition:      all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-slow: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}
```

### Typography Scale (in `css/style.css`)

```css
h1 { font-family: var(--font-display); font-size: clamp(5rem, 14vw, 13rem); line-height: 0.88; letter-spacing: 6px; }
h2 { font-family: var(--font-display); font-size: clamp(2.8rem, 6vw, 6rem); line-height: 0.92; letter-spacing: 4px; }
h3 { font-family: var(--font-display); font-size: clamp(1.4rem, 3vw, 2rem); letter-spacing: 2px; }
p  { font-family: var(--font-body);    font-size: clamp(0.8rem, 1.5vw, 0.9rem); line-height: 1.9; }
```

### Google Fonts Link (every HTML `<head>`)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=Space+Grotesk:wght@300;400;500&display=swap" rel="stylesheet">
```

### Font Awesome Link (every HTML `<head>`)
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
```

### Section Background Alternation Pattern
Every website section alternates backgrounds in this order:
```
--black → --deep → --black → --purple-dark → --deep → --black → --deep
```
Never use two adjacent sections with the same background.

### The 1px Gap Border Trick (used on ALL card grids)
```css
/* Wrapper gets the border color as background */
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(N, 1fr);
  gap: 1px;
  background: var(--glass-border);  /* This IS the border */
  border: 1px solid var(--glass-border);
}
/* Each child gets its own solid background — the 1px gap shows through as border */
.grid-child {
  background: var(--surface);
}
```

### Standard Glass Card (in `css/cards.css`)
```css
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--card-radius);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  padding: 36px;
  transition: var(--transition);
}
.glass-card:hover {
  border-color: rgba(168, 85, 247, 0.4);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  transform: translateY(-6px);
}
```

### Primary Button (in `css/style.css`)
```css
.btn-primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 44px;
  background: linear-gradient(135deg, var(--violet), var(--purple-mid));
  color: var(--white);
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  border: none;
  border-radius: var(--border-radius);
  cursor: none;
  overflow: hidden;
  transition: var(--transition);
  box-shadow: 0 0 30px rgba(124, 58, 237, 0.4), inset 0 1px 0 rgba(255,255,255,0.1);
}
.btn-primary::before {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(135deg, var(--purple-light), var(--accent));
  opacity: 0;
  transition: opacity 0.4s;
}
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 0 60px rgba(168, 85, 247, 0.6); }
.btn-primary:hover::before { opacity: 1; }
.btn-primary span { position: relative; z-index: 1; }
```

### Ghost Button (in `css/style.css`)
```css
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 44px;
  background: transparent;
  color: var(--muted);
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: var(--border-radius);
  cursor: none;
  transition: var(--transition);
}
.btn-ghost:hover {
  border-color: var(--purple-light);
  color: var(--white);
  background: rgba(168, 85, 247, 0.08);
}
```

### Section Label (reusable utility in `css/style.css`)
```css
.section-label {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-body);
  font-size: 0.62rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--purple-light);
  margin-bottom: 20px;
}
.section-label::before {
  content: '';
  width: 24px;
  height: 1px;
  background: var(--purple-light);
}
```

### Highlight Text (gradient clipped to text)
```css
.highlight {
  background: linear-gradient(135deg, var(--purple-light), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 4. SHARED COMPONENTS

> These components appear on EVERY page. Code lives in shared files only.
> HTML structure goes in each page's HTML. Styles go in shared CSS files. JS goes in `js/main.js`.

### 4.1 Custom Cursor (CSS in `animations.css`, JS in `main.js`)

**HTML (paste in every `<body>` before everything else):**
```html
<div id="cursor"></div>
<div id="cursor-ring"></div>
```

**CSS (`css/animations.css`):**
```css
#cursor {
  position: fixed;
  width: 12px; height: 12px;
  background: var(--purple-light);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s, background 0.3s;
  mix-blend-mode: screen;
}
#cursor-ring {
  position: fixed;
  width: 40px; height: 40px;
  border: 1px solid rgba(168, 85, 247, 0.5);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
}
body { cursor: none; }
* { cursor: none !important; }
```

**JS (`js/main.js` — `initCursor()` function):**
```javascript
function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');
  let cx = 0, cy = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    cx = e.clientX; cy = e.clientY;
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
  });

  function animateRing() {
    rx += (cx - rx) * 0.12;
    ry += (cy - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();
}
```

### 4.2 Scroll Progress Bar (CSS in `animations.css`, JS in `main.js`)

**HTML (paste in every `<body>` after cursor divs):**
```html
<div id="progress-bar"></div>
```

**CSS (`css/animations.css`):**
```css
#progress-bar {
  position: fixed;
  top: 0; left: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--violet), var(--accent));
  z-index: 9996;
  width: 0%;
  transition: width 0.1s linear;
}
```

**JS (`js/main.js` — `initProgressBar()` function):**
```javascript
function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (scrolled / total * 100) + '%';
  });
}
```

### 4.3 Noise Overlay (CSS in `css/style.css`)
```css
body::before {
  content: '';
  position: fixed; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  opacity: 0.025;
  pointer-events: none;
  z-index: 9997;
}
```

### 4.4 Navbar (CSS in `css/navbar.css`, JS in `js/main.js`)

**HTML (paste in every page inside `<header>`):**
```html
<header>
  <nav class="navbar" id="navbar" role="navigation" aria-label="Main navigation">
    <a href="index.html" class="nav-logo">Iron<span>Peak</span></a>
    <ul class="nav-links">
      <li><a href="about.html">About</a></li>
      <li><a href="classes.html">Classes</a></li>
      <li><a href="trainers.html">Trainers</a></li>
      <li><a href="pricing.html">Pricing</a></li>
      <li><a href="auth.html" class="nav-cta">Join Now</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </nav>
</header>

<!-- Mobile nav overlay -->
<nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
  <button class="mobile-nav-close" id="mobile-nav-close" aria-label="Close menu">
    <i class="fa-solid fa-xmark"></i>
  </button>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="classes.html">Classes</a>
  <a href="trainers.html">Trainers</a>
  <a href="pricing.html">Pricing</a>
  <a href="auth.html">Join Now</a>
</nav>
```

**Active link rule:** Add class `active` to the `<a>` tag matching the current page.

**CSS (`css/navbar.css`) key rules:**
```css
.navbar {
  position: fixed; top: 0; left: 0; width: 100%;
  z-index: 1000;
  padding: 28px 60px;
  display: flex; justify-content: space-between; align-items: center;
  transition: var(--transition);
}
.navbar.scrolled {
  padding: 16px 60px;
  background: rgba(5, 5, 8, 0.88);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--glass-border);
}
.nav-logo {
  font-family: var(--font-display);
  font-size: 1.8rem; letter-spacing: 4px;
  background: linear-gradient(135deg, var(--white), var(--purple-glow));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.nav-logo span { -webkit-text-fill-color: var(--accent); }
.nav-links { display: flex; gap: 44px; align-items: center; list-style: none; }
.nav-links a {
  font-size: 0.75rem; font-weight: 500; letter-spacing: 2.5px;
  text-transform: uppercase; color: var(--muted); position: relative; transition: color 0.3s;
}
.nav-links a::after {
  content: ''; position: absolute; bottom: -4px; left: 0;
  width: 0; height: 1px; background: var(--purple-light); transition: width 0.3s;
}
.nav-links a:hover, .nav-links a.active { color: var(--white); }
.nav-links a:hover::after, .nav-links a.active::after { width: 100%; }
.nav-cta {
  background: linear-gradient(135deg, var(--violet), var(--purple-mid)) !important;
  color: var(--white) !important; padding: 10px 26px; border-radius: 2px;
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.3);
}
.nav-cta::after { display: none !important; }
.hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; padding: 5px; }
.hamburger span { width: 24px; height: 1.5px; background: var(--white); transition: var(--transition); }
.mobile-nav {
  display: none; position: fixed; inset: 0;
  background: rgba(5,5,8,0.97); backdrop-filter: blur(20px);
  z-index: 999; flex-direction: column; align-items: center; justify-content: center; gap: 36px;
}
.mobile-nav.open { display: flex; }
.mobile-nav a { font-family: var(--font-display); font-size: 2.5rem; letter-spacing: 6px; text-transform: uppercase; color: var(--muted); transition: color 0.3s; }
.mobile-nav a:hover { color: var(--white); }
.mobile-nav-close { position: absolute; top: 28px; right: 28px; background: none; border: none; color: var(--muted); font-size: 1.4rem; padding: 10px; transition: color 0.3s; }
```

**JS (`js/main.js` — `initNavbar()` and `initHamburger()`):**
```javascript
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const closeBtn  = document.getElementById('mobile-nav-close');

  hamburger.addEventListener('click', () => {
    mobileNav.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
  });
  closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
  // Close on any link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}
```

### 4.5 Scroll Reveal System (CSS in `animations.css`, JS in `main.js`)

**CSS (`css/animations.css`):**
```css
/* 3D perspective tilt + fade up */
.reveal {
  opacity: 0;
  transform: perspective(1000px) rotateX(12deg) translateY(60px);
  transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
}
.reveal.visible { opacity: 1; transform: perspective(1000px) rotateX(0) translateY(0); }

/* Slide from left */
.reveal-left {
  opacity: 0; transform: translateX(-70px);
  transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
}
.reveal-left.visible { opacity: 1; transform: translateX(0); }

/* Slide from right */
.reveal-right {
  opacity: 0; transform: translateX(70px);
  transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
}
.reveal-right.visible { opacity: 1; transform: translateX(0); }

/* Simple fade up */
.reveal-up {
  opacity: 0; transform: translateY(50px);
  transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
}
.reveal-up.visible { opacity: 1; transform: translateY(0); }

/* Stagger delays */
.delay-1 { transition-delay: 0.1s !important; }
.delay-2 { transition-delay: 0.2s !important; }
.delay-3 { transition-delay: 0.3s !important; }
.delay-4 { transition-delay: 0.4s !important; }
.delay-5 { transition-delay: 0.5s !important; }

/* Respect user motion preferences */
@media (prefers-reduced-motion: reduce) {
  .reveal, .reveal-left, .reveal-right, .reveal-up {
    opacity: 1; transform: none; transition: none;
  }
}
```

**JS (`js/main.js` — `initScrollReveal()`):**
```javascript
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up')
    .forEach(el => observer.observe(el));
}
```

### 4.6 Magnetic Buttons (JS in `main.js`)

```javascript
function initMagnetic() {
  document.querySelectorAll('.btn-primary, .btn-ghost, .nav-cta').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.25}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });
}
```

### 4.7 Footer (CSS in `css/style.css` or `css/cards.css`, HTML in every page)

**HTML (paste before `</body>` on every page):**
```html
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="index.html" class="nav-logo">Iron<span>Peak</span></a>
      <p>A premium fitness sanctuary for those who demand more from themselves and their training environment.</p>
      <div class="footer-socials">
        <a href="#" class="social-link" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="#" class="social-link" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#" class="social-link" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
        <a href="#" class="social-link" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Programs</h4>
      <ul>
        <li><a href="classes.html">HIIT</a></li>
        <li><a href="classes.html">Power Lifting</a></li>
        <li><a href="classes.html">Yoga</a></li>
        <li><a href="classes.html">CrossFit</a></li>
        <li><a href="trainers.html">Personal Training</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="trainers.html">Our Trainers</a></li>
        <li><a href="pricing.html">Membership</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <ul>
        <li><a href="contact.html">14 Iron District</a></li>
        <li><a href="contact.html">hello@ironpeak.com</a></li>
        <li><a href="contact.html">+1 (555) 024 PEAK</a></li>
        <li><a href="contact.html">Mon–Sun: 5AM – 11PM</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 Iron Peak Fitness. All rights reserved.</p>
    <p>Privacy Policy · Terms of Service</p>
  </div>
</footer>
```

### 4.8 Page Hero (inner pages — CSS in `css/hero.css`)

Every inner page (About, Classes, Trainers, Pricing, Contact) uses this same hero structure. Only the text content changes.

```html
<section class="page-hero">
  <div class="page-hero-bg"></div>
  <div class="hero-diagonals">
    <div class="diagonal"></div>
    <div class="diagonal"></div>
    <div class="diagonal"></div>
    <div class="diagonal"></div>
  </div>
  <div class="page-orb page-orb-1"></div>
  <div class="page-orb page-orb-2"></div>
  <div class="hero-bg-text" aria-hidden="true"><!-- PAGE KEYWORD --></div>

  <div class="page-hero-content container">
    <div class="breadcrumb">
      <a href="index.html">Home</a>
      <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
      <span><!-- Page Name --></span>
    </div>
    <h1 class="page-hero-title">
      <span class="line-white"><!-- LINE 1 --></span>
      <span class="line-purple"><!-- LINE 2 --></span>
    </h1>
    <p class="page-hero-sub"><!-- Italic serif subtitle --></p>
  </div>

  <div class="hero-scroll-hint">
    <div class="scroll-dot"></div>
    <span>Scroll to explore</span>
  </div>
</section>
```

**Hero text per page:**
| Page | bg-text | line-white | line-purple | subtitle |
|---|---|---|---|---|
| About | IRON | OUR | STORY | "Born from obsession. Built on discipline." |
| Classes | CLASSES | OUR | CLASSES | "Every discipline. Every level. One obsession." |
| Trainers | TRAINERS | MEET THE | LEGENDS | "World-class coaches. Real results. Zero excuses." |
| Pricing | PRICING | CHOOSE YOUR | PLAN | "No contracts. No excuses. Just results." |
| Contact | CONTACT | GET IN | TOUCH | "A real human will reply within 24 hours." |

### 4.9 CTA Section (bottom of every page — CSS in `css/style.css`)

Every page ends with a CTA section before the footer. Only headline and button text change.

```html
<section class="cta-section">
  <div class="cta-bg"></div>
  <div class="cta-grid-bg"></div>
  <div class="cta-content container reveal">
    <div class="section-label" style="justify-content:center;"><!-- label --></div>
    <h2 class="cta-title">
      <!-- LINE 1 --><br>
      <span><!-- LINE 2 (purple gradient) --></span>
    </h2>
    <p class="cta-sub"><!-- italic serif subtitle --></p>
    <div class="cta-btns">
      <button class="btn-primary"><span><!-- primary CTA --></span></button>
      <a href="#" class="btn-ghost"><!-- secondary CTA --></a>
    </div>
  </div>
</section>
```

---

## 5. CSS FILE BREAKDOWN

### `css/style.css` contains:
- `:root {}` with all CSS custom properties
- `*` reset + `box-sizing: border-box`
- `html { scroll-behavior: smooth; overflow-x: hidden; }`
- `body` base styles + `cursor: none`
- `body::before` noise overlay
- `img`, `a`, `ul` base resets
- `.container` utility (max-width: 1200px, margin: auto, padding: 0 60px)
- Typography scale (h1–h4, p)
- `.btn-primary` and `.btn-ghost`
- `.section-label`
- `.section-title` and `.highlight`
- Footer styles
- CTA section styles

### `css/navbar.css` contains:
- `.navbar` and `.navbar.scrolled`
- `.nav-logo`
- `.nav-links` and `.nav-links a`
- `.nav-cta`
- `.hamburger` and `.hamburger span`
- `.mobile-nav` and `.mobile-nav.open`
- `.mobile-nav-close`

### `css/hero.css` contains:
- Home page `.hero` (full-screen, parallax, orbs, grid)
- Home page `.hero-bg`, `.hero-grid`, `.orb`, `.hero-lines`
- Home page `.hero-content`, `.hero-title`, `.hero-eyebrow`
- Home page `.hero-ctas`, `.hero-scroll`, `.hero-stats`
- Inner page `.page-hero` (70vh, reused across About/Classes/Trainers/Pricing/Contact)
- `.page-hero-bg`, `.hero-diagonals`, `.diagonal`
- `.page-orb`, `.hero-bg-text`
- `.page-hero-content`, `.breadcrumb`
- `.page-hero-title` (`.line-white`, `.line-purple`)
- `.page-hero-sub`, `.hero-scroll-hint`, `.scroll-dot`

### `css/cards.css` contains:
- `.glass-card` (standard glassmorphism card)
- `.feature-card` (home features section)
- `.class-card` (classes section cards)
- `.trainer-card` (trainer profile cards)
- `.team-card` (about page team cards — same as trainer-card)
- `.testimonial-card`
- `.mvv-card` (mission/vision/values)
- `.pricing-card` and `.pricing-card.featured`

### `css/animations.css` contains:
- `#cursor` and `#cursor-ring`
- `#progress-bar`
- `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-up` + `.visible` states
- `.delay-1` through `.delay-5`
- `.orb` keyframes (`orbFloat`)
- `.diagonal` keyframes (`diagFade`)
- `.marquee-track` keyframes (`marquee`)
- `.hero-grid` keyframes (`gridScroll`)
- Hero entrance keyframes: `fadeUp`, `titleReveal`
- `prefers-reduced-motion` override

### `css/responsive.css` contains:
- `@media (max-width: 1024px)` — shared grid changes
- `@media (max-width: 768px)` — hamburger nav, hide desktop nav, 1-column layouts
- `@media (max-width: 480px)` — reduced padding, stacked buttons

### `css/pages/home.css` contains:
- Marquee strip styles
- Features grid (4-column → 2-col → 1-col)
- Classes preview section
- Quick stats section
- Testimonials carousel
- Home CTA banner

### `css/pages/about.css` contains:
- Story section (2-column split)
- Story visual cards (`.story-card-main`, `.story-card-sub`, `.story-badge`)
- Counters section
- Timeline section + `.timeline-item` alternating layout
- MVV section cards
- Values strip (6-column grid)
- Team grid

### `css/pages/classes.css` contains:
- Tab filter buttons row
- Class cards grid (3-column)
- Weekly schedule table + horizontal scroll wrapper
- Parallax quote strip
- BMI/stats callout banner

### `css/pages/trainers.css` contains:
- Stats bar (below hero)
- Filter buttons row
- Trainer grid (4-column)
- Spotlight section (2-column cinematic)
- Philosophy quotes section
- Booking banner strip
- Modal overlay + modal content

### `css/pages/pricing.css` contains:
- Billing toggle (pill switch)
- Pricing cards grid (3-column, featured elevated)
- Comparison table (sticky first column)
- BMI Calculator (2-column layout, form, result, progress bar)
- FAQ accordion

### `css/pages/contact.css` contains:
- Info cards row (4-column)
- Main contact 2-column layout
- Contact form (glass card, inputs, select, textarea, success state)
- Right info stack cards
- Map placeholder (grid bg, pulsing pin, ripple rings)
- Opening hours table
- Mini FAQ

### `css/pages/auth.css` contains:
- Full-viewport split layout (left 40% / right 60%)
- Left panel: brand, orbs, diagonals, benefit points, member badge, floating stat badges
- Right panel: tab switcher, form area
- Login form + Register form (slide transition between)
- Input styles (dark, purple focus glow)
- Password strength bar (4 segments)
- Custom checkbox styling
- Social login buttons
- Forgot password panel
- Success screen (SVG checkmark animation)

---

## 6. JAVASCRIPT FILE BREAKDOWN

### `js/main.js` — runs on EVERY page
```
initCursor()        — custom cursor dot + lagging ring (requestAnimationFrame)
initProgressBar()   — scroll width update
initNavbar()        — add/remove .scrolled on scroll
initHamburger()     — open/close mobile nav + aria-expanded
initScrollReveal()  — IntersectionObserver for all .reveal variants
initMagnetic()      — magnetic pull on .btn-primary, .btn-ghost, .nav-cta

// DOMContentLoaded calls all of the above:
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initProgressBar();
  initNavbar();
  initHamburger();
  initScrollReveal();
  initMagnetic();
});
```

### `js/counter.js` — used on: Home (hero stats), About (counters section), Trainers (stats bar)
```
animateCounter(el, target)  — setInterval, counts from 0 to target, formats 1000+ as "1.0K+"
initCounters()              — IntersectionObserver on all [data-target] elements, threshold 0.4, fires once
```

**HTML usage:** `<span class="counter-num" data-target="2400">0</span>`

### `js/tabs.js` — used on: Classes page
```
initTabs()
  — querySelectorAll('.tab-btn') and '.class-card'
  — on tab click: remove .active from all tabs, add to clicked
  — filter cards by data-category attribute
  — animate out: opacity 0 + translateY(20px) + pointer-events none
  — animate in: opacity 1 + translateY(0) after short delay
  — "All" tab shows all cards
```

**HTML usage:** 
```html
<button class="tab-btn active" data-filter="all">All</button>
<article class="class-card" data-category="hiit">...</article>
```

### `js/filter.js` — used on: Trainers page
```
initFilter()
  — same logic as tabs.js but for trainer cards
  — data-specialty attribute on cards
  — filter buttons have data-filter attribute
```

### `js/modal.js` — used on: Trainers page
```
initModal()
  openModal(trainerData)  — populate modal, show overlay, trap focus, aria-modal
  closeModal()            — hide overlay, return focus to trigger
  trapFocus(modal)        — cycle Tab key only within modal elements
  — closes on: X button, backdrop click, Escape key
  — aria: role="dialog", aria-modal="true", aria-labelledby
```

### `js/slider.js` — used on: Home page (testimonials)
```
initSlider()
  showSlide(index)    — remove/add .active class
  nextSlide()
  prevSlide()
  — auto-play: setInterval 5000ms
  — manual prev/next buttons
```

### `js/accordion.js` — used on: Pricing page (FAQ), Contact page (mini FAQ)
```
initAccordion()
  — querySelectorAll('.accordion-item')
  — on button click: check isOpen, close ALL items (maxHeight null, aria-expanded false)
  — if was closed: open clicked (maxHeight = scrollHeight + 'px', aria-expanded true, rotate chevron)
  — chevron: .accordion-btn i rotates 180deg when open
```

**HTML structure:**
```html
<div class="accordion-item">
  <button class="accordion-btn" aria-expanded="false">
    Question text <i class="fa-solid fa-chevron-down"></i>
  </button>
  <div class="accordion-answer">
    <p>Answer text</p>
  </div>
</div>
```

### `js/bmi.js` — used on: Pricing page
```
calculateBMI()
  — parse height (cm) and weight (kg) from inputs
  — validate: not empty, > 0
  — formula: bmi = weight / (height/100)²
  — categories + colors:
      < 18.5  → Underweight  → #3498db
      < 25.0  → Normal       → var(--purple-light)
      < 30.0  → Overweight   → #f39c12
      ≥ 30.0  → Obese        → #e74c3c
  — display: BMI number (large display font, colored), category label
  — progress bar: width = (bmi/40)*100%, clamped at 100%, gradient matches color
  — result animates in: opacity 0 → 1, scale 0.9 → 1
  — error: red border on invalid inputs + error message role="alert"

initBMI()
  — attach submit event to #bmi-form
```

### `js/form.js` — used on: Contact page
```
initForm()
validateField(field)    — blur handler, check rules, show/hide error
showError(id, msg)      — set error text, red border
clearError(id)          — remove error styling
showSuccess()           — animate form out (opacity 0 + translateY(-20px)), success screen in
initCharCounter()       — live count on textarea: "0 / 500"

Validation rules:
  Full Name: required, min 2 chars
  Email: required, regex /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  Phone: optional, skip if empty
  Subject: required (select)
  Message: required, min 20 chars

Success: form slides up, success message slides in with purple checkmark icon
```

### `js/schedule.js` — used on: Contact page
```
initHoursHighlight()
  — const day = new Date().getDay()  (0=Sun, 1=Mon ... 6=Sat)
  — highlight matching row in hours table with purple border + --purple-light text
  — check current hour: if between open hour (5) and close hour (23), show "Open Now" badge
  — else show "Closed" badge
```

### `js/billing.js` — used on: Pricing page
```
initBillingToggle()
  — toggle between monthly/annual on pill switch click
  — price data stored as data attributes: data-monthly="49" data-annual="39"
  — on toggle: fade price out (opacity 0), update text, fade back in
  — show/hide "Save 20%" badge on featured card
  — update period text: "Per Month" / "Per Month (Billed Annually)"
```

### `js/auth.js` — used on: Auth page only
```
initTabSwitch()        — slide login/register forms in/out, update URL hash
initPasswordToggle()   — show/hide password on eye icon click (for all password fields)
initPasswordStrength() — real-time 4-segment bar: length≥8, uppercase, number, special char
initFormValidation()   — blur validation on all fields, enable/disable submit button
initLoginSubmit()      — loading spinner (1.5s) → redirect simulation
initRegisterSubmit()   — loading spinner (1.5s) → success screen with plan summary
initForgotPassword()   — slide in forgot-password panel, back arrow returns to login
initOrbs()             — left panel orbs follow mouse slightly (parallax on mousemove)
checkHash()            — read #login or #register on page load, show correct tab
```

---

## 7. HTML FILE RULES

### Base HTML Template (every page)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="[UNIQUE PAGE DESCRIPTION]">
  <meta property="og:title" content="Iron Peak Fitness | [Page Name]">
  <meta property="og:description" content="[UNIQUE PAGE DESCRIPTION]">
  <meta property="og:image" content="images/og-image.jpg">
  <link rel="canonical" href="https://yoursite.com/[page].html">
  <title>Iron Peak Fitness | [Page Name]</title>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=Space+Grotesk:wght@300;400;500&display=swap" rel="stylesheet">

  <!-- Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

  <!-- CSS (always in this order) -->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/navbar.css">
  <link rel="stylesheet" href="css/hero.css">
  <link rel="stylesheet" href="css/cards.css">
  <link rel="stylesheet" href="css/animations.css">
  <link rel="stylesheet" href="css/responsive.css">
  <link rel="stylesheet" href="css/pages/[pagename].css">
</head>
<body>

  <!-- Cursor -->
  <div id="cursor"></div>
  <div id="cursor-ring"></div>

  <!-- Progress bar -->
  <div id="progress-bar"></div>

  <!-- Skip link (accessibility) -->
  <a class="skip-link" href="#main">Skip to content</a>

  <!-- Navbar -->
  <header>
    <nav class="navbar" id="navbar" ...>...</nav>
  </header>

  <!-- Mobile nav overlay -->
  <nav class="mobile-nav" id="mobile-nav" ...>...</nav>

  <!-- Main content -->
  <main id="main">
    <!-- PAGE SECTIONS HERE -->
  </main>

  <!-- Footer -->
  <footer>...</footer>

  <!-- JS (always in this order) -->
  <script src="js/main.js"></script>
  <!-- Page-specific scripts below -->
</body>
</html>
```

### Semantic Elements Rule
| Element | Use for |
|---|---|
| `<header>` | Navbar wrapper only |
| `<nav>` | Navigation links |
| `<main>` | All page content (one per page) |
| `<section>` | Each content section |
| `<article>` | Individual cards (class, trainer, testimonial) |
| `<aside>` | Sidebar info (contact details) |
| `<figure>` + `<figcaption>` | Gallery images |
| `<footer>` | Site footer |
| `<form>` | Contact form, BMI form |
| `<details>` + `<summary>` | Native FAQ (alternative to JS accordion) |
| `<table>` | Weekly class schedule ONLY |
| `<button>` | All interactive triggers |

**Never use `<div>` where a semantic element fits.**

---

## 8. PAGE 1 — index.html (Home)

**Active nav link:** none (or "Home" if added)
**Page-specific CSS:** `css/pages/home.css`
**Page-specific JS:** `js/counter.js`, `js/slider.js`

### Sections (in order):
1. **Hero** — full-screen (100vh), animated 3D grid, floating orbs (3), vertical light lines (4), hero content center-aligned, stats bar pinned to bottom
2. **Marquee strip** — infinite scroll marquee with 8 disciplines
3. **Features / Why Choose Us** — 4-column card grid (1px gap trick), dark `--deep` bg
4. **Classes Preview** — 3-column full-bleed cards (480px tall each), `--black` bg
5. **Parallax Quote** — full-width, `--purple-dark` bg, diagonal stripe pattern
6. **Trainers Preview** — 4-column grid, `--deep` bg (same cards as trainers page)
7. **Pricing Preview** — 3 pricing cards, `--black` bg
8. **Testimonials** — auto-scrolling horizontal carousel, `--deep` bg
9. **CTA** — radial glow + grid bg, `--black` bg
10. **Footer**

### Hero Specific Details:
- `background-attachment: fixed` for parallax (disabled on mobile)
- Entrance animations all use `animation:` (not scroll reveal) since they fire on load:
  - eyebrow: `fadeUp 1s 0.3s forwards`
  - title: `titleReveal 1.2s 0.5s forwards`
  - subtitle: `fadeUp 1s 0.9s forwards`
  - CTAs: `fadeUp 1s 1.1s forwards`
  - stats bar: `fadeUp 1s 1.3s forwards`
  - scroll indicator: `fadeUp 1s 1.5s forwards`
- Stats bar: 4 cells with `.stat-num[data-target]` for counter animation
- Orbs: 3 `.orb` divs that move on scroll via JS parallax

### Home Hero HTML Structure:
```html
<section class="hero" id="hero">
  <div class="hero-bg"></div>
  <div class="hero-grid"></div>
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="orb orb-3"></div>
  <div class="hero-lines">
    <div class="hero-line"></div>
    <div class="hero-line"></div>
    <div class="hero-line"></div>
    <div class="hero-line"></div>
  </div>
  <div class="hero-content">
    <div class="hero-eyebrow"><span>Premium Fitness</span></div>
    <h1 class="hero-title">
      <span class="line1">Iron</span>
      <span class="line2">Peak</span>
    </h1>
    <p class="hero-subtitle">Where legends are forged. Where limits are shattered.</p>
    <div class="hero-ctas">
      <button class="btn-primary"><span>Start Your Journey</span></button>
      <button class="btn-ghost">Explore Classes</button>
    </div>
  </div>
  <div class="hero-scroll">
    <div class="scroll-line"></div>
    <span>Scroll</span>
  </div>
  <div class="hero-stats">
    <div class="hero-stat">
      <div class="stat-num" data-target="2400">0+</div>
      <div class="stat-label">Active Members</div>
    </div>
    <div class="hero-stat">
      <div class="stat-num" data-target="28">0</div>
      <div class="stat-label">Elite Trainers</div>
    </div>
    <div class="hero-stat">
      <div class="stat-num" data-target="45">0</div>
      <div class="stat-label">Weekly Classes</div>
    </div>
    <div class="hero-stat">
      <div class="stat-num" data-target="12">0</div>
      <div class="stat-label">Years of Excellence</div>
    </div>
  </div>
</section>
```

---

## 9. PAGE 2 — about.html (About)

**Active nav link:** `about.html`
**Page-specific CSS:** `css/pages/about.css`
**Page-specific JS:** `js/counter.js`

### Sections (in order):
1. **Page Hero** — ghost text "IRON", title "OUR / STORY"
2. **Story Section** — 2-column: text left (lead quote + 3 paragraphs + CTAs), visual right (2 stacked cards + floating badge + corner brackets)
3. **Counters Strip** — `--purple-dark` bg, 4 cells: 2400+ Members, 28 Trainers, 45 Classes, 12 Years
4. **Timeline** — alternating left/right, 6 milestones (2013, 2015, 2017, 2019, 2021, 2025), center vertical line, animated dots
5. **Mission / Vision / Values** — 3-column card grid (1px gap), `--deep` bg, bottom accent line reveal on hover
6. **Values Pillars** — 6-column icon grid: Intensity, Integrity, Community, Mindset, Excellence, Growth
7. **Team Section** — 4-column card grid, same as trainers page cards but with expand-bio on hover
8. **CTA** — "Your Story / Starts Here."
9. **Footer**

### Timeline milestones data:
```
2013 — "The First Iron" — opened 1,200 sq ft warehouse, 40 members week one
2015 — "First Expansion" — tripled space, yoga studio, Aria joins, 300 members
2017 — "The CrossFit Era" — Zara Knox joins, Regional Games competitor, 800 members
2019 — "Recovery Suite Opens" — cold plunge, infrared sauna, cryotherapy, first in city
2021 — "Through the Storm" — pandemic, virtual coaching, 1,500 members, zero lost
2025 — "The Peak" — 3 locations, 2,400+ members, 28 trainers, AI tracking
```

---

## 10. PAGE 3 — classes.html (Classes)

**Active nav link:** `classes.html`
**Page-specific CSS:** `css/pages/classes.css`
**Page-specific JS:** `js/tabs.js`

### Sections (in order):
1. **Page Hero** — ghost text "CLASSES", title "OUR / CLASSES"
2. **Filter Tab Buttons** — All / Cardio / Strength / Yoga / HIIT / CrossFit (centered row)
3. **Class Cards Grid** — 3-column, 6+ cards with data-category attribute
4. **Weekly Schedule Table** — 7 days × 7 time slots, horizontal scroll on mobile
5. **Parallax Quote Strip** — `--purple-dark` bg
6. **BMI Callout Banner** — promote pricing page BMI calculator
7. **CTA** — "Find Your / Class."
8. **Footer**

### Class cards data (6 classes minimum):
```
HIIT         — data-category="hiit"     — 45 min, 800 kcal, Advanced
Power Lift   — data-category="strength" — 60 min, 550 kcal, All Levels
Zen Yoga     — data-category="yoga"     — 75 min, 300 kcal, Beginner
CrossFit WOD — data-category="crossfit" — 50 min, 700 kcal, Intermediate
Cardio Burn  — data-category="cardio"   — 40 min, 600 kcal, All Levels
Recovery Flow— data-category="yoga"     — 60 min, 200 kcal, Beginner
```

### Weekly Schedule table structure:
- Columns: Time | Mon | Tue | Wed | Thu | Fri | Sat | Sun
- Time slots: 6:00 AM, 8:00 AM, 10:00 AM, 12:00 PM, 4:00 PM, 6:00 PM, 8:00 PM
- Filled cell contains: class name + trainer name
- Color-coded by category using border-left or background tint
- Empty cells: subtle dashed border

---

## 11. PAGE 4 — trainers.html (Trainers)

**Active nav link:** `trainers.html`
**Page-specific CSS:** `css/pages/trainers.css`
**Page-specific JS:** `js/filter.js`, `js/modal.js`, `js/counter.js`

### Sections (in order):
1. **Page Hero** — ghost text "TRAINERS", title "MEET THE / LEGENDS"
2. **Stats Bar** — below hero, 4 stats: 28 Trainers, 6 Specializations, 1,200+ Transformations, 4.9★ Avg Rating
3. **Filter Buttons** — All / Strength / Yoga / HIIT / CrossFit / Nutrition / Combat
4. **Trainer Cards Grid** — 4-column, 8 cards
5. **Spotlight Section** — Marcus Cole featured, 2-column cinematic layout
6. **Trainer Philosophy** — 3 quote cards (glass), `--black` bg
7. **Booking Banner** — horizontal CTA strip
8. **CTA** — "Train With / The Best."
9. **Footer**

### 8 Trainer data:
```
1. Marcus Cole    — Strength & Power   — 8 yrs  — 240+ — 4.9★ — Co-Founder, Head Trainer
2. Aria Sharma    — Yoga & Mindfulness — 10 yrs — 180+ — 5.0★ — Head Yoga Coach
3. Zara Knox      — CrossFit & HIIT    — 5 yrs  — 210+ — 4.8★ — CrossFit Lead
4. Leon Voss      — Nutrition          — 7 yrs  — 155+ — 4.9★ — Co-Founder, Nutrition Lead
5. Damon Pierce   — Combat Sports      — 6 yrs  — 130+ — 4.7★ — MMA & Boxing Coach
6. Selena Park    — HIIT & Cardio      — 4 yrs  — 175+ — 4.8★ — Cardio Specialist
7. Rhys Calloway  — Strength           — 9 yrs  — 200+ — 4.9★ — Powerlifting Coach
8. Nadia Osei     — Yoga & Recovery    — 6 yrs  — 160+ — 5.0★ — Wellness Expert
```

### Specialty → Filter mapping:
```
Strength  → Marcus Cole, Rhys Calloway
Yoga      → Aria Sharma, Nadia Osei
HIIT      → Zara Knox, Selena Park
CrossFit  → Zara Knox
Nutrition → Leon Voss
Combat    → Damon Pierce
```

### Modal data attributes:
```html
<article class="trainer-card" 
  data-specialty="strength"
  data-name="Marcus Cole"
  data-role="Head Trainer & Co-Founder"
  data-specialty-label="Strength & Power"
  data-experience="8 years"
  data-clients="240+"
  data-rating="4.9"
  data-bio="Full bio text here...">
```

---

## 12. PAGE 5 — pricing.html (Pricing)

**Active nav link:** `pricing.html`
**Page-specific CSS:** `css/pages/pricing.css`
**Page-specific JS:** `js/billing.js`, `js/bmi.js`, `js/accordion.js`

### Sections (in order):
1. **Page Hero** — ghost text "PRICING", title "CHOOSE YOUR / PLAN"
2. **Billing Toggle** — Monthly / Annual pill switch
3. **Pricing Cards** — 3 cards (Essential, Elite featured, Legend), 1px gap trick
4. **Feature Comparison Table** — rows = features, columns = plans
5. **BMI Calculator** — 2-column: description left, glass form card right
6. **FAQ Accordion** — 8 questions, `--deep` bg
7. **Testimonial Strip** — 3 cards, `--black` bg
8. **CTA** — "Start Today. / No Excuses."
9. **Footer**

### Pricing data:
```
Essential: $49/mo ($39/mo annual) — Basic access, 2 classes/week
Elite:     $99/mo ($79/mo annual) — 24/7, unlimited classes, 4 PT sessions (FEATURED)
Legend:    $179/mo ($143/mo annual) — Everything + unlimited PT + nutrition
```

### Price data attributes:
```html
<div class="plan-price" data-monthly="49" data-annual="39"><sup>$</sup><span class="price-val">49</span></div>
```

### FAQ questions:
```
1. Is there a joining fee?
2. Can I freeze my membership?
3. What's included in the recovery suite?
4. Do you offer student or corporate discounts?
5. How do I book a personal training session?
6. Can I switch plans at any time?
7. Is there a free trial available?
8. What are your opening hours?
```

---

## 13. PAGE 6 — contact.html (Contact)

**Active nav link:** `auth.html` nav-cta (Join Now — closest match)
**Page-specific CSS:** `css/pages/contact.css`
**Page-specific JS:** `js/form.js`, `js/schedule.js`, `js/accordion.js`

### Sections (in order):
1. **Page Hero** — ghost text "CONTACT", title "GET IN / TOUCH"
2. **Info Cards Row** — 4 glass cards: Location, Phone, Email, Hours
3. **Main Contact** — 2-column: form left (60%), info stack right (40%)
4. **Map Section** — placeholder with pulsing map pin + ripple rings
5. **Opening Hours** — 2-column: description + styled hours table (today highlighted)
6. **Mini FAQ** — 4 questions accordion, `--black` bg
7. **CTA** — "Come See / Iron Peak."
8. **Footer**

### Contact form fields:
```
Full Name     — text, required
Email Address — email, required
Phone Number  — tel, optional
Subject       — select: General / Membership / Personal Training / Classes / Feedback / Other
Message       — textarea, required, min 20 chars, 500 char limit with counter
```

### Info cards data:
```
Location: fa-location-dot — "14 Iron District, City Center"
Phone:    fa-phone        — "+1 (555) 024 PEAK"
Email:    fa-envelope     — "hello@ironpeak.com"
Hours:    fa-clock        — "Mon–Sun: 5AM – 11PM"
```

### Opening hours data:
```
Monday:    5:00 AM – 11:00 PM
Tuesday:   5:00 AM – 11:00 PM
Wednesday: 5:00 AM – 11:00 PM
Thursday:  5:00 AM – 11:00 PM
Friday:    5:00 AM – 11:00 PM
Saturday:  6:00 AM – 10:00 PM
Sunday:    7:00 AM – 9:00 PM
```

### Mini FAQ questions:
```
1. How do I book a free tour?
2. Can I visit before joining?
3. Do you offer corporate memberships?
4. How quickly will you respond to my message?
```

---

## 14. PAGE 7 — auth.html (Login / Register)

**Active nav link:** `nav-cta` "Join Now"
**Page-specific CSS:** `css/pages/auth.css`
**Page-specific JS:** `js/auth.js`
**Note:** No shared navbar links — minimal navbar (logo + "Back to Site" only). No footer needed.

### Layout:
- Full viewport height, no scroll on desktop
- Left panel 40%: brand/cinematic side
- Right panel 60%: auth forms
- Mobile: left panel hidden, right panel full width, logo shown above form

### Left Panel content:
- Logo top-left
- 3 floating orbs (slow float animation)
- Animated diagonal lines
- CSS grid-line background
- Center: heading "FORGE YOUR / LEGEND" + italic serif subtitle + 3 benefit points
- Member count badge (glass, floating, `badgeFloat` animation): "2,400+ Active Members" + 4 avatar circles
- Bottom text: "Trusted by champions since 2013"
- Ghost background text: "IRON" huge, opacity 0.03, bottom of panel
- 2 floating stat badge cards:
  - "★ 4.9 / 5.0 — Member Rating"
  - "🏆 #1 Gym in the City"

### Right Panel — Tab Switcher:
```html
<div class="auth-tabs">
  <button class="auth-tab active" data-form="login">Sign In</button>
  <button class="auth-tab" data-form="register">Create Account</button>
</div>
```

### Login Form:
```
Title: "Welcome Back" (highlight on "Back")
Subtitle: italic serif "Pick up where you left off."
Fields: Email, Password (+ show/hide toggle)
Options row: Remember me checkbox | Forgot Password? link
Submit: full-width "Sign In →"
Divider: "or continue with"
Social: Google button | Apple button (side by side)
Bottom: "Don't have an account? Create one" (switches tab)
```

### Register Form:
```
Title: "Join the Legend" (highlight on "Legend")
Fields: Full Name, Email, Phone (optional), Password (+ strength meter), Confirm Password, Membership Plan (select)
Password strength: 4-segment bar (red→amber→purple→green)
Terms: custom checkbox with link
Submit: full-width "Create My Account ✦"
Divider + social buttons
Bottom: "Already a member? Sign in"
```

### Forgot Password State:
```
Back arrow link
Title: "Reset Password"
Field: Email only
Submit: "Send Reset Link"
Success state: "Check your email" + envelope icon
```

### Success Screen (after register):
```
SVG checkmark animation (stroke-dasharray draw-on)
"YOU'RE IN." (display font)
"Welcome to Iron Peak. Your journey begins now."
Plan summary glass card (chosen plan + price)
Button: "Go to My Dashboard" → links to index.html
```

### Password Strength Logic:
```javascript
function getStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score; // 0-4
}
// Labels: ['Too Short', 'Weak', 'Fair', 'Strong', 'Very Strong']
// Colors: ['', '#e74c3c', '#f39c12', var(--purple-light), '#22c55e']
```

---

## 15. RESPONSIVE BREAKPOINTS

All shared breakpoints live in `css/responsive.css`. Page-specific overrides live in `css/pages/[page].css`.

```css
/* ── Tablet: ≤1024px ── */
@media (max-width: 1024px) {
  .container { padding: 0 40px; }
  /* 4-col grids → 2-col */
  .features-grid { grid-template-columns: repeat(2, 1fr); }
  .trainers-grid { grid-template-columns: repeat(2, 1fr); }
  .team-grid     { grid-template-columns: repeat(2, 1fr); }
  .footer-grid   { grid-template-columns: 1fr 1fr; gap: 40px; }
  /* Pricing featured card loses elevation */
  .pricing-card.featured { transform: none; }
  /* Story section stacks */
  .story-grid { grid-template-columns: 1fr; }
}

/* ── Mobile: ≤768px ── */
@media (max-width: 768px) {
  .navbar { padding: 20px 24px; }
  .navbar.scrolled { padding: 14px 24px; }
  .nav-links { display: none; }
  .hamburger { display: flex; }
  .container { padding: 0 24px; }
  .page-hero { min-height: 55vh; }
  .hero-stats { display: none; }
  .hero-scroll-hint { display: none; }
  section { padding: 80px 0; }
  /* 3-col grids → 1-col */
  .classes-grid  { grid-template-columns: 1fr; }
  .pricing-grid  { grid-template-columns: 1fr; }
  .mvv-grid      { grid-template-columns: 1fr; }
  /* Story split stacks */
  .story-grid { gap: 40px; }
  /* Timeline → left-aligned */
  .timeline::before { left: 20px; }
  .timeline-item { grid-template-columns: 40px 1fr; }
  /* All CTAs stack */
  .cta-btns { flex-direction: column; align-items: center; }
  /* Auth: left panel hidden */
  .auth-left { display: none; }
  .auth-right { width: 100%; }
  /* Contact: main stacks */
  .contact-main { grid-template-columns: 1fr; }
  /* Footer stacks */
  .footer-grid { grid-template-columns: 1fr; }
}

/* ── Small mobile: ≤480px ── */
@media (max-width: 480px) {
  .hero-title { font-size: clamp(3.5rem, 18vw, 8rem); }
  .values-row { grid-template-columns: repeat(2, 1fr); }
  .counters-grid { grid-template-columns: 1fr; }
  .auth-tabs button { font-size: 0.65rem; padding: 12px 20px; }
  .social-btns { flex-direction: column; }
}
```

---

## 16. ACCESSIBILITY RULES

Every page must comply with WCAG 2.1 Level AA.

| Rule | Implementation |
|---|---|
| One `<h1>` per page | Hero title is always the only H1 |
| Heading hierarchy | H1 → H2 (sections) → H3 (cards) → H4 (footer cols) |
| All images | `alt=""` for decorative, descriptive for content images |
| All icon-only buttons | `aria-label="..."` on the button |
| All Font Awesome icons | `aria-hidden="true"` on `<i>` tags |
| Form inputs | `<label for="id">` + matching `id` on each input |
| Error messages | `role="alert"` so screen readers announce them |
| Accordion buttons | `aria-expanded="true/false"` updated by JS |
| Modal | `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, focus trap |
| Hamburger button | `aria-expanded="true/false"` updated by JS |
| Skip link | `<a class="skip-link" href="#main">Skip to content</a>` |
| Focus styles | Never `outline: none` — use custom `:focus-visible` purple outline |
| Color contrast | White on dark bg ✓, purple-light on dark bg ✓ (exceeds 4.5:1) |
| Keyboard nav | All interactive elements reachable by Tab |
| Ghost bg text | `aria-hidden="true"` on decorative elements |
| prefers-reduced-motion | All transforms removed, animations disabled |

**Skip link CSS:**
```css
.skip-link {
  position: absolute;
  top: -100px; left: 20px;
  background: var(--purple-light);
  color: var(--black);
  padding: 10px 20px;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: top 0.3s;
  z-index: 99999;
}
.skip-link:focus { top: 20px; }
```

---

## 17. SEO RULES

| Element | Rule |
|---|---|
| `<title>` | Unique per page: "Iron Peak Fitness \| [Page Name]" |
| `<meta description>` | Unique per page, 150–160 chars |
| `<meta og:title>` | Same as title |
| `<meta og:image>` | Always `images/og-image.jpg` |
| `<link canonical>` | Each page links to itself |
| Headings | Semantic hierarchy, one H1 per page |
| Image alt text | Descriptive for all content images |
| Google Fonts | Always `display=swap` |
| Semantic HTML | `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` |

---

## 18. WHAT IS NOT IN THIS PROJECT

These features belong to Project 2 or Project 3. Do not implement:

| Feature | Project |
|---|---|
| Node.js / Express server | Project 2 |
| Real email sending | Project 2 |
| Real user authentication / JWT | Project 2 |
| REST API endpoints | Project 2 |
| MongoDB / MySQL | Project 3 |
| Storing form data | Project 3 |
| Payment processing | Project 3 |
| Admin dashboard | Project 3 |
| React / Vue / Angular | Never in this project |
| Bootstrap / Tailwind CSS | Never in this project |
| jQuery | Never in this project |
| Any CSS or JS framework | Never in this project |

---

## 19. COMMON MISTAKES TO AVOID

| Mistake | Correct Approach |
|---|---|
| `backdrop-filter` not working in Firefox | Add `-webkit-backdrop-filter` prefix + solid fallback background |
| Parallax breaks on iOS | Add `background-attachment: scroll` inside `@media (max-width: 768px)` |
| 3D animations janky on mobile | Use `@media (prefers-reduced-motion: reduce)` to remove transforms |
| Hamburger menu behind hero | `z-index: 999` on `.nav-links`, `z-index: 1000` on `.navbar` |
| BMI shows NaN | Always validate `if (!height || !weight || height <= 0 || weight <= 0)` before calculating |
| Glass card has solid black background | The parent/background must have an image or gradient behind the glass — pure black surfaces won't show blur |
| Table breaks on mobile | Wrap table in `<div class="table-scroll">` with `overflow-x: auto` |
| Font flash (FOUT) | `display=swap` in Google Fonts URL (already in template) |
| Repeating shared CSS in each page | All shared code in shared files only — page CSS only has page-specific rules |
| `cursor: auto` anywhere | `cursor: none !important` on everything — custom cursor handles all |
| Hardcoded color values | Always use CSS variables — never `#a855f7` directly in page CSS |
| `display: none` for filter/tabs | Use `opacity: 0` + `pointer-events: none` + `max-height: 0` for smooth animation |
| Modal without focus trap | `modal.js` must cycle Tab only within modal elements while open |
| Missing `aria-expanded` | Every accordion button and hamburger must update `aria-expanded` via JS |

---

## 20. DATA

### All Trainer Profiles (complete)
```
Name:        Marcus Cole
Role:        Co-Founder & Head Trainer
Specialty:   Strength & Power
Experience:  8 years
Clients:     240+
Rating:      4.9★
Bio:         Olympic-level powerlifter turned coach. Marcus built Iron Peak from the ground up
             and still trains clients personally every day. His programming is brutal, precise,
             and transformative.
Achievements: National Powerlifting Champion 2018, NSCA Certified Strength Coach,
              Iron Peak Co-Founder 2013, 200+ client transformations
Filter:      strength

Name:        Aria Sharma
Role:        Head Yoga & Wellness Coach
Specialty:   Yoga & Mindfulness
Experience:  10 years
Clients:     180+
Rating:      5.0★
Bio:         Trained in Rishikesh, India. Aria brings ancient wisdom and modern science
             together in sessions that transform body and mind. Her 5.0 rating is unbroken.
Achievements: 500-Hour Yoga Alliance Certification, Mindfulness-Based Stress Reduction,
              10 years teaching internationally, 180+ members coached
Filter:      yoga

Name:        Zara Knox
Role:        CrossFit Lead & HIIT Specialist
Specialty:   CrossFit & HIIT
Experience:  5 years
Clients:     210+
Rating:      4.8★
Bio:         Regional CrossFit champion who turned her competitive edge into coaching excellence.
             Her classes are legendary — and not for the faint of heart.
Achievements: Regional CrossFit Games Competitor 2020, CF-L2 Certified, HIIT Specialist,
              Led Iron Peak to regional recognition
Filter:      crossfit, hiit

Name:        Leon Voss
Role:        Co-Founder & Nutrition Lead
Specialty:   Nutrition & Recovery
Experience:  7 years
Clients:     155+
Rating:      4.9★
Bio:         Sports nutritionist and Iron Peak co-founder. Leon's approach to fuelling and
             recovery has helped hundreds of members break through their plateaus.
Achievements: MSc Sports Nutrition, Iron Peak Co-Founder 2013, 155+ nutrition plans,
              Recovery Suite designer
Filter:      nutrition

Name:        Damon Pierce
Role:        Combat Sports Coach
Specialty:   MMA & Boxing
Experience:  6 years
Clients:     130+
Rating:      4.7★
Bio:         Former professional MMA fighter with a decade in the cage. Damon teaches
             technique, discipline, and the warrior mindset that carries into everyday life.
Achievements: Pro MMA Record 14-3, Boxing Certified Coach, Combat Conditioning Expert
Filter:      combat

Name:        Selena Park
Role:        Cardio & HIIT Specialist
Specialty:   HIIT & Cardio
Experience:  4 years
Clients:     175+
Rating:      4.8★
Bio:         High-energy cardio specialist who makes every session feel like a party — until
             the burn sets in. Selena's classes are consistently Iron Peak's most booked.
Achievements: ACE Certified, HIIT Level 2, Group Fitness Instructor of the Year 2023
Filter:      hiit, cardio

Name:        Rhys Calloway
Role:        Powerlifting Coach
Specialty:   Strength
Experience:  9 years
Clients:     200+
Rating:      4.9★
Bio:         Nine years of competitive powerlifting experience translated into elite coaching.
             Rhys specializes in progressive overload, form correction, and breaking PRs.
Achievements: British Powerlifting Champion 2019, IPF Certified Coach, 200+ PRs broken
Filter:      strength

Name:        Nadia Osei
Role:        Wellness & Recovery Expert
Specialty:   Yoga & Recovery
Experience:  6 years
Clients:     160+
Rating:      5.0★
Bio:         Nadia blends therapeutic yoga, breathwork, and recovery science into sessions
             that leave you feeling rebuilt. Her restorative classes are a hidden gem.
Achievements: 300-Hour Yin Yoga Certification, Sports Recovery Specialist, Breathwork Instructor
Filter:      yoga
```

### Membership Plans (complete)
```
ESSENTIAL — $49/mo ($39/mo annual, save 20%)
Included:
  ✓ Gym Floor Access
  ✓ Locker Rooms
  ✓ 2 Group Classes / Week
  ✗ Personal Trainer
  ✗ Recovery Suite
  ✗ Nutrition Coaching
  ✗ Guest Passes
  ✗ Priority Booking
  ✗ 24/7 Access

ELITE — $99/mo ($79/mo annual, save 20%) [FEATURED / MOST POPULAR]
Included:
  ✓ Full Gym 24/7 Access
  ✓ Luxury Locker Rooms
  ✓ Unlimited Group Classes
  ✓ 4 PT Sessions / Month
  ✓ Recovery Suite Access
  ✗ Nutrition Coaching
  ✗ Guest Passes x4/mo
  ✗ Priority Booking

LEGEND — $179/mo ($143/mo annual, save 20%)
Included:
  ✓ Everything in Elite
  ✓ Unlimited PT Sessions
  ✓ Full Recovery Suite
  ✓ Personalized Nutrition Plan
  ✓ Priority Class Booking
  ✓ Guest Passes x4 / Month
  ✓ Dedicated Account Manager
  ✓ Monthly Body Composition Scan
```

### Classes (complete)
```
HIIT          — category: hiit      — 45 min — 800 kcal — Advanced  — Zara Knox
Power Lift    — category: strength  — 60 min — 550 kcal — All Levels — Marcus Cole
Zen Yoga      — category: yoga      — 75 min — 300 kcal — Beginner  — Aria Sharma
CrossFit WOD  — category: crossfit  — 50 min — 700 kcal — Intermediate — Zara Knox
Cardio Burn   — category: cardio    — 40 min — 600 kcal — All Levels — Selena Park
Recovery Flow — category: yoga      — 60 min — 200 kcal — Beginner  — Nadia Osei
Combat Fit    — category: hiit      — 45 min — 650 kcal — Intermediate — Damon Pierce
Olympic Lift  — category: strength  — 60 min — 500 kcal — Advanced  — Rhys Calloway
```

### Gym Info
```
Name:    Iron Peak Fitness
Founded: 2013
Address: 14 Iron District, City Center
Phone:   +1 (555) 024 PEAK
Email:   hello@ironpeak.com
Hours:   Mon–Fri: 5:00 AM – 11:00 PM
         Sat: 6:00 AM – 10:00 PM
         Sun: 7:00 AM – 9:00 PM
Socials: Instagram: @ironpeakfitness
         Facebook: /ironpeakfitness
         TikTok: @ironpeak
         YouTube: Iron Peak Fitness
Members: 2,400+
Trainers: 28
Locations: 3
Classes/week: 45
```

---

*End of Iron Peak Fitness — Complete Copilot Documentation*
*Version: 1.0 | Project 1 — Frontend Interface | Full Stack Development 2025*
*All decisions documented. All data included. All rules specified.*
*Copilot: read this fully before writing any code.*
