import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../data/constants';
import Button from '../Button/Button';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--solid' : 'navbar--transparent'}`}>
      <div className="navbar__container">
        <a href="/" className="navbar__logo">
          <svg className="navbar__logo-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2"/>
            <path d="M10 12h12v8a6 6 0 01-6 6 6 6 0 01-6-6v-8z" fill="currentColor"/>
            <path d="M22 14h2a3 3 0 010 6h-2" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 8c0-2 1-3 2-3s2 1 2 0 1-3 2-3 2 1 2 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Eighty Plus
        </a>

        <nav className="navbar__nav">
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar__link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#menu" onClick={(e) => handleNavClick(e, '#menu')}>
            View Menu
          </Button>
          
          <button
            className={`navbar__menu-btn ${isMobileOpen ? 'navbar__menu-btn--open' : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

        <nav className={`navbar__mobile-nav ${isMobileOpen ? 'navbar__mobile-nav--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <Button href="#menu" onClick={(e) => handleNavClick(e, '#menu')} fullWidth>
            View Menu
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
