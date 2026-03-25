import React from 'react';
import { Star, MapPin, Clock, TrendingUp } from 'lucide-react';
import styles from './styles.scss';

const ArtistCard = ({ artist, onSelect }) => (
  <div
    role="button"
    tabIndex={0}
    onClick={() => onSelect(artist)}
    className={styles.card}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') onSelect(artist);
    }}
  >
    <div className={styles.imageWrapper}>
      <img
        src={artist.image_url}
        alt={artist.name}
        className={styles.artistImage}
      />
      <div className={styles.priceBadge}>
        $
        {artist.hourly_rate}
        /hr
      </div>
      {!artist.available && (
        <div className={styles.unavailableBadge}>
          Unavailable
        </div>
      )}
    </div>

    <div className={styles.cardContent}>
      <div className="mb-2">
        <h3 className={styles.nameTitle}>{artist.name}</h3>
        <span className={styles.categoryTag}>{artist.category}</span>
      </div>

      <p className={styles.description}>{artist.description}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div className={styles.infoRow}>
          <MapPin className={styles.iconSmall} />
          <span>{artist.location}</span>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.infoRow}>
            <Clock className={styles.iconSmall} />
            <span>
              {artist.experience_years}
              {' '}
              years exp.
            </span>
          </div>

          <div className={styles.infoRow}>
            <TrendingUp className={styles.iconSmall} />
            <span>
              {artist.total_bookings}
              {' '}
              bookings
            </span>
          </div>
        </div>

        <div className={styles.cardFooter}>
          <div className={styles.ratingGroup}>
            <Star className={styles.starIcon} />
            <span className="ml-1 text-sm font-semibold text-gray-900">
              {Number(artist.rating)?.toFixed(1) || '5.0'}
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(artist);
            }}
            className={styles.detailsLink}
          >
            View Details →
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ArtistCard;
