const header = document.querySelector('.masthead');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
if (header && toggle && navigation) {
  header.dataset.enhanced = 'true';
  const close = () => toggle.setAttribute('aria-expanded', 'false');
  toggle.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', String(toggle.getAttribute('aria-expanded') !== 'true'));
  });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      close(); toggle.focus();
    }
  });
  document.addEventListener('click', event => { if (!header.contains(event.target)) close(); });
  window.matchMedia('(min-width: 1101px)').addEventListener('change', close);
}
