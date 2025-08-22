// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!open));
    navToggle.setAttribute('aria-expanded', String(!open));
  });
}

// Smooth scroll for on-page anchors
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href').slice(1);
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (nav) nav.setAttribute('data-open', 'false');
  }
});

// Theme toggle
const body = document.body;
const themeBtn = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved === 'dark') body.classList.add('theme-dark');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    body.classList.toggle('theme-dark');
    localStorage.setItem('theme', body.classList.contains('theme-dark') ? 'dark' : 'light');
  });
}

// Apply dark theme variables when theme-dark is on body
const observer = new MutationObserver(() => {
  if (body.classList.contains('theme-dark')) {
    document.documentElement.style.setProperty('--bg', '#0b1020');
    document.documentElement.style.setProperty('--bg-alt', '#0d1426');
    document.documentElement.style.setProperty('--fg', '#e8ebf2');
    document.documentElement.style.setProperty('--muted', '#a9b1c6');
    document.documentElement.style.setProperty('--card', '#0f162d');
    document.documentElement.style.setProperty('--border', '#1f2742');
  } else {
    document.documentElement.style.removeProperty('--bg');
    document.documentElement.style.removeProperty('--bg-alt');
    document.documentElement.style.removeProperty('--fg');
    document.documentElement.style.removeProperty('--muted');
    document.documentElement.style.removeProperty('--card');
    document.documentElement.style.removeProperty('--border');
  }
});
observer.observe(body, { attributes: true, attributeFilter: ['class'] });

// Contact form handler (supports Formspree)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', async (e) => {
    if (!form.action.includes('formspree.io')) return; // Let mailto or custom backends through
    e.preventDefault();
    statusEl.textContent = 'Sending…';
    try {
      const data = new FormData(form);
      const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' }});
      if (res.ok) {
        form.reset();
        statusEl.textContent = 'Thanks! I will reply shortly.';
      } else {
        statusEl.textContent = 'Error sending. You can email me directly at you@example.com.';
      }
    } catch (err) {
      statusEl.textContent = 'Network error. Try again or email me directly.';
    }
  });
}

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();
