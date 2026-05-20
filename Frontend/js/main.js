function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  if (!cursor || !ring) {
    return;
  }

  let cx = 0;
  let cy = 0;
  let rx = 0;
  let ry = 0;

  document.addEventListener('mousemove', (e) => {
    cx = e.clientX;
    cy = e.clientY;
    cursor.style.left = cx + 'px';
    cursor.style.top = cy + 'px';
  });

  function animateRing() {
    rx += (cx - rx) * 0.12;
    ry += (cy - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }

  animateRing();
}

function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  if (!bar) {
    return;
  }
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (scrolled / total) * 100 + '%';
  });
}

function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) {
    return;
  }
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const closeBtn = document.getElementById('mobile-nav-close');
  if (!hamburger || !mobileNav || !closeBtn) {
    return;
  }

  hamburger.addEventListener('click', () => {
    mobileNav.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
  });

  closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

function initScrollReveal() {
  const items = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up');
  if (!items.length) {
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );

  items.forEach((el) => observer.observe(el));
}

function initMagnetic() {
  document.querySelectorAll('.btn-primary, .btn-ghost, .nav-cta').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.25}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

function initHeroParallax() {
  const orbs = document.querySelectorAll('.orb');
  const grid = document.querySelector('.hero-grid');
  const pageOrbs = document.querySelectorAll('.page-orb');
  if (!orbs.length && !grid && !pageOrbs.length) {
    return;
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    orbs.forEach((orb, idx) => {
      const speed = 0.08 + idx * 0.04;
      orb.style.transform = `translateY(${scrollY * speed}px)`;
    });
    pageOrbs.forEach((orb, idx) => {
      const speed = 0.06 + idx * 0.03;
      orb.style.transform = `translateY(${scrollY * speed}px)`;
    });
    if (grid) {
      grid.style.backgroundPositionY = scrollY * 0.3 + 'px';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initProgressBar();
  initNavbar();
  initHamburger();
  initScrollReveal();
  initMagnetic();
  initHeroParallax();
});
