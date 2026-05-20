(() => {
  'use strict';

  const html      = document.documentElement;
  const themeBtn  = document.getElementById('theme-toggle');
  const langBtn   = document.getElementById('lang-toggle');

  /* ── Theme ── */
  function applyTheme(theme) {
    html.dataset.theme = theme;
    themeBtn.textContent = theme === 'dark' ? '🌙' : '☀️';
    themeBtn.setAttribute('aria-pressed', String(theme === 'light'));
    localStorage.setItem('theme', theme);
  }

  applyTheme(
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
  );

  themeBtn.addEventListener('click', () =>
    applyTheme(html.dataset.theme === 'dark' ? 'light' : 'dark')
  );

  /* ── i18n ── */
  function applyLang(lang) {
    html.lang = lang;
    langBtn.textContent = lang === 'ja' ? 'EN' : 'JP';
    langBtn.setAttribute('aria-pressed', String(lang === 'en'));
    localStorage.setItem('lang', lang);

    const key = lang === 'ja' ? 'i18nJp' : 'i18nEn';
    document.querySelectorAll('[data-i18n-jp]').forEach(el => {
      const text = el.dataset[key];
      if (text) el.innerHTML = text;
    });
  }

  applyLang(
    localStorage.getItem('lang') ||
    (navigator.language.startsWith('ja') ? 'ja' : 'en')
  );

  langBtn.addEventListener('click', () =>
    applyLang(html.lang === 'ja' ? 'en' : 'ja')
  );

  /* ── Reveal on scroll ── */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  } else {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
})();
