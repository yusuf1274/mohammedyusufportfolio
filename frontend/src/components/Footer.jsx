import React from 'react';

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

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/* ── Data ── */
const QUICK_LINKS = [
  { label: 'Home',      href: '#home' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Interests', href: '#interests' },
  { label: 'Contact',   href: '#contact' },
];

const TECH_STACK = [
  'React.js', 'Node.js', 'Python', 'TypeScript',
  'MongoDB', 'PostgreSQL', 'Docker', 'AWS',
];

const SOCIAL_LINKS = [
  { href: 'https://github.com/mohammedyusuf',        label: 'GitHub',   Icon: GithubIcon },
  { href: 'https://linkedin.com/in/mohammedyusuf',   label: 'LinkedIn', Icon: LinkedinIcon },
  { href: 'https://twitter.com/mohammedyusuf',       label: 'Twitter',  Icon: TwitterIcon },
  { href: 'mailto:mohammedyusuf@email.com',          label: 'Email',    Icon: EmailIcon },
];

/* ── Component ── */
const Footer = () => {
  const year = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      {/* Top glow accent line */}
      <div className="footer__glow-line" aria-hidden="true" />

      <div className="footer__body">
        <div className="container">
          <div className="footer__grid">

            {/* ── Col 1: Brand & About ── */}
            <div className="footer__col footer__col--brand">
              <a
                className="footer__logo"
                href="#home"
                onClick={(e) => handleNavClick(e, '#home')}
                aria-label="Mohammed Yusuf — Back to top"
              >
                Mohammed<span className="footer__logo-accent"> Yusuf</span>
              </a>
              <p className="footer__about">
                Full Stack Developer & UI Craftsman building exceptional digital
                experiences at the intersection of elegant design and robust engineering.
              </p>
              <div className="footer__social" aria-label="Social media links">
                {SOCIAL_LINKS.map(({ href, label, Icon }) => (
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
            </div>

            {/* ── Col 2: Quick Links ── */}
            <div className="footer__col">
              <h3 className="footer__col-title">Quick Links</h3>
              <ul className="footer__link-list" role="list">
                {QUICK_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="footer__nav-link"
                      onClick={(e) => handleNavClick(e, href)}
                    >
                      <ArrowIcon />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3: Tech Stack ── */}
            <div className="footer__col">
              <h3 className="footer__col-title">Tech Stack</h3>
              <div className="footer__tech-chips">
                {TECH_STACK.map((tech) => (
                  <span key={tech} className="footer__chip">{tech}</span>
                ))}
              </div>
            </div>

            {/* ── Col 4: Get In Touch ── */}
            <div className="footer__col footer__col--contact">
              <h3 className="footer__col-title">Get In Touch</h3>
              <p className="footer__contact-text">
                Open to exciting opportunities, collaborations, and freelance projects.
              </p>
              <a
                href="mailto:mohammedyusuf@email.com"
                className="footer__email-link"
                aria-label="Send email to Mohammed Yusuf"
              >
                <EmailIcon />
                mohammedyusuf@email.com
              </a>
              <a
                href="#contact"
                className="footer__cta-btn"
                onClick={(e) => handleNavClick(e, '#contact')}
                aria-label="Go to contact section"
              >
                Let's Connect
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {year} Mohammed Yusuf. Crafted with <span aria-hidden="true">♥</span> &amp; React
          </p>
          <p className="footer__legal">
            All rights reserved · Built with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
