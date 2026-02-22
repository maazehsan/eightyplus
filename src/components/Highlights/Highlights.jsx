import { HIGHLIGHTS } from '../../data/constants';
import './Highlights.css';

const ArrowIcon = () => (
  <svg className="highlights__card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="7" y1="17" x2="17" y2="7" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="7,7 17,7 17,17" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Highlights = () => {
  return (
    <section className="highlights">
      <div className="highlights__container">
        <header className="highlights__header">
          <div className="highlights__title-group">
            <span className="highlights__eyebrow">What We Offer</span>
            <h2 className="highlights__title">The Experience</h2>
          </div>
          <p className="highlights__subtitle">
            Quality in every detail, from the selection of beans to the final pour.
          </p>
        </header>

        <div className="highlights__grid">
          {HIGHLIGHTS.map((item, index) => (
            <article key={item.id} className="highlights__card">
              <div className="highlights__card-content">
                <span className="highlights__number">
                  0{index + 1}
                </span>
                <h3 className="highlights__card-title">{item.title}</h3>
                <p className="highlights__card-text">{item.description}</p>
              </div>
              <ArrowIcon />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
