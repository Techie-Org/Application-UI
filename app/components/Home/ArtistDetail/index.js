import React, { useState } from 'react';
import { ArrowLeft, Star, MapPin, Clock, TrendingUp } from 'lucide-react';
import styles from './styles.scss';
import BookingForm from '../BookingForm';

const ArtistDetail = ({ artist = {}, onBack, isAuthenticated, onLoginRequired }) => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <button type="button" onClick={onBack} className={styles.backButton}>
          <ArrowLeft className={styles.backIcon} />
          Back to Artists
        </button>

        <div className={styles.detailCard}>
          <div className={styles.imageSection}>
            <img src={artist.image_url} alt={artist.name} className={styles.heroImage} />
            {!artist.available && <div className={styles.statusBadgeLarge}>Currently Unavailable</div>}
          </div>

          <div className={styles.infoSection}>
            <div className={styles.headerRow}>
              <div>
                <h1 className={styles.artistName}>{artist.name}</h1>
                <span className={styles.categoryTag}>{artist.category}</span>
              </div>
              <div className={styles.priceHighlight}>
                $
                {artist.hourly_rate}
                <div className={styles.priceSubtext}>per hour</div>
              </div>
            </div>

            <div className={styles.statsBar}>
              <div className={styles.statItem}>
                <Star className={styles.ratingIcon} />
                <span className={styles.ratingText}>{Number(artist.rating).toFixed(1)}</span>
              </div>
              <div className={styles.statItem}>
                <TrendingUp className={styles.statIcon} />
                <span>
                  {artist.total_bookings}
                  {' '}
                  bookings
                </span>
              </div>
              <div className={styles.statItem}>
                <Clock className={styles.statIcon} />
                <span>
                  {artist.experience_years}
                  {' '}
                  years
                </span>
              </div>
            </div>

            <div className={styles.aboutSection}>
              <div className={styles.locationItem}>
                <MapPin className={styles.statIcon} />
                <span>{artist.location}</span>
              </div>
              <h2 className={styles.sectionTitle}>About</h2>
              <p className={styles.descriptionText}>{artist.description}</p>
            </div>

            {artist.skills?.length > 0 && (
              <div className={styles.skillsSection}>
                <h2 className={styles.sectionTitle}>Skills & Specialties</h2>
                <div className={styles.skillsContainer}>
                  {artist.skills.map((skill, index) => (
                    <span key={index} className={styles.skillBadge}>{skill}</span>
                  ))}
                </div>
              </div>
            )}

            <button
              type="button"
              disabled={!artist.available}
              onClick={() => (!isAuthenticated ? onLoginRequired() : setShowBookingForm(true))}
              className={`${styles.bookButton} ${artist.available ? styles.bookActive : styles.bookDisabled}`}
            >
              {artist.available ? 'Book Now' : 'Not Available'}
            </button>
          </div>
        </div>

        {showBookingForm && (
          <BookingForm artist={artist} setShowBookingForm={setShowBookingForm} />
        )}
      </div>
    </div>
  );
};

export default ArtistDetail;
