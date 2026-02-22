import { useState } from 'react';
import './Newsletter.css';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12,5 19,12 12,19"/>
  </svg>
);

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <section className="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__content">
          <p className="newsletter__eyebrow">Stay Connected</p>
          <h2 className="newsletter__title">Join the Club</h2>
          <p className="newsletter__text">
            Weekly brewing tips, new arrivals, and exclusive offers
            delivered to your inbox.
          </p>
        </div>

        <div className="newsletter__form-wrapper">
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="newsletter__input"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button type="submit" className="newsletter__submit">
              Subscribe
              <ArrowIcon />
            </button>
          </form>
          <p className="newsletter__privacy">
            By subscribing you agree to our <a href="/privacy">Privacy Policy</a>
          </p>
        </div>
      </div>

      <span className="newsletter__decoration">80+</span>
    </section>
  );
};

export default Newsletter;
