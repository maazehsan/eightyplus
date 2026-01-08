import { HERO_CONTENT } from '../../data/constants';
import Button from '../Button/Button';
import './Hero.css';

const CheckIcon = () => (
  <svg className="hero__badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CoffeeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 1v3M10 1v3M14 1v3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Hero = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero__background">
        <img
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop&q=80"
          alt=""
          className="hero__background-image"
          loading="eager"
        />
        <div className="hero__background-overlay"></div>
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">Est. 2020</span>
          <h1 className="hero__title">
            Where Every Cup <br />
            Tells a <span>Story</span>
          </h1>
          <p className="hero__subtitle">
            {HERO_CONTENT.subheadline}
          </p>
          
          <div className="hero__cta">
            <Button href="#menu" size="lg" onClick={(e) => handleNavClick(e, '#menu')}>
              View Menu
            </Button>
            <Button href="#location" variant="secondary" size="lg" onClick={(e) => handleNavClick(e, '#location')}>
              Get Directions
            </Button>
          </div>

          <div className="hero__badges">
            {HERO_CONTENT.trustBadges.map((badge, index) => (
              <div key={index} className="hero__badge">
                <CheckIcon />
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className="hero__image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=1000&fit=crop&q=80"
            alt="Barista pouring latte art"
            className="hero__image"
          />
          <div className="hero__image-accent"></div>
          <div className="hero__image-badge">
            <div className="hero__image-badge-icon">
              <CoffeeIcon />
            </div>
            <div>
              <div className="hero__image-badge-text">80+</div>
              <div className="hero__image-badge-subtext">Score Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
