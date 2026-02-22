import { useState } from 'react';
import { TESTIMONIALS } from '../../data/constants';
import './Testimonials.css';

const StarIcon = () => (
  <svg className="testimonial-card__star" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const ArrowIcon = ({ direction }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {direction === 'left' ? (
      <polyline points="15,18 9,12 15,6"/>
    ) : (
      <polyline points="9,6 15,12 9,18"/>
    )}
  </svg>
);

const TestimonialCard = ({ testimonial }) => {
  const initials = testimonial.author.split(' ').map(n => n[0]).join('');

  return (
    <article className="testimonial-card">
      <span className="testimonial-card__quote-mark">"</span>
      <blockquote className="testimonial-card__quote">
        {testimonial.quote}
      </blockquote>
      <div className="testimonial-card__stars">
        {[...Array(testimonial.rating)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <div className="testimonial-card__author">
        <div className="testimonial-card__avatar">{initials}</div>
        <div>
          <p className="testimonial-card__name">{testimonial.author}</p>
          <p className="testimonial-card__role">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const canGoLeft = currentIndex > 0;
  const canGoRight = currentIndex < TESTIMONIALS.length - 1;

  const goLeft = () => {
    if (canGoLeft) setCurrentIndex(currentIndex - 1);
  };

  const goRight = () => {
    if (canGoRight) setCurrentIndex(currentIndex + 1);
  };

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <header className="testimonials__header">
          <div className="testimonials__title-group">
            <p className="testimonials__eyebrow">What People Say</p>
            <h2 className="testimonials__title">From Our Community</h2>
          </div>
          <div className="testimonials__nav">
            {canGoLeft && (
              <button className="testimonials__nav-btn" onClick={goLeft} aria-label="Previous testimonial">
                <ArrowIcon direction="left" />
              </button>
            )}
            {canGoRight && (
              <button className="testimonials__nav-btn" onClick={goRight} aria-label="Next testimonial">
                <ArrowIcon direction="right" />
              </button>
            )}
          </div>
        </header>

        {/* Desktop Grid */}
        <div className="testimonials__grid">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="testimonials__carousel">
          <div 
            className="testimonials__carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="testimonials__carousel-slide">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
          <div className="testimonials__dots">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={`testimonials__dot ${index === currentIndex ? 'testimonials__dot--active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
