function initFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.trainer-card');
  if (!buttons.length || !cards.length) {
    return;
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      buttons.forEach((item) => item.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach((card) => {
        const specialty = card.getAttribute('data-specialty') || '';
        const specialties = specialty.split(/\s+/).filter(Boolean);
        const match = filter === 'all' || specialties.includes(filter);
        if (match) {
          card.style.position = '';
          card.style.visibility = '';
          card.style.pointerEvents = '';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'none';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.visibility = 'hidden';
            card.style.position = 'absolute';
            card.style.pointerEvents = 'none';
          }, 400);
        }
      });

      const grid = document.getElementById('trainers-grid');
      if (grid) {
        grid.style.display = 'none';
        requestAnimationFrame(() => {
          grid.style.display = '';
        });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initFilter);
