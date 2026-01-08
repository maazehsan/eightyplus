import { LOCATION_INFO } from '../../data/constants';
import './Location.css';

const MapIcon = () => (
  <svg className="location__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className="location__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MailIcon = () => (
  <svg className="location__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Location = () => {
  // Simple check if open (demo only)
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();
  const isWeekday = day >= 1 && day <= 5;
  const isSaturday = day === 6;
  const isOpen = (isWeekday && hour >= 7 && hour < 19) || 
                 (isSaturday && hour >= 8 && hour < 20) ||
                 (day === 0 && hour >= 8 && hour < 18);

  return (
    <section className="location" id="location">
      <div className="location__container">
        <div className="location__content">
          <p className="location__eyebrow">Find Us</p>
          <h2 className="location__title">Visit Eighty Plus</h2>

          <div className="location__info">
            <div className="location__item">
              <MapIcon />
              <div>
                <p className="location__label">Address</p>
                <p className="location__value">
                  {LOCATION_INFO.address}<br />
                  {LOCATION_INFO.city}
                </p>
              </div>
            </div>

            <div className="location__item">
              <PhoneIcon />
              <div>
                <p className="location__label">Phone</p>
                <p className="location__value">
                  <a href={`tel:${LOCATION_INFO.phone.replace(/[^0-9]/g, '')}`}>
                    {LOCATION_INFO.phone}
                  </a>
                </p>
              </div>
            </div>

            <div className="location__item">
              <MailIcon />
              <div>
                <p className="location__label">Email</p>
                <p className="location__value">
                  <a href={`mailto:${LOCATION_INFO.email}`}>
                    {LOCATION_INFO.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="location__hours">
            <h3 className="location__hours-title">Hours</h3>
            <div className="location__hours-list">
              {LOCATION_INFO.hours.map((item, index) => (
                <div key={index} className="location__hours-row">
                  <span className="location__hours-day">{item.day}</span>
                  <span className="location__hours-time">{item.time}</span>
                </div>
              ))}
            </div>
            <div className="location__status">
              <span className="location__status-dot"></span>
              {isOpen ? 'Open Now' : 'Currently Closed'}
            </div>
          </div>
        </div>

        <div className="location__map-wrapper">
          <iframe
            className="location__map"
            src={LOCATION_INFO.mapEmbed}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Eighty Plus Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
