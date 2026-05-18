function initBMI() {
  const form = document.getElementById('bmi-form');
  if (!form) {
    return;
  }

  const originalNumber = document.getElementById('bmi-number-display');
  if (originalNumber) {
    const resultWrap = document.getElementById('bmi-result');
    const catDisplay = document.getElementById('bmi-category-display');
    const bar = document.getElementById('bmi-bar');
    const heightErr = document.getElementById('height-error');
    const weightErr = document.getElementById('weight-error');

    function clearErrors() {
      if (heightErr) {
        heightErr.style.display = 'none';
        heightErr.textContent = '';
      }
      if (weightErr) {
        weightErr.style.display = 'none';
        weightErr.textContent = '';
      }
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();

      const hVal = parseFloat(document.getElementById('bmi-height').value);
      const wVal = parseFloat(document.getElementById('bmi-weight').value);
      let valid = true;

      if (!hVal || hVal <= 0 || hVal > 300) {
        if (heightErr) {
          heightErr.textContent = 'Please enter a valid height (1–300 cm)';
          heightErr.style.display = 'block';
        }
        valid = false;
      }
      if (!wVal || wVal <= 0 || wVal > 500) {
        if (weightErr) {
          weightErr.textContent = 'Please enter a valid weight (1–500 kg)';
          weightErr.style.display = 'block';
        }
        valid = false;
      }
      if (!valid) return;

      const hM = hVal / 100;
      const bmi = (wVal / (hM * hM)).toFixed(1);

      let cat;
      let color;
      let gradient;
      if (bmi < 18.5) {
        cat = 'Underweight';
        color = '#3498db';
        gradient = '#3498db, #5dade2';
      } else if (bmi < 25) {
        cat = 'Normal Weight';
        color = '#a855f7';
        gradient = '#7c3aed, #e879f9';
      } else if (bmi < 30) {
        cat = 'Overweight';
        color = '#f39c12';
        gradient = '#e67e22, #f39c12';
      } else {
        cat = 'Obese';
        color = '#e74c3c';
        gradient = '#c0392b, #e74c3c';
      }

      originalNumber.textContent = bmi;
      originalNumber.style.color = color;
      if (catDisplay) {
        catDisplay.textContent = cat;
        catDisplay.style.color = color;
      }

      if (bar) {
        const pct = Math.min((bmi / 40) * 100, 100);
        bar.style.width = pct + '%';
        bar.style.background = `linear-gradient(90deg, ${gradient})`;
        bar.parentElement?.setAttribute('aria-valuenow', bmi);
      }

      if (resultWrap) {
        resultWrap.style.display = 'block';
        setTimeout(() => resultWrap.classList.add('visible'), 20);
      }
    });
    return;
  }

  const heightInput = form.querySelector('#bmi-height') || form.querySelector('[name="height"]');
  const weightInput = form.querySelector('#bmi-weight') || form.querySelector('[name="weight"]');
  const errorEl = form.querySelector('#bmi-error') || form.querySelector('.bmi-error');
  const valueEl = form.querySelector('#bmi-value') || form.querySelector('.bmi-value');
  const labelEl = form.querySelector('#bmi-label') || form.querySelector('.bmi-category');
  const barFill = form.querySelector('#bmi-bar-fill') || form.querySelector('.bmi-progress span') || form.querySelector('.bmi-bar span');

  function showError(message) {
    if (errorEl) errorEl.textContent = message;
  }

  function clearError() {
    if (errorEl) errorEl.textContent = '';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (!height || !weight || height <= 0 || weight <= 0) {
      showError('Please enter a valid height and weight.');
      return;
    }

    clearError();
    const bmi = weight / Math.pow(height / 100, 2);

    let label = 'Normal';
    let color = 'var(--purple-light)';
    if (bmi < 18.5) {
      label = 'Underweight';
      color = '#3498db';
    } else if (bmi < 25) {
      label = 'Normal';
      color = 'var(--purple-light)';
    } else if (bmi < 30) {
      label = 'Overweight';
      color = '#f39c12';
    } else {
      label = 'Obese';
      color = '#e74c3c';
    }

    if (valueEl) valueEl.textContent = bmi.toFixed(1);
    if (labelEl) labelEl.textContent = label;
    if (valueEl) valueEl.style.color = color;
    if (labelEl) labelEl.style.color = color;

    if (barFill) {
      const width = Math.min((bmi / 40) * 100, 100);
      barFill.style.width = width + '%';
      barFill.style.background = color;
    }
  });
}

document.addEventListener('DOMContentLoaded', initBMI);
