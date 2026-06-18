/* =========================================
   SOUMYA RANJAN BEHERA — PORTFOLIO SCRIPTS
   File: script.js
   ========================================= */

// ---- 1. NAVBAR: add shadow on scroll ----
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// ---- 2. MOBILE NAV TOGGLE ----
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


// ---- 3. SCROLL REVEAL ANIMATION ----
// Add .reveal class to elements we want to animate in
const revealTargets = [
  '.hero-left',
  '.hero-right',
  '.about-text',
  '.about-highlights',
  '.skill-chip',
  '.project-card',
  '.exp-item',
  '.edu-card',
  '.contact-left',
  '.contact-form',
];

revealTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('reveal');
  });
});

// IntersectionObserver to trigger animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once only
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// ---- 4. ACTIVE NAV LINK HIGHLIGHT ----
const sections  = document.querySelectorAll('section[id], .hero[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.style.color = '');
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.style.color = 'var(--accent)';
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(s => sectionObserver.observe(s));


// ---- 5. CONTACT FORM VALIDATION ----
const contactForm = document.getElementById('contactForm');
const formStatus  = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name    = document.getElementById('formName').value.trim();
  const email   = document.getElementById('formEmail').value.trim();
  const message = document.getElementById('formMessage').value.trim();

  // Simple validation
  if (!name || !email || !message) {
    formStatus.textContent = 'Please fill in all fields.';
    formStatus.className   = 'form-status error';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formStatus.textContent = 'Please enter a valid email address.';
    formStatus.className   = 'form-status error';
    return;
  }

  // Simulate send (replace with real EmailJS / FormSubmit later)
  formStatus.textContent = 'Sending...';
  formStatus.className   = 'form-status';

  setTimeout(() => {
    formStatus.textContent = '✓ Message sent! I will get back to you soon.';
    formStatus.className   = 'form-status';
    contactForm.reset();
  }, 1200);
});


// ---- 6. SMOOTH SCROLL for older browsers ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


// ---- 7. CURRENT YEAR in footer (optional) ----
// Uncomment if you want a live year:
// document.querySelectorAll('.footer-year').forEach(el => {
//   el.textContent = new Date().getFullYear();
// });
