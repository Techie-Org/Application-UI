import React, { useState } from 'react';
import styles from './styles.scss';

const BookingForm = ({ artist, isAuthenticated, onLoginRequired, setShowBookingForm }) => {
  const [loading, setLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [formData, setFormData] = useState({
    event_date: '',
    event_time: '',
    duration_hours: '2',
    event_location: '',
    event_type: '',
    notes: '',
  });

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      onLoginRequired();
      return;
    }

    try {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        onLoginRequired();
        return;
      }

      const totalPrice = artist.hourly_rate * parseFloat(formData.duration_hours);

      const { error } = await supabase.from('bookings').insert({
        artist_id: artist.id,
        user_id: user.id,
        event_date: formData.event_date,
        event_time: formData.event_time,
        duration_hours: parseFloat(formData.duration_hours),
        event_location: formData.event_location,
        event_type: formData.event_type,
        status: 'pending',
        total_price: totalPrice,
        notes: formData.notes,
      });

      if (error) throw error;

      setBookingSuccess(true);
      setTimeout(() => {
        setBookingSuccess(false);
        setShowBookingForm(false);
        setFormData({
          event_date: '',
          event_time: '',
          duration_hours: '2',
          event_location: '',
          event_type: '',
          notes: '',
        });
      }, 3000);
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to create booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = () => artist.hourly_rate * parseFloat(formData.duration_hours || '0');

  if (bookingSuccess) {
    return (
      <div className={styles.successWrapper}>
        <div className={styles.successCard}>
          <div className={styles.iconCircle}>
            <svg
              className={styles.checkIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h2 className={styles.title}>Booking Submitted!</h2>

          <p className={styles.message}>
            Your booking request has been sent to
            {' '}
            <strong>{artist.name}</strong>
            .
            You'll receive a confirmation shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>
          Book
          {artist.name}
        </h2>
        <form onSubmit={handleBookingSubmit} className={styles.formGrid}>
          <div className={styles.formGrid}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Event Date *</label>
              <input type="date" className={styles.formInput} required value={formData.event_date} min={new Date().toISOString().split('T')[0]} onChange={(e) => setFormData({ ...formData, event_date: e.target.value })} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Start Time *</label>
              <input type="time" className={styles.formInput} required value={formData.event_time} onChange={(e) => setFormData({ ...formData, event_time: e.target.value })} />
            </div>
          </div>

          {/* Other form fields follow the same styles.formInput pattern */}

          <div className={styles.summaryBox}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
              <span>Total Cost:</span>
              <span style={{ color: '#2563eb' }}>
                $
                {calculateTotal().toFixed(2)}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button type="button" onClick={() => setShowBookingForm(false)} className={styles.backButton} style={{ flex: 1, border: '1px solid #d1d5db', padding: '0.75rem', borderRadius: '0.5rem' }}>Cancel</button>
            <button type="submit" disabled={loading} className={styles.bookActive} style={{ flex: 1, padding: '0.75rem', borderRadius: '0.5rem', border: 'none' }}>
              {loading ? 'Submitting...' : 'Confirm Booking'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
