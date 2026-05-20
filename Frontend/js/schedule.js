function initHoursHighlight() {
  const rowsContainer = document.getElementById('hours-rows');
  if (rowsContainer) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const times = [
      '5:00 AM – 11:00 PM',
      '5:00 AM – 11:00 PM',
      '5:00 AM – 11:00 PM',
      '5:00 AM – 11:00 PM',
      '5:00 AM – 11:00 PM',
      '5:00 AM – 11:00 PM',
      '5:00 AM – 11:00 PM',
    ];

    const now = new Date();
    const todayIdx = now.getDay();
    const hour = now.getHours();
    const isOpen = hour >= 5 && hour < 23;

    rowsContainer.innerHTML = '';

    days.forEach((dayName, idx) => {
      const row = document.createElement('div');
      row.className = 'hours-row' + (idx === todayIdx ? ' today' : '');

      let dayHtml = `<span>${dayName}</span>`;
      if (idx === todayIdx) {
        dayHtml += `<span class="open-badge ${isOpen ? '' : 'closed'}">${isOpen ? 'Open Now' : 'Closed'}</span>`;
      }

      row.innerHTML = `
        <div class="hours-day">${dayHtml}</div>
        <div class="hours-time">${times[idx]}</div>
      `;
      rowsContainer.appendChild(row);
    });
    return;
  }

  const table = document.getElementById('hours-table');
  const badge = document.getElementById('hours-badge');

  const rows = table ? table.querySelectorAll('tr') : document.querySelectorAll('[data-day]');
  if (!rows.length) {
    return;
  }

  const day = new Date().getDay();
  rows.forEach((row, index) => {
    const rowDay = row.getAttribute('data-day');
    if ((rowDay && parseInt(rowDay, 10) === day) || (!rowDay && index === day)) {
      row.style.borderLeft = '3px solid var(--purple-light)';
      row.style.color = 'var(--purple-light)';
    }
  });

  if (badge) {
    const hour = new Date().getHours();
    const isOpen = hour >= 5 && hour < 23;
    badge.textContent = isOpen ? 'Open Now' : 'Closed';
  }
}

document.addEventListener('DOMContentLoaded', initHoursHighlight);
