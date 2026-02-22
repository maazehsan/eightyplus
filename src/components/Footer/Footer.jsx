import { NAV_LINKS, LOCATION_INFO } from '../../data/constants';
import './Footer.css';

// Social Icons
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: 'Our Story', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Press', href: '#press' },
    { label: 'Sustainability', href: '#sustainability' },
  ];

  const supportLinks = [
    { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Shipping', href: '#shipping' },
    { label: 'Returns', href: '#returns' },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <h3 className="footer__logo">EightyPlus</h3>
            <p className="footer__tagline">
              Specialty coffee scoring 80+ points. Every cup, a craft.
            </p>
            <div className="footer__socials">
              <a href="#instagram" className="footer__social-link" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#twitter" className="footer__social-link" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#facebook" className="footer__social-link" aria-label="Facebook">
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Company</h4>
            <nav className="footer__links">
              {companyLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer__link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Support</h4>
            <nav className="footer__links">
              {supportLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer__link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Contact</h4>
            <div className="footer__contact-item">
              <MapPinIcon />
              <span>
                {LOCATION_INFO.address}<br />
                {LOCATION_INFO.city}
              </span>
            </div>
            <div className="footer__contact-item">
              <PhoneIcon />
              <span>{LOCATION_INFO.phone}</span>
            </div>
            <div className="footer__contact-item">
              <MailIcon />
              <span>hello@eightyplus.co</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Eighty Plus Coffee. All rights reserved.
          </p>
          <nav className="footer__legal">
            <a href="#privacy" className="footer__legal-link">Privacy Policy</a>
            <a href="#terms" className="footer__legal-link">Terms of Service</a>
            <a href="#cookies" className="footer__legal-link">Cookies</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
