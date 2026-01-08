import { FEATURED_ITEMS } from '../../data/constants';
import Button from '../Button/Button';
import './Featured.css';

const FeaturedCard = ({ item }) => {
  const getTagClass = (tag) => {
    if (!tag) return '';
    const tagLower = tag.toLowerCase();
    if (tagLower === 'seasonal') return 'featured-card__tag--seasonal';
    if (tagLower === 'new') return 'featured-card__tag--new';
    return '';
  };

  return (
    <article className="featured-card">
      <div className="featured-card__image-wrapper">
        <img
          src={item.image}
          alt={item.name}
          className="featured-card__image"
          loading="lazy"
        />
        {item.tag && (
          <span className={`featured-card__tag ${getTagClass(item.tag)}`}>
            {item.tag}
          </span>
        )}
      </div>
      <div className="featured-card__content">
        <div className="featured-card__header">
          <h3 className="featured-card__name">{item.name}</h3>
          <span className="featured-card__price">{item.price}</span>
        </div>
        <p className="featured-card__description">{item.description}</p>
      </div>
    </article>
  );
};

const Featured = () => {
  return (
    <section className="featured" id="menu">
      <div className="featured__container">
        <header className="featured__header">
          <div className="featured__header-content">
            <p className="featured__eyebrow">Our Menu</p>
            <h2 className="featured__title">Featured Selections</h2>
            <p className="featured__subtitle">
              Crafted with care, served with pride.
            </p>
          </div>
          <Button variant="secondary" href="#contact">
            Full Menu
          </Button>
        </header>

        <div className="featured__grid">
          {FEATURED_ITEMS.map((item) => (
            <FeaturedCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
