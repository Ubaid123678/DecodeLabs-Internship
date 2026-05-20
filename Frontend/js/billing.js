function initBillingToggle() {
  const originalToggle = document.getElementById('billingToggle');
  if (originalToggle) {
    let isAnnual = false;
    const labelMonthly = document.getElementById('label-monthly');
    const labelAnnual = document.getElementById('label-annual');
    const prices = document.querySelectorAll('.plan-price');
    const saveBadges = document.querySelectorAll('.save-badge');

    function updatePrices() {
      prices.forEach((price) => {
        price.classList.add('changing');
        setTimeout(() => {
          const val = isAnnual ? price.getAttribute('data-annual') : price.getAttribute('data-monthly');
          price.textContent = val;
          price.classList.remove('changing');
        }, 200);
      });

      saveBadges.forEach((badge) => {
        badge.classList.toggle('visible', isAnnual);
      });
    }

    function updateToggleState() {
      originalToggle.classList.toggle('annual', isAnnual);
      originalToggle.setAttribute('aria-pressed', isAnnual);
      if (labelMonthly) labelMonthly.classList.toggle('active', !isAnnual);
      if (labelAnnual) labelAnnual.classList.toggle('active', isAnnual);
    }

    function toggleBilling() {
      isAnnual = !isAnnual;
      updateToggleState();
      updatePrices();
    }

    originalToggle.addEventListener('click', toggleBilling);
    updateToggleState();
    updatePrices();
    return;
  }

  const toggle = document.getElementById('billing-toggle') || document.querySelector('.billing-toggle');
  if (!toggle) {
    return;
  }

  let annual = false;
  const prices = document.querySelectorAll('.plan-price');
  const badges = document.querySelectorAll('.save-badge');
  const periods = document.querySelectorAll('.plan-period');

  function updatePrices() {
    prices.forEach((price) => {
      const monthly = price.dataset.monthly;
      const yearly = price.dataset.annual;
      const valueEl = price.querySelector('.price-val') || price;
      if (!valueEl) return;

      valueEl.style.opacity = '0';
      setTimeout(() => {
        valueEl.textContent = annual ? yearly : monthly;
        valueEl.style.opacity = '1';
      }, 150);
    });

    periods.forEach((period) => {
      period.textContent = annual ? 'Per Month (Billed Annually)' : 'Per Month';
    });

    badges.forEach((badge) => {
      badge.style.display = annual ? 'inline-block' : 'none';
    });
  }

  function updateToggleState() {
    toggle.classList.toggle('active', annual);
    toggle.setAttribute('aria-checked', annual ? 'true' : 'false');
  }

  function toggleBilling() {
    annual = !annual;
    updateToggleState();
    updatePrices();
  }

  toggle.addEventListener('click', toggleBilling);
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleBilling();
    }
  });

  updateToggleState();
  updatePrices();
}

document.addEventListener('DOMContentLoaded', initBillingToggle);
