import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Interests', href: '#interests' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ['home', 'skills', 'education', 'interests', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container navbar__inner">
        <a className="navbar__logo" href="#home" onClick={(e) => handleNavClick(e, '#home')} aria-label="Mohammed Yusuf - Go to home">
          &lt;MY /&gt;
        </a>

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

        <a
          href="#contact"
          className="navbar__cta"
          onClick={(e) => handleNavClick(e, '#contact')}
          aria-label="Hire Me - Contact Section"
        >
          <span>✦</span> Hire Me
        </a>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : '' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : '' }} />
        </button>
      </div>

      <div className={`navbar__mobile-menu ${menuOpen ? 'open' : ''}`} role="menu">
        <ul className="navbar__mobile-links" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} role="none">
              <a
                className="navbar__mobile-link"
                href={item.href}
                role="menuitem"
                onClick={(e) => handleNavClick(e, item.href)}
              >
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
