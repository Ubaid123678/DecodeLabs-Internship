function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.class-card');
  if (!tabs.length || !cards.length) {
    return;
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((btn) => btn.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      cards.forEach((card) => {
        card.classList.remove('fade-in');
        const matches = filter === 'all' || card.dataset.category === filter;
        if (!matches) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          card.style.pointerEvents = 'none';
          setTimeout(() => {
            if (filter !== 'all' && card.dataset.category !== filter) {
              card.style.display = 'none';
            }
          }, 350);
        }
      });

      setTimeout(() => {
        let delay = 0;
        cards.forEach((card) => {
          const matches = filter === 'all' || card.dataset.category === filter;
          if (matches) {
            card.style.display = 'flex';
            card.style.pointerEvents = '';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
              card.classList.add('fade-in');
            }, delay);
            delay += 80;
          }
        });
      }, 300);
    });
  });
}

document.addEventListener('DOMContentLoaded', initTabs);
