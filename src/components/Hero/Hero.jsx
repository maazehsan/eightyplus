import Button from '../Button/Button';
import './Hero.css';

const ArrowIcon = () => (
  <svg className="hero__cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="12,5 19,12 12,19" strokeLinecap="round" strokeLinejoin="round"/>
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

  const marqueeContent = "Single Origin • Artisan Roasted • Fresh Daily • Brooklyn NY • Est. 2020 • Specialty Coffee • ";

  return (
    <section className="hero" id="home">
      <div className="hero__topbar">
        <span className="hero__topbar-item">Brooklyn, NY</span>
        <span className="hero__topbar-item">Est. 2020</span>
        <span className="hero__topbar-item">Specialty Coffee</span>
      </div>

      <div className="hero__main">
        <div className="hero__content">
          <span className="hero__eyebrow">Premium Coffee Experience</span>
          
          <h1 className="hero__title">
            Where Every<br />
            Cup Tells a<br />
            <span className="hero__title-accent">Story</span>
          </h1>
          
          <p className="hero__subtitle">
            Single-origin beans, artisan roasting, and a calm space crafted for those who appreciate the finer details.
          </p>
          
          <div className="hero__cta">
            <Button href="#menu" size="lg" onClick={(e) => handleNavClick(e, '#menu')}>
              <span>View Menu</span>
            </Button>
            <a 
              href="#location" 
              className="hero__cta-link"
              onClick={(e) => handleNavClick(e, '#location')}
            >
              Visit Us
              <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__number">EightyPlus</div>
          <div className="hero__image-container">
            <img
              src="https://fruitbasket.limepack.com/blog/wp-content/uploads/2024/03/pexels-jason-toevs-2068296.jpg"
              alt="Barista crafting coffee"
              className="hero__image"
            />
            <div className="hero__image-overlay"></div>
            <span className="hero__image-caption">Crafted with intention</span>
          </div>
        </div>
      </div>

      <div className="hero__marquee">
        <div className="hero__marquee-track">
          <span className="hero__marquee-text">
            {marqueeContent}{marqueeContent}{marqueeContent}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
