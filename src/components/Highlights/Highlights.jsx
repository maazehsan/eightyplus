import { HIGHLIGHTS } from '../../data/constants';
import './Highlights.css';

const icons = {
  coffee: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 1v3M10 1v3M14 1v3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  pastry: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2C8 2 4 6 4 10c0 2 1 4 2 5.5C7 17 8 19 8 21h8c0-2 1-4 2-5.5 1-1.5 2-3.5 2-5.5 0-4-4-8-8-8z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 21h8M12 2v4M8 6l2 2M16 6l-2 2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  beans: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="8" rx="6" ry="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 8v8c0 2.2 2.7 4 6 4s6-1.8 6-4V8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 12c0 2.2 2.7 4 6 4s6-1.8 6-4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const Highlights = () => {
  return (
    <section className="highlights">
      <div className="highlights__container">
        <header className="highlights__header">
          <p className="highlights__eyebrow">What We Offer</p>
          <h2 className="highlights__title">The Eighty Plus Experience</h2>
          <p className="highlights__subtitle">
            Quality in every detail, from bean to cup.
          </p>
        </header>

        <div className="highlights__grid">
          {HIGHLIGHTS.map((item) => (
            <article key={item.id} className="highlights__card">
              <div className="highlights__icon">
                {icons[item.icon]}
              </div>
              <h3 className="highlights__card-title">{item.title}</h3>
              <p className="highlights__card-text">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
