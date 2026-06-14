/* ===========================
   TYPEWRITER EFFECT
=========================== */
function typeWriter(element, text, speed = 60, delay = 0) {
  return new Promise(resolve => {
    setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        element.textContent += text[i];
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          resolve();
        }
      }, speed);
    }, delay);
  });
}

async function runTerminal() {
  const nameEl = document.getElementById('typedName');
  const roleEl = document.getElementById('typedRole');
  if (!nameEl || !roleEl) return;

  await typeWriter(nameEl, 'Hamza Sheikh', 80, 400);
  await typeWriter(roleEl, 'Cyber Security professional · Pune, India', 55, 1800);
}

runTerminal();

/* ===========================
   MOBILE NAV TOGGLE
=========================== */
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav__links a');

navToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close nav when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

/* ===========================
   NAV SCROLL SHADOW
=========================== */
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.background = 'rgba(7, 12, 25, 0.97)';
  } else {
    nav.style.background = 'rgba(10, 15, 30, 0.85)';
  }
});

/* ===========================
   ACTIVE NAV LINK ON SCROLL
=========================== */
const sections = document.querySelectorAll('section[id]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${entry.target.id}`
          ? 'var(--text)'
          : 'var(--text-muted)';
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(s => observer.observe(s));

/* ===========================
   SCROLL REVEAL
=========================== */
const revealItems = document.querySelectorAll(
  '.skill-card, .project-card, .stat, .about__text'
);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(20px)';
  item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(item);
});

/* ===========================
   FOOTER YEAR
=========================== */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
