import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Home',      href: '#home' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Interests', href: '#interests' },
  { label: 'Contact',   href: '#contact' },
];

const Navbar = () => {
  const [scrolled,       setScrolled]       = useState(false);
  const [activeSection,  setActiveSection]  = useState('home');
  const [menuOpen,       setMenuOpen]       = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'skills', 'education', 'interests', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container navbar__inner">
        {/* Logo */}
        <a
          className="navbar__logo"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          aria-label="Mohammed Yusuf — Back to top"
        >
          Mohammed Yusuf
        </a>

        {/* Desktop links */}
        <ul className="navbar__links" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                className={`navbar__link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me CTA */}
        <a
          href="#contact"
          className="navbar__cta"
          onClick={(e) => handleNavClick(e, '#contact')}
          aria-label="Hire Me — Contact Section"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
            <polygon points="6,1 11,10 1,10" />
          </svg>
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : '' }} />
          <span style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : '' }} />
          <span style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : '' }} />
        </button>
      </div>

      {/* Mobile menu — smooth height transition */}
      <div
        id="mobile-menu"
        className={`navbar__mobile-menu ${menuOpen ? 'open' : ''}`}
        role="menu"
        aria-hidden={!menuOpen}
      >
        <ul className="navbar__mobile-links" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} role="none">
              <a
                className={`navbar__mobile-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                href={item.href}
                role="menuitem"
                onClick={(e) => handleNavClick(e, item.href)}
                aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
              >
                {/* Dot indicator */}
                <span
                  aria-hidden="true"
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: activeSection === item.href.slice(1)
                      ? 'var(--color-primary-light)'
                      : 'var(--color-border-hover)',
                    flexShrink: 0,
                    transition: 'background 0.3s ease',
                  }}
                />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
