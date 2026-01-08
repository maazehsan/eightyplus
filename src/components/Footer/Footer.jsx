import { NAV_LINKS, SOCIAL_LINKS, LOCATION_INFO } from '../../data/constants';
import './Footer.css';

const socialIcons = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const ArrowIcon = () => (
  <svg className="footer__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="12,5 19,12 12,19" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="/" className="footer__logo">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 12h12v8a6 6 0 01-6 6 6 6 0 01-6-6v-8z" fill="currentColor"/>
                <path d="M22 14h2a3 3 0 010 6h-2" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 8c0-2 1-3 2-3s2 1 2 0 1-3 2-3 2 1 2 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Eighty Plus
            </a>
            <p className="footer__tagline">
              Single-origin beans, artisan roasting, and a calm space crafted for those who appreciate the finer details.
            </p>
            <div className="footer__social">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.platform}`}
                >
                  {socialIcons[social.icon]}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__column">
            <h3 className="footer__column-title">Quick Links</h3>
            <nav className="footer__links">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="footer__link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <ArrowIcon />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer__column">
            <h3 className="footer__column-title">Hours</h3>
            <div className="footer__links">
              {LOCATION_INFO.hours.map((item, index) => (
                <span key={index} className="footer__link" style={{ cursor: 'default' }}>
                  {item.day}: {item.time}
                </span>
              ))}
            </div>
          </div>

          <div className="footer__column">
            <h3 className="footer__column-title">Contact</h3>
            <div className="footer__links">
              <span className="footer__link" style={{ cursor: 'default' }}>
                {LOCATION_INFO.address}
              </span>
              <span className="footer__link" style={{ cursor: 'default' }}>
                {LOCATION_INFO.city}
              </span>
              <a href={`tel:${LOCATION_INFO.phone.replace(/[^0-9]/g, '')}`} className="footer__link">
                <ArrowIcon />
                {LOCATION_INFO.phone}
              </a>
              <a href={`mailto:${LOCATION_INFO.email}`} className="footer__link">
                <ArrowIcon />
                {LOCATION_INFO.email}
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Eighty Plus Coffee. All rights reserved.
          </p>
          <nav className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <a href="#" className="footer__legal-link">Terms of Service</a>
            <a href="#" className="footer__legal-link">Accessibility</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
