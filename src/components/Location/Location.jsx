import { LOCATION_INFO } from '../../data/constants';
import Button from '../Button/Button';
import './Location.css';

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const Location = () => {
  const hours = [
    { day: 'Mon-Fri', time: '7:00 - 20:00' },
    { day: 'Saturday', time: '8:00 - 21:00' },
    { day: 'Sunday', time: '8:00 - 18:00' },
    { day: 'Holidays', time: '9:00 - 17:00' },
  ];

  return (
    <section className="location" id="location">
      <div className="location__info">
        <span className="location__eyebrow">Find Us</span>
        <h2 className="location__title">Visit Our Space</h2>
        
        <div className="location__details">
          <div className="location__detail">
            <div className="location__detail-icon">
              <MapPinIcon />
            </div>
            <div>
              <p className="location__detail-label">Address</p>
              <p className="location__detail-value">
                {LOCATION_INFO.address}<br />{LOCATION_INFO.city}
              </p>
            </div>
          </div>
          
          <div className="location__detail">
            <div className="location__detail-icon">
              <ClockIcon />
            </div>
            <div>
              <p className="location__detail-label">Hours</p>
              <div className="location__hours-grid">
                {hours.map((item) => (
                  <div key={item.day} className="location__hours-item">
                    <span>{item.day}</span>
                    <span>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="location__detail">
            <div className="location__detail-icon">
              <PhoneIcon />
            </div>
            <div>
              <p className="location__detail-label">Contact</p>
              <p className="location__detail-value">
                {LOCATION_INFO.phone}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="location__map-side">
        <div className="location__map-placeholder">
          <div className="location__map-content">
            <div className="location__map-pin">
              <MapPinIcon />
            </div>
            <p className="location__map-label">EightyPlus</p>
            <p className="location__map-sublabel">Coffee Lab</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
