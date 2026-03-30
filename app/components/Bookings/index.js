import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, DollarSign } from 'lucide-react';
import PropTypes from 'prop-types';
import { history } from 'utils/browserHistory';
import styles from './styles.scss';

const MyBookings = ({
  fetchBookings,
  bookings = [],
  isUserLoggedIn = false,
  isUserProfileLoaded,
  userProfile,
}) => {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (isUserProfileLoaded) {
      if (!isUserLoggedIn) {
        history.navigate('/account');
      }
      fetchBookings({ userEmail: userProfile?.email }); // need to use dynamic property to fetch user bookings --> userProfile?.email
    }
  }, [isUserLoggedIn, isUserProfileLoaded]);

  const filteredBookings = filter === 'all'
    ? bookings
    : bookings.filter((booking) => booking.status === filter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return styles.statusPending;
      case 'confirmed':
        return styles.statusConfirmed;
      case 'completed':
        return styles.statusCompleted;
      case 'cancelled':
        return styles.statusCancelled;
      default:
        return styles.statusDefault;
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.headerSection}>
          <h1 className={styles.title}>My Bookings</h1>
          <p className={styles.subtitle}>Manage and track all your artist bookings</p>
        </div>

        <div className={styles.filterCard}>
          <div className={styles.filterGroup}>
            {['all', 'pending', 'confirmed', 'completed'].map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`${styles.filterBtn} ${filter === f ? styles.btnActive : styles.btnInactive}`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
                {' '}
                (
                {f === 'all' ? bookings.length : bookings.filter((b) => b.status === f).length}
                )
              </button>
            ))}
          </div>
        </div>

        {filteredBookings.length === 0 ? (
          <div className={styles.emptyState}>
            <Calendar className={styles.emptyIcon} />
            <h3 className={styles.emptyTitle}>No bookings found</h3>
            <p className={styles.subtitle}>
              {`No ${filter} bookings at the moment.`}
            </p>
          </div>
        ) : (
          <div className={styles.bookingList}>
            {filteredBookings.map((booking) => (
              <div key={booking.bookingId} className={styles.bookingCard}>
                <div className={styles.cardFlex}>
                  <div className={styles.imageContainer}>
                    <img src={booking.artist.imageUrl} alt={booking.artist.name} className={styles.artistImg} />
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <div>
                        <h3 className={styles.artistName}>{booking.artist.name}</h3>
                        <span className={styles.categoryTag}>{booking.artist.category}</span>
                      </div>
                      <span className={`${styles.statusBadge} ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </div>

                    <div className={styles.detailGrid}>
                      <div className={styles.detailItem}>
                        <Calendar className={styles.icon} />
                        <div>
                          <div className={styles.labelSmall}>Event Date</div>
                          <div className={styles.valueBold}>
                            {new Date(booking.eventDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <div className={styles.detailItem}>
                        <Clock className={styles.icon} />
                        <div>
                          <div className={styles.labelSmall}>Time & Duration</div>
                          <div className={styles.valueBold}>
                            {booking.eventTime}
                            {' '}
                            (
                            {booking.durationHours}
                            h)
                          </div>
                        </div>
                      </div>
                      <div className={styles.detailItem}>
                        <MapPin className={styles.icon} />
                        <div>
                          <div className={styles.locationLabel}>Location</div>
                          <div className={styles.valueBold}>{booking.eventLocation}</div>
                        </div>
                      </div>
                      <div className={styles.detailItem}>
                        <DollarSign className={styles.icon} />
                        <div>
                          <div className={styles.costLabel}>Total Cost</div>
                          <div className={styles.priceValue}>
                            $
                            {Number(booking.totalPrice).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>

                    {booking.eventType && (
                      <div className={styles.eventTypeRow}>
                        <span className={styles.labelSecondary}>Event Type: </span>
                        <span className={styles.valuePrimary}>
                          {booking.eventType}
                        </span>
                      </div>
                    )}

                    {booking.notes && (
                      <div className={styles.notesBox}>
                        <div className={styles.notesLabel}>Notes:</div>
                        <p className={styles.notesText}>{booking.notes}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

MyBookings.propTypes = {
  fetchBookings: PropTypes.func.isRequired,
  bookings: PropTypes.array.isRequired,
  isUserLoggedIn: PropTypes.bool,
  isUserProfileLoaded: PropTypes.bool,
  userProfile: PropTypes.object,
};

export default MyBookings;
