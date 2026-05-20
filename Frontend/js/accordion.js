function initAccordion() {
  const items = document.querySelectorAll('.accordion-item');
  const faqItems = document.querySelectorAll('.faq-item');
  if (!items.length && !faqItems.length) {
    return;
  }

  items.forEach((item) => {
    const btn = item.querySelector('.accordion-btn');
    const answer = item.querySelector('.accordion-answer');
    if (!btn || !answer) {
      return;
    }

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      items.forEach((other) => {
        const otherBtn = other.querySelector('.accordion-btn');
        const otherAnswer = other.querySelector('.accordion-answer');
        if (otherBtn && otherAnswer) {
          otherBtn.setAttribute('aria-expanded', 'false');
          otherAnswer.style.maxHeight = null;
        }
      });

      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) {
      return;
    }

    function closeAll() {
      faqItems.forEach((other) => {
        other.classList.remove('open');
        const otherBtn = other.querySelector('.faq-question');
        const otherAnswer = other.querySelector('.faq-answer');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });
    }

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      closeAll();
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });

    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initAccordion);
