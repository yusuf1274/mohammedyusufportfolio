import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <a
          className="footer__logo"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          aria-label="Mohammed Yusuf - Back to top"
        >
          &lt;MY /&gt;
        </a>

        <p className="footer__copy">
          © {year} Mohammed Yusuf. Crafted with <span>♥</span> & React
        </p>

        <div className="footer__social" aria-label="Social media links">
          {[
            { href: 'https://github.com', label: 'GitHub', icon: '⌥' },
            { href: 'https://linkedin.com', label: 'LinkedIn', icon: '⬡' },
            { href: 'https://twitter.com', label: 'Twitter', icon: '✦' },
          ].map((s) => (
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
      </div>
    </footer>
  );
};

export default Footer;
