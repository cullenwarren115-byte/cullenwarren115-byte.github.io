const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open menu');
  });
});

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const status = document.querySelector('#form-status');
  status.textContent = `Thanks${name ? `, ${name}` : ''}. Your inquiry has been received in this session.`;
  event.currentTarget.reset();
});
