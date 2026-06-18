/* =========================================
   SOUMYA RANJAN BEHERA — PORTFOLIO STYLES
   File: style.css
   ========================================= */

/* ---- RESET & BASE ---- */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --ink:       #0d0d0d;
  --ink2:      #3a3a3a;
  --ink3:      #777;
  --paper:     #f7f5f0;
  --surface:   #ffffff;
  --accent:    #ff4d1c;
  --accent2:   #1a1aff;
  --accent3:   #00c896;

  --ff-display: 'Syne', sans-serif;
  --ff-body:    'Space Grotesk', sans-serif;

  --border: 1.5px solid var(--ink);
  --transition: 0.2s ease;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--ff-body);
  font-size: 16px;
  line-height: 1.6;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

/* ---- UTILITY ---- */
.accent       { color: var(--accent); }
.accent-blue  { color: var(--accent2); }

/* ---- NAVIGATION ---- */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2.5rem;
  background: var(--paper);
  border-bottom: var(--border);
  transition: box-shadow var(--transition);
}

nav.scrolled {
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}

.nav-logo {
  font-family: var(--ff-display);
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--ink);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--ink2);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: color var(--transition);
}

.nav-links a:hover {
  color: var(--accent);
}

.nav-toggle {
  display: none;
  background: none;
  border: var(--border);
  padding: 0.3rem 0.6rem;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--ink);
}

/* ---- HERO ---- */
.hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 8rem 2.5rem 4rem;
  gap: 3rem;
  border-bottom: var(--border);
}

.eyebrow {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1rem;
}

.hero-name {
  font-family: var(--ff-display);
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--ink);
  margin-bottom: 1.5rem;
}

.hero-tagline {
  font-size: 1.05rem;
  color: var(--ink2);
  max-width: 420px;
  margin-bottom: 2.5rem;
  line-height: 1.7;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* ---- BUTTONS ---- */
.btn-primary {
  display: inline-block;
  background: var(--accent);
  color: #fff;
  font-family: var(--ff-body);
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.85rem 2rem;
  border: 2px solid var(--accent);
  letter-spacing: 0.02em;
  transition: background var(--transition), border-color var(--transition);
  cursor: pointer;
}

.btn-primary:hover {
  background: var(--ink);
  border-color: var(--ink);
  color: #fff;
}

.btn-outline {
  display: inline-block;
  background: transparent;
  color: var(--ink);
  font-family: var(--ff-body);
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.85rem 2rem;
  border: 2px solid var(--ink);
  letter-spacing: 0.02em;
  transition: background var(--transition), color var(--transition);
  cursor: pointer;
}

.btn-outline:hover {
  background: var(--ink);
  color: var(--paper);
}

/* ---- HERO STAT CARDS ---- */
.hero-right {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.stat-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.stat-card {
  background: var(--surface);
  border: var(--border);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-card.dark {
  background: var(--ink);
  color: #fff;
}

.stat-num {
  font-family: var(--ff-display);
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
}

.stat-num.blue  { color: var(--accent2); }
.stat-num.green { color: var(--accent3); }

.stat-label {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink2);
}

.stat-label.muted { color: #aaa; }

/* ---- MARQUEE ---- */
.marquee-bar {
  background: var(--accent);
  overflow: hidden;
  padding: 0.6rem 0;
  border-top: var(--border);
  border-bottom: var(--border);
}

.marquee-track {
  display: flex;
  gap: 3rem;
  white-space: nowrap;
  animation: marquee 18s linear infinite;
}

.marquee-track span {
  font-family: var(--ff-display);
  font-size: 0.9rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  flex-shrink: 0;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ---- SECTION BASE ---- */
section {
  padding: 5rem 2.5rem;
  border-bottom: var(--border);
}

.section-eyebrow {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.6rem;
}

.section-title {
  font-family: var(--ff-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--ink);
  margin-bottom: 2.5rem;
  line-height: 1.1;
}

/* ---- ABOUT ---- */
.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-text {
  font-size: 1.05rem;
  color: var(--ink2);
  line-height: 1.8;
}

.about-text p + p {
  margin-top: 1rem;
}

.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.highlight-item {
  border: var(--border);
  padding: 1.25rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.highlight-icon {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}

.highlight-icon.blue-bg  { background: var(--accent2); }
.highlight-icon.red-bg   { background: var(--accent); }
.highlight-icon.green-bg { background: var(--accent3); }

.highlight-body h4 {
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
}

.highlight-body p {
  font-size: 0.85rem;
  color: var(--ink3);
  line-height: 1.5;
}

/* ---- SKILLS ---- */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
}

.skill-chip {
  border: var(--border);
  padding: 1rem 1.25rem;
  background: var(--surface);
  transition: background var(--transition), color var(--transition);
  cursor: default;
}

.skill-chip:hover {
  background: var(--ink);
  color: var(--paper);
}

.skill-cat {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink3);
  margin-bottom: 0.3rem;
  transition: color var(--transition);
}

.skill-chip:hover .skill-cat {
  color: var(--accent);
}

.skill-name {
  font-size: 0.95rem;
  font-weight: 700;
}

/* ---- PROJECTS ---- */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: var(--border);
}

.project-card {
  padding: 2rem;
  border-bottom: var(--border);
  border-right: var(--border);
  transition: background var(--transition), color var(--transition);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  background: var(--ink);
  color: var(--paper);
}

.project-card:nth-child(2n) {
  border-right: none;
}

.project-card:nth-last-child(-n+2) {
  border-bottom: none;
}

.project-card.project-cta {
  background: var(--ink);
  color: var(--paper);
}

.proj-num {
  font-family: var(--ff-display);
  font-size: 3rem;
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 0.5rem;
  opacity: 0.4;
}

.project-cta .proj-num {
  opacity: 1;
  color: var(--accent3);
}

.proj-title {
  font-family: var(--ff-display);
  font-size: 1.3rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.proj-desc {
  font-size: 0.9rem;
  color: var(--ink2);
  line-height: 1.7;
  margin-bottom: 1rem;
  flex: 1;
  transition: color var(--transition);
}

.project-card:hover .proj-desc {
  color: #ccc;
}

.project-cta .proj-desc {
  color: #bbb;
}

.proj-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.proj-tag {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 1px solid currentColor;
  padding: 0.2rem 0.6rem;
  opacity: 0.7;
}

.proj-meta {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--ink3);
  margin-top: auto;
  transition: color var(--transition);
}

.project-card:hover .proj-meta {
  color: #aaa;
}

/* ---- EXPERIENCE ---- */
.exp-item {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  padding: 2rem 0;
  border-bottom: 1px solid var(--ink);
}

.exp-item:last-child {
  border-bottom: none;
}

.exp-date {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--ink3);
  padding-top: 0.2rem;
}

.exp-role {
  font-family: var(--ff-display);
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
}

.exp-company {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.exp-bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.exp-bullets li {
  font-size: 0.9rem;
  color: var(--ink2);
  padding-left: 1.2rem;
  position: relative;
}

.exp-bullets li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 0.8rem;
}

/* ---- EDUCATION ---- */
.edu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}

.edu-card {
  border: var(--border);
  padding: 1.5rem;
  background: var(--surface);
}

.edu-card.blue-border {
  border-color: var(--accent2);
}

.edu-degree {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.4rem;
}

.edu-degree.blue-text {
  color: var(--accent2);
}

.edu-school {
  font-family: var(--ff-display);
  font-size: 1.1rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}

.edu-detail {
  font-size: 0.85rem;
  color: var(--ink3);
}

/* ---- CONTACT ---- */
.contact-inner {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-big {
  font-family: var(--ff-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1;
  margin-bottom: 1.5rem;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--ink);
  border: var(--border);
  padding: 1rem 1.25rem;
  font-weight: 500;
  transition: background var(--transition), color var(--transition);
  cursor: pointer;
}

.contact-link:hover {
  background: var(--ink);
  color: var(--paper);
}

.contact-link.no-hover {
  opacity: 0.6;
  cursor: default;
  pointer-events: none;
}

.contact-link-icon {
  font-size: 1rem;
  min-width: 1.5rem;
}

/* ---- CONTACT FORM ---- */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  font-family: var(--ff-body);
  font-size: 0.95rem;
  padding: 0.85rem 1rem;
  border: var(--border);
  background: var(--surface);
  color: var(--ink);
  outline: none;
  border-radius: 0;
  resize: vertical;
  transition: border-color var(--transition);
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--accent2);
}

.contact-form textarea {
  min-height: 120px;
}

.contact-form button {
  background: var(--accent);
  color: #fff;
  font-family: var(--ff-body);
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.9rem;
  border: none;
  cursor: pointer;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: background var(--transition);
}

.contact-form button:hover {
  background: var(--ink);
}

.form-status {
  font-size: 0.85rem;
  font-weight: 500;
  min-height: 1.2rem;
  color: var(--accent3);
}

.form-status.error {
  color: var(--accent);
}

/* ---- FOOTER ---- */
footer {
  padding: 1.5rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: var(--ink3);
}

footer strong {
  color: var(--ink);
  font-weight: 700;
}

/* ---- SCROLL REVEAL (JS-driven) ---- */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ---- RESPONSIVE ---- */
@media (max-width: 900px) {
  .about-grid,
  .contact-inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 750px) {
  nav {
    padding: 0.8rem 1.2rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .nav-toggle {
    display: block;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    gap: 0;
    border-top: var(--border);
    margin-top: 0.5rem;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links li a {
    display: block;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.08);
  }

  .hero {
    grid-template-columns: 1fr;
    padding: 6rem 1.2rem 3rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    border-right: none !important;
    border-bottom: var(--border) !important;
  }

  .project-card:last-child {
    border-bottom: none !important;
  }

  .exp-item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  section {
    padding: 3rem 1.2rem;
  }

  footer {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    padding: 1.2rem;
  }
}
