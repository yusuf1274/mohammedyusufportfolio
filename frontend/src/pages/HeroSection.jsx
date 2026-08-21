import React from 'react';

const SOCIAL_LINKS = [
  { href: 'https://github.com/mohammedyusuf', icon: '⌥', label: 'GitHub' },
  { href: 'https://linkedin.com/in/mohammedyusuf', icon: '⬡', label: 'LinkedIn' },
  { href: 'https://twitter.com/mohammedyusuf', icon: '✦', label: 'Twitter' },
  { href: 'mailto:mohammedyusuf@email.com', icon: '✉', label: 'Email' },
];

const STATS = [
  { number: '3+', label: 'Years Exp.' },
  { number: '20+', label: 'Projects' },
  { number: '10+', label: 'Technologies' },
  { number: '5+', label: 'Clients' },
];

const HeroSection = () => {
  const handleScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" aria-label="Hero section">
      {/* Decorative orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      <div className="container">
        <div className="hero__content">
          <div className="hero__greeting" aria-label="Greeting">
            Hello, World! I'm
          </div>

          <h1 className="hero__name">
            Mohammed{' '}
            <span className="hero__name-gradient">Yusuf</span>
          </h1>

          <p className="hero__role">
            <span className="hero__role-highlight">Full Stack Developer</span>
            {' '}&amp; UI Craftsman
          </p>

          <p className="hero__description">
            I build exceptional digital experiences that live at the intersection of
            beautiful design and robust engineering. Passionate about crafting
            scalable, performant web applications with modern tech stacks.
          </p>

          <div className="hero__actions">
            <a
              href="#contact"
              id="hero-contact-btn"
              className="btn btn--primary"
              onClick={(e) => handleScroll(e, '#contact')}
              aria-label="Get in touch - scroll to contact section"
            >
              ✦ Let's Connect
            </a>
            <a
              href="#skills"
              id="hero-skills-btn"
              className="btn btn--outline"
              onClick={(e) => handleScroll(e, '#skills')}
              aria-label="View my skills"
            >
              View My Work ↓
            </a>
          </div>

          <div className="hero__social" aria-label="Social media links">
            <span className="hero__social-label">Find me on</span>
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="hero__stats" role="list" aria-label="Portfolio statistics">
            {STATS.map((stat) => (
              <div key={stat.label} className="hero__stat" role="listitem">
                <span className="hero__stat-number">{stat.number}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
