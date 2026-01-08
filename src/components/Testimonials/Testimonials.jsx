import { TESTIMONIALS } from '../../data/constants';
import './Testimonials.css';

const StarIcon = () => (
  <svg className="testimonial-card__star" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const TestimonialCard = ({ testimonial }) => {
  const initials = testimonial.author.split(' ').map(n => n[0]).join('');

  return (
    <article className="testimonial-card">
      <div className="testimonial-card__stars">
        {[...Array(testimonial.rating)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <blockquote className="testimonial-card__quote">
        {testimonial.quote}
      </blockquote>
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
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <header className="testimonials__header">
          <p className="testimonials__eyebrow">What People Say</p>
          <h2 className="testimonials__title">From Our Community</h2>
        </header>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
