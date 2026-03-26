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
    <div className={styles.overlay}>
      <div className={styles.modalContent}>
        <div className={styles.innerPadding}>
          <h2 className={styles.modalTitle}>
            Book
            {artist.name}
          </h2>

          <form onSubmit={handleBookingSubmit}>
            <div className={styles.twoColumnGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Event Date *</label>
                <input
                  type="date"
                  required
                  value={formData.event_date}
                  onChange={(e) => setFormData({ ...formData, event_date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className={styles.inputField}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Start Time *</label>
                <input
                  type="time"
                  required
                  value={formData.event_time}
                  onChange={(e) => setFormData({ ...formData, event_time: e.target.value })}
                  className={styles.inputField}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Duration (hours) *</label>
              <input
                type="number"
                required
                min="1"
                step="0.5"
                value={formData.duration_hours}
                onChange={(e) => setFormData({ ...formData, duration_hours: e.target.value })}
                className={styles.inputField}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Event Location *</label>
              <input
                type="text"
                required
                placeholder="Enter the venue address"
                value={formData.event_location}
                onChange={(e) => setFormData({ ...formData, event_location: e.target.value })}
                className={styles.inputField}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Event Type</label>
              <select
                value={formData.event_type}
                onChange={(e) => setFormData({ ...formData, event_type: e.target.value })}
                className={styles.inputField}
              >
                <option value="">Select event type</option>
                <option value="Wedding">Wedding</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Birthday Party">Birthday Party</option>
                <option value="Concert">Concert</option>
                <option value="Private Party">Private Party</option>
                <option value="Festival">Festival</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Additional Notes</label>
              <textarea
                rows={4}
                placeholder="Any special requests or details about your event..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className={`${styles.inputField} ${styles.textarea}`}
              />
            </div>

            <div className={styles.summaryBox}>
              <div className={styles.summaryRow}>
                <span className={styles.totalLabel}>Total Cost:</span>
                <span className={styles.totalPrice}>
                  $
                  {calculateTotal().toFixed(2)}
                </span>
              </div>
              <p className={styles.calculationText}>
                {formData.duration_hours}
                {' '}
                hours × $
                {artist.hourly_rate}
                /hour
              </p>
            </div>

            <div className={styles.buttonGroup}>
              <button
                type="button"
                onClick={() => setShowBookingForm(false)}
                className={`${styles.btnBase} ${styles.btnCancel}`}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`${styles.btnBase} ${styles.btnSubmit}`}
              >
                {loading ? 'Submitting...' : 'Confirm Booking'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
