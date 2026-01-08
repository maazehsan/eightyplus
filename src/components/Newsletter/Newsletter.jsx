import { useState } from 'react';
import Button from '../Button/Button';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Simulate success (no backend)
    setSuccess(true);
    setEmail('');
  };

  return (
    <section className="newsletter" id="contact">
      <div className="newsletter__container">
        <div className="newsletter__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h2 className="newsletter__title">Stay in the Loop</h2>
        <p className="newsletter__subtitle">
          Get updates on new seasonal drinks, events, and exclusive offers delivered to your inbox.
        </p>

        {success ? (
          <div className="newsletter__success">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="22,4 12,14.01 9,11.01" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Thank you! You're now subscribed.</span>
          </div>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
            <div className="newsletter__input-wrapper">
              <input
                type="email"
                className={`newsletter__input ${error ? 'newsletter__input--error' : ''}`}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                aria-label="Email address"
                aria-describedby={error ? 'newsletter-error' : undefined}
              />
              {error && (
                <span id="newsletter-error" className="newsletter__error" role="alert">
                  {error}
                </span>
              )}
            </div>
            <Button type="submit" variant="gold">
              Subscribe
            </Button>
          </form>
        )}

        <p className="newsletter__disclaimer">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
