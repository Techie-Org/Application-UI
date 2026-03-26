import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, DollarSign } from 'lucide-react';
import styles from './styles.scss';

const MyBookings = ({
  bookings = [],
}) => {
  // const [bookings, setBookings] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // fetchBookings();
  }, []);

  // const fetchBookings = async () => {
  //   try {
  //     setLoading(true);
  //     const { data: { user } } = await supabase.auth.getUser();

  //     if (!user) return;

  //     const { data, error } = await supabase
  //       .from('bookings')
  //       .select(`
  //         *,
  //         artist:artists(*)
  //       `)
  //       .eq('user_id', user.id)
  //       .order('event_date', { ascending: false });

  //     if (error) throw error;

  //     setBookings(data);
  //   } catch (error) {
  //     console.error('Error fetching bookings:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  console.log('bookings: ', { bookings });

  const filteredBookings = filter === 'all'
    ? bookings
    : bookings.filter((booking) => booking.status === filter);

  // const getStatusColor = (status) => {
  //   switch (status) {
  //     case 'pending':
  //       return 'bg-yellow-100 text-yellow-800';
  //     case 'confirmed':
  //       return 'bg-green-100 text-green-800';
  //     case 'completed':
  //       return 'bg-blue-100 text-blue-800';
  //     case 'cancelled':
  //       return 'bg-red-100 text-red-800';
  //     default:
  //       return 'bg-gray-100 text-gray-800';
  //   }
  // };

  // if (loading) {
  //   return (
  //     <div className={styles.container}>
  //       <div className={styles.spinner}></div>
  //     </div>
  //   );
  // }

  const getStatusClass = (status) => {
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
              No
              {filter}
              {' '}
              bookings at the moment.
            </p>
          </div>
        ) : (
          <div className={styles.bookingList}>
            {filteredBookings.map((booking) => (
              <div key={booking.id} className={styles.bookingCard}>
                <div className={styles.cardFlex}>
                  <div className={styles.imageContainer}>
                    <img src={booking.artist.image_url} alt={booking.artist.name} className={styles.artistImg} />
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <div>
                        <h3 className={styles.artistName}>{booking.artist.name}</h3>
                        <span className={styles.categoryTag}>{booking.artist.category}</span>
                      </div>
                      <span className={`${styles.statusBadge} ${getStatusClass(booking.status)}`}>
                        {booking.status}
                      </span>
                    </div>

                    <div className={styles.detailGrid}>
                      <div className={styles.detailItem}>
                        <Calendar className={styles.icon} />
                        <div>
                          <div className={styles.labelSmall}>Event Date</div>
                          <div className={styles.valueBold}>
                            {new Date(booking.event_date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <div className={styles.detailItem}>
                        <Clock className={styles.icon} />
                        <div>
                          <div className={styles.labelSmall}>Time & Duration</div>
                          <div className={styles.valueBold}>
                            {booking.event_time}
                            {' '}
                            (
                            {booking.duration_hours}
                            h)
                          </div>
                        </div>
                      </div>
                      <div className={styles.detailItem}>
                        <MapPin className={styles.icon} />
                        <div>
                          <div className={styles.locationLabel}>Location</div>
                          <div className={styles.valueBold}>{booking.event_location}</div>
                        </div>
                      </div>
                      <div className={styles.detailItem}>
                        <DollarSign className={styles.icon} />
                        <div>
                          <div className={styles.costLabel}>Total Cost</div>
                          <div className={styles.priceValue}>
                            $
                            {Number(booking.total_price).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>

                    {booking.event_type && (
                      <div className={styles.eventTypeRow}>
                        <span className={styles.labelSecondary}>Event Type: </span>
                        <span className={styles.valuePrimary}>
                          {booking.event_type}
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

export default MyBookings;
