function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) {
    return;
  }

  if (document.getElementById('f-name')) {
    const inner = document.getElementById('form-inner');
    const success = document.getElementById('form-success');
    const counter = document.getElementById('char-counter');

    function showErr(id, msg) {
      const inp = document.getElementById(id);
      const err = document.getElementById('err-' + id.replace('f-', ''));
      if (inp) inp.classList.add('error');
      if (err) {
        err.textContent = msg;
        err.classList.add('show');
      }
    }

    function clearErr(id) {
      const inp = document.getElementById(id);
      const err = document.getElementById('err-' + id.replace('f-', ''));
      if (inp) inp.classList.remove('error');
      if (err) err.classList.remove('show');
    }

    ['f-name', 'f-email', 'f-subject', 'f-message'].forEach((id) => {
      const field = document.getElementById(id);
      if (field) field.addEventListener('input', () => clearErr(id));
    });

    if (counter) {
      const message = document.getElementById('f-message');
      if (message) {
        message.addEventListener('input', () => {
          const len = message.value.length;
          counter.textContent = `${len} / 500`;
          counter.classList.toggle('warn', len > 400 && len <= 480);
          counter.classList.toggle('limit', len > 480);
        });
      }
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const name = document.getElementById('f-name').value.trim();
      const email = document.getElementById('f-email').value.trim();
      const subject = document.getElementById('f-subject').value;
      const msg = document.getElementById('f-message').value.trim();

      ['f-name', 'f-email', 'f-subject', 'f-message'].forEach((id) => clearErr(id));

      if (!name) { showErr('f-name', 'Please enter your full name.'); valid = false; }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showErr('f-email', 'Please enter a valid email address.');
        valid = false;
      }
      if (!subject) { showErr('f-subject', 'Please select a subject.'); valid = false; }
      if (msg.length < 20) {
        showErr('f-message', `Message must be at least 20 characters (${msg.length}/20).`);
        valid = false;
      }

      if (!valid) return;

      if (inner) {
        inner.style.transition = 'opacity 0.4s, transform 0.4s';
        inner.style.opacity = '0';
        inner.style.transform = 'translateY(-20px)';
      }

      setTimeout(() => {
        if (inner) inner.style.display = 'none';
        if (success) success.style.display = 'flex';
      }, 400);
    });

    window.resetForm = function resetForm() {
      form.reset();
      if (counter) counter.textContent = '0 / 500';
      if (success) success.style.display = 'none';
      if (inner) {
        inner.style.display = '';
        inner.style.opacity = '1';
        inner.style.transform = '';
      }
      ['f-name', 'f-email', 'f-subject', 'f-message'].forEach((id) => {
        const inp = document.getElementById(id);
        if (inp) inp.classList.remove('error');
      });
      document.querySelectorAll('.field-error').forEach((el) => el.classList.remove('show'));
    };

    return;
  }

  const fields = {
    name: form.querySelector('#full-name') || form.querySelector('#name'),
    email: form.querySelector('#email'),
    phone: form.querySelector('#phone'),
    subject: form.querySelector('#subject'),
    message: form.querySelector('#message'),
  };

  const errors = {
    name: form.querySelector('#full-name-error') || form.querySelector('#error-name'),
    email: form.querySelector('#email-error') || form.querySelector('#error-email'),
    phone: form.querySelector('#phone-error') || form.querySelector('#error-phone'),
    subject: form.querySelector('#subject-error') || form.querySelector('#error-subject'),
    message: form.querySelector('#message-error') || form.querySelector('#error-message'),
  };

  const success = document.getElementById('form-success') || document.getElementById('contact-success');
  const counter = document.getElementById('char-counter');

  function showError(key, msg) {
    if (errors[key]) errors[key].textContent = msg;
  }

  function clearError(key) {
    if (errors[key]) errors[key].textContent = '';
  }

  function validateField(key) {
    const field = fields[key];
    if (!field) return true;

    const value = field.value.trim();
    if (key === 'name' && value.length < 2) {
      showError(key, 'Please enter your full name.');
      return false;
    }
    if (key === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      showError(key, 'Please enter a valid email.');
      return false;
    }
    if (key === 'subject' && !value) {
      showError(key, 'Please select a subject.');
      return false;
    }
    if (key === 'message' && value.length < 20) {
      showError(key, 'Please enter at least 20 characters.');
      return false;
    }
    clearError(key);
    return true;
  }

  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    if (field) {
      field.addEventListener('blur', () => validateField(key));
    }
  });

  if (counter && fields.message) {
    fields.message.addEventListener('input', () => {
      counter.textContent = `${fields.message.value.length} / 500`;
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valid = ['name', 'email', 'subject', 'message'].every((key) => validateField(key));
    if (!valid) return;

    form.style.opacity = '0';
    form.style.transform = 'translateY(-20px)';
    if (success) {
      success.style.display = 'block';
      success.setAttribute('aria-hidden', 'false');
    }
  });
}

document.addEventListener('DOMContentLoaded', initForm);
