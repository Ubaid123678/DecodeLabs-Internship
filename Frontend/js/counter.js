function animateCounter(el, target) {
  let count = 0;
  const increment = Math.max(1, Math.floor(target / 120));
  const suffix = el.dataset.suffix || '';
  const decimal = el.dataset.decimal || '';
  const useCustomFormat = suffix.length > 0 || decimal.length > 0;

  const interval = setInterval(() => {
    count += increment;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    if (useCustomFormat) {
      el.textContent = `${count}${suffix}${decimal}`;
      return;
    }
    if (target >= 1000) {
      el.textContent = (count / 1000).toFixed(1) + 'K+';
    } else {
      el.textContent = count;
    }
  }, 20);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target'), 10);
          if (!Number.isNaN(target)) {
            animateCounter(entry.target, target);
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((el) => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initCounters);
