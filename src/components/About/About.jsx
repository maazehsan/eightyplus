import { ABOUT_CONTENT } from '../../data/constants';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__image-side">
        <img
          src={ABOUT_CONTENT.image}
          alt="Inside Eighty Plus café"
          className="about__image"
          loading="lazy"
        />
        <div className="about__image-overlay"></div>
        <span className="about__image-text">80+</span>
      </div>

      <div className="about__content-side">
        <span className="about__eyebrow">Our Story</span>
        <h2 className="about__title">{ABOUT_CONTENT.title}</h2>
        
        {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
          <p key={index} className="about__text">
            {paragraph}
          </p>
        ))}

        <div className="about__divider"></div>

        <div className="about__signature">
          <div className="about__signature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p className="about__signature-text">"Quality over quantity, always."</p>
            <p className="about__signature-author">The Eighty Plus Team</p>
          </div>
        </div>

        <div className="about__stats">
          <div className="about__stat">
            <span className="about__stat-number">80+</span>
            <span className="about__stat-label">Coffee Score</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">12</span>
            <span className="about__stat-label">Origin Countries</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">5</span>
            <span className="about__stat-label">Years Brewing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
