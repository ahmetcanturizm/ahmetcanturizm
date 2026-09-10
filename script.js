const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
  const closeMenu = () => {
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Menüyü aç');
  };

  menuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.setAttribute('aria-label', isOpen ? 'Menüyü kapat' : 'Menüyü aç');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
      menuBtn.focus();
    }
  });
}

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const programForm = document.getElementById('program-form');
if (programForm) {
  programForm.addEventListener('submit', event => {
    event.preventDefault();
    const sure = document.getElementById('sure').value;
    const oda = document.getElementById('oda').value;
    const donem = document.getElementById('donem').value.trim() || 'Henüz net değil';
    const message = `Merhaba Ahmet Can Turizm, bana uygun Umre programını öğrenmek istiyorum.\n\nSüre: ${sure}\nOda tercihi: ${oda}\nPlanlanan dönem: ${donem}`;
    window.open(`https://wa.me/905433080016?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
}
