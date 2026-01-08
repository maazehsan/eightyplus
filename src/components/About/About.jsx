import { ABOUT_CONTENT } from '../../data/constants';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__image-wrapper">
          <img
            src={ABOUT_CONTENT.image}
            alt="Inside Eighty Plus café"
            className="about__image"
            loading="lazy"
          />
          <div className="about__image-decoration"></div>
        </div>

        <div className="about__content">
          <p className="about__eyebrow">Our Story</p>
          <h2 className="about__title">{ABOUT_CONTENT.title}</h2>
          
          {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
            <p key={index} className="about__text">
              {paragraph}
            </p>
          ))}

          <div className="about__signature">
            <div className="about__signature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="about__signature-text">"Quality over quantity, always."</p>
              <p className="about__signature-author">— The Eighty Plus Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
