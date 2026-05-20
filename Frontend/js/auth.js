function initCursor() {
  const dot = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = -100;
  let my = -100;
  let rx = -100;
  let ry = -100;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  });

  function lerp(a, b, n) {
    return a + (b - a) * n;
  }

  function tick() {
    rx = lerp(rx, mx, 0.12);
    ry = lerp(ry, my, 0.12);
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(tick);
  }

  tick();

  document
    .querySelectorAll('a, button, .custom-checkbox, .tab-btn, .switch-link, .forgot-link, .back-link')
    .forEach((el) => {
      el.addEventListener('mouseenter', () => {
        dot.classList.add('hovering');
        ring.classList.add('hovering');
      });
      el.addEventListener('mouseleave', () => {
        dot.classList.remove('hovering');
        ring.classList.remove('hovering');
      });
    });
}

function initMagnetic() {
  document.querySelectorAll('.btn-primary:not([disabled])').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.3;
      const dy = (e.clientY - cy) * 0.3;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

function initOrbs() {
  const orbs = document.querySelectorAll('.orb');
  document.querySelector('.left-panel')?.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - left) / width - 0.5;
    const ny = (e.clientY - top) / height - 0.5;
    orbs.forEach((orb, i) => {
      const factor = (i + 1) * 18;
      orb.style.transform += ` translate(${nx * factor}px, ${ny * factor}px)`;
    });
  });
}

let currentTab = 'login';

function switchToTab(tab) {
  if (tab === currentTab && tab !== 'forgot') return;
  const prev = document.getElementById(`panel-${currentTab}`);
  const next = document.getElementById(`panel-${tab}`);
  if (!next || !prev) return;

  prev.classList.add('exit-left');
  prev.classList.remove('active');
  setTimeout(() => {
    prev.classList.remove('exit-left');
    prev.style.transform = 'translateX(30px)';
    prev.style.opacity = '0';
  }, 400);

  next.style.transform = 'translateX(30px)';
  next.style.opacity = '0';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      next.classList.add('active');
      next.style.transform = '';
      next.style.opacity = '';
    });
  });

  document.querySelectorAll('.tab-btn').forEach((b) => {
    b.classList.toggle('active', b.dataset.tab === tab);
  });

  const tabSwitch = document.getElementById('tab-switcher');
  if (tab === 'forgot') {
    tabSwitch.style.display = 'none';
  } else {
    tabSwitch.style.display = '';
    history.replaceState(null, '', '#' + tab);
    currentTab = tab;
  }
}

function initTabSwitch() {
  document.getElementById('tab-switcher').addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn');
    if (btn) switchToTab(btn.dataset.tab);
  });
  document.querySelectorAll('.switch-link').forEach((btn) => {
    btn.addEventListener('click', () => switchToTab(btn.dataset.switch));
  });
}

function initForgotPassword() {
  document.getElementById('forgot-trigger').addEventListener('click', (e) => {
    e.preventDefault();
    switchToTab('forgot');
  });
  document.getElementById('forgot-back').addEventListener('click', () => {
    switchToTab('login');
    document.getElementById('tab-switcher').style.display = '';
    currentTab = 'login';
  });
  document.getElementById('forgot-submit').addEventListener('click', () => {
    const email = document.getElementById('forgot-email');
    const err = document.getElementById('forgot-email-err');
    if (!isValidEmail(email.value.trim())) {
      err.textContent = 'Please enter a valid email.';
      err.classList.add('show');
      email.classList.add('invalid');
      return;
    }
    const btn = document.getElementById('forgot-submit');
    btn.classList.add('loading');
    btn.querySelector('span').textContent = 'Sending…';
    setTimeout(() => {
      document.getElementById('forgot-form-content').style.display = 'none';
      document.getElementById('forgot-success').classList.add('show');
    }, 1500);
  });
}

function initPasswordToggle() {
  document.querySelectorAll('[data-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.toggle);
      const icon = btn.querySelector('i');
      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
      } else {
        input.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
      }
    });
  });
}

function getStrength(pwd) {
  let score = 0;
  if (pwd.length >= 8) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  return score;
}

function initPasswordStrength() {
  const input = document.getElementById('reg-password');
  const segs = [1, 2, 3, 4].map((n) => document.getElementById(`seg${n}`));
  const label = document.getElementById('strength-label');
  const labels = ['', 'Weak', 'Fair', 'Strong', 'Very Strong'];
  const classes = ['', 's1', 's2', 's3', 's4'];

  input.addEventListener('input', () => {
    const val = input.value;
    if (!val) {
      segs.forEach((s) => (s.className = 'strength-seg'));
      label.textContent = '';
      return;
    }
    const score = getStrength(val);
    segs.forEach((s, i) => {
      s.className = 'strength-seg';
      if (i < score) s.classList.add(classes[score]);
    });
    label.textContent = labels[score];

    validateConfirm();
    checkRegisterSubmit();
  });
}

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function setFieldState(inputId, errId, isValid, msg) {
  const inp = document.getElementById(inputId);
  const err = document.getElementById(errId);
  if (!inp) return;
  inp.classList.remove('valid', 'invalid');
  inp.classList.add(isValid ? 'valid' : 'invalid');
  if (err) {
    err.textContent = msg || '';
    err.classList.toggle('show', !isValid && !!msg);
  }
}

function initLoginValidation() {
  const emailInp = document.getElementById('login-email');
  const pwdInp = document.getElementById('login-password');

  function checkLoginSubmit() {
    const valid = isValidEmail(emailInp.value.trim()) && pwdInp.value.length >= 8;
    const btn = document.getElementById('login-submit');
    btn.disabled = !valid;
    btn.classList.toggle('disabled', !valid);
  }

  emailInp.addEventListener('blur', () => {
    const v = emailInp.value.trim();
    setFieldState('login-email', 'login-email-err', isValidEmail(v), v ? 'Enter a valid email address.' : 'Email is required.');
    checkLoginSubmit();
  });
  emailInp.addEventListener('input', checkLoginSubmit);

  pwdInp.addEventListener('blur', () => {
    const v = pwdInp.value;
    setFieldState('login-password', 'login-password-err', v.length >= 8, 'Password must be at least 8 characters.');
    checkLoginSubmit();
  });
  pwdInp.addEventListener('input', checkLoginSubmit);
}

function validateConfirm() {
  const pwd = document.getElementById('reg-password').value;
  const conf = document.getElementById('reg-confirm').value;
  if (!conf) return;
  const match = pwd === conf;
  setFieldState('reg-confirm', 'reg-confirm-err', match, 'Passwords do not match.');
}

function checkRegisterSubmit() {
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pwd = document.getElementById('reg-password').value;
  const conf = document.getElementById('reg-confirm').value;
  const plan = document.getElementById('reg-plan').value;
  const terms = document.getElementById('terms-cb').classList.contains('checked');

  const valid =
    name.length >= 2 &&
    !/\d/.test(name) &&
    isValidEmail(email) &&
    pwd.length >= 8 &&
    pwd === conf &&
    plan !== '' &&
    terms;

  const btn = document.getElementById('register-submit');
  btn.disabled = !valid;
  btn.classList.toggle('disabled', !valid);
}

function initFormValidation() {
  initLoginValidation();

  document.getElementById('reg-name').addEventListener('blur', () => {
    const v = document.getElementById('reg-name').value.trim();
    const ok = v.length >= 2 && !/\d/.test(v);
    setFieldState(
      'reg-name',
      'reg-name-err',
      ok,
      !v ? 'Name is required.' : v.length < 2 ? 'Name must be at least 2 characters.' : 'Name cannot contain numbers.'
    );
    checkRegisterSubmit();
  });
  document.getElementById('reg-name').addEventListener('input', checkRegisterSubmit);

  document.getElementById('reg-email').addEventListener('blur', () => {
    const v = document.getElementById('reg-email').value.trim();
    setFieldState('reg-email', 'reg-email-err', isValidEmail(v), v ? 'Enter a valid email address.' : 'Email is required.');
    checkRegisterSubmit();
  });
  document.getElementById('reg-email').addEventListener('input', checkRegisterSubmit);

  document.getElementById('reg-password').addEventListener('blur', () => {
    const v = document.getElementById('reg-password').value;
    setFieldState('reg-password', 'reg-password-err', v.length >= 8, 'Password must be at least 8 characters.');
    checkRegisterSubmit();
  });

  document.getElementById('reg-confirm').addEventListener('input', () => {
    validateConfirm();
    checkRegisterSubmit();
  });
  document.getElementById('reg-confirm').addEventListener('blur', () => {
    validateConfirm();
    checkRegisterSubmit();
  });

  document.getElementById('reg-plan').addEventListener('change', checkRegisterSubmit);

  document.getElementById('terms-cb').addEventListener('click', () => {
    const cb = document.getElementById('terms-cb');
    const checked = !cb.classList.contains('checked');
    cb.classList.toggle('checked', checked);
    cb.setAttribute('aria-checked', checked);
    checkRegisterSubmit();
  });

  document.getElementById('remember-cb').addEventListener('click', () => {
    const cb = document.getElementById('remember-cb');
    const checked = !cb.classList.contains('checked');
    cb.classList.toggle('checked', checked);
    cb.setAttribute('aria-checked', checked);
  });
}

function initLoginSubmit() {
  document.getElementById('login-submit').addEventListener('click', function () {
    const btn = this;
    if (btn.disabled) return;
    btn.classList.add('loading');
    btn.querySelector('span').textContent = 'Signing in…';
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  });
}

function initRegisterSubmit() {
  document.getElementById('register-submit').addEventListener('click', function () {
    const btn = this;
    if (btn.disabled) return;
    const plan = document.getElementById('reg-plan').value || 'Essential ($49/mo)';
    btn.classList.add('loading');
    btn.querySelector('span').textContent = 'Creating Account…';
    setTimeout(() => {
      document.getElementById('register-form-content').style.opacity = '0';
      document.getElementById('register-form-content').style.transition = 'opacity 0.4s';
      setTimeout(() => {
        document.getElementById('register-form-content').style.display = 'none';
        document.getElementById('success-plan-name').innerHTML = plan
          .replace('$', '<span>$')
          .replace(')', ')</span>')
          .replace(' — ', ' — ');
        document.getElementById('success-screen').classList.add('show');
      }, 400);
    }, 1500);
  });
}

function checkHash() {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'register') switchToTab('register');
  else switchToTab('login');
}

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initTabSwitch();
  initPasswordToggle();
  initPasswordStrength();
  initFormValidation();
  initLoginSubmit();
  initRegisterSubmit();
  initForgotPassword();
  checkHash();
  setTimeout(() => {
    initMagnetic();
    initOrbs();
  }, 100);
});
