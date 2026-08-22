import React from 'react';
import profileImg from '../assets/profile.jpg';

/* ── SVG Social Icons ── */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="M2 7l10 7 10-7" />
  </svg>
);

const SOCIAL_LINKS = [
  { href: 'https://github.com/mohammedyusuf',        Icon: GithubIcon,   label: 'GitHub' },
  { href: 'https://linkedin.com/in/mohammedyusuf',   Icon: LinkedinIcon, label: 'LinkedIn' },
  { href: 'https://twitter.com/mohammedyusuf',       Icon: TwitterIcon,  label: 'Twitter' },
  { href: 'mailto:mohammedyusuf@email.com',          Icon: EmailIcon,    label: 'Email' },
];

const STATS = [
  { number: '3+',  label: 'Years Exp.' },
  { number: '20+', label: 'Projects' },
  { number: '10+', label: 'Technologies' },
  { number: '5+',  label: 'Clients' },
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

      {/* Large background portrait on right side */}
      <div className="hero__visual-container" aria-hidden="true">
        <div className="hero__visual-wrapper">
          <img
            src={profileImg}
            alt="Mohammed Yusuf"
            className="hero__visual-img"
          />
          <div className="hero__visual-overlay" />
          <div className="hero__visual-glow" />
        </div>
      </div>

      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">

            {/* Greeting pill */}
            <span className="hero__greeting" aria-label="Introduction">
              Hello, World! I'm Mohammed
            </span>

            {/* Name */}
            <h1 className="hero__name">
              Mohammed{' '}
              <span className="hero__name-gradient">Yusuf</span>
            </h1>

            {/* Role */}
            <p className="hero__role">
              <span className="hero__role-highlight">Full Stack Developer</span>
              {' '}& UI Craftsman
            </p>

            {/* Description */}
            <p className="hero__description">
              I build exceptional digital experiences that live at the intersection of
              beautiful design and robust engineering. Passionate about crafting
              scalable, performant web applications with modern tech stacks.
            </p>

            {/* CTA Buttons */}
            <div className="hero__actions">
              <a
                href="#contact"
                id="hero-contact-btn"
                className="btn btn--primary"
                onClick={(e) => handleScroll(e, '#contact')}
                aria-label="Get in touch — scroll to contact section"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z" />
                </svg>
                Let's Connect
              </a>
              <a
                href="#skills"
                id="hero-skills-btn"
                className="btn btn--outline"
                onClick={(e) => handleScroll(e, '#skills')}
                aria-label="View my skills and work"
              >
                View My Work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
            </div>

            {/* Social Links */}
            <div className="hero__social" aria-label="Social media links">
              <span className="hero__social-label">Find me on</span>
              {SOCIAL_LINKS.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  className="social-link"
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  title={label}
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="hero__stats" role="list" aria-label="Portfolio statistics">
              {STATS.map((stat) => (
                <div key={stat.label} className="hero__stat" role="listitem">
                  <span className="hero__stat-number">{stat.number}</span>
                  <span className="hero__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Empty right column — portrait fills this from position:absolute */}
          <div className="hero__right-col" aria-hidden="true" />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
