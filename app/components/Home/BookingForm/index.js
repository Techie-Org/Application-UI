import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonWithSpinner from 'components/_DesignWrappers/ButtonWithSpinner';
import styles from './styles.scss';

const BookingForm = ({
  artist,
  // isUserLoggedIn,
  // onLoginRequired,
  setShowBookingForm,
  confirmBooking,
  confirmBookingLoading,
  // confirmBookingSuccess,
  userProfile,
}) => {
  const [formData, setFormData] = useState({
    eventDate: '',
    eventTime: '',
    durationHours: '2',
    eventLocation: '',
    eventType: '',
    notes: '',
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    // if (!isUserLoggedIn) {
    //   // onLoginRequired();
    //   return;
    // }

    const totalPrice = artist.hourlyRate * parseFloat(formData.durationHours);
    const bookingDetails = {
      artistId: artist.artistId,
      userEmail: userProfile.email, // Change to userEmail --> To fetch user in the backend
      eventDate: formData.eventDate,
      eventTime: formData.eventTime,
      durationHours: parseFloat(formData.durationHours),
      eventLocation: formData.eventLocation,
      eventType: formData.eventType,
      status: 'pending',
      totalPrice,
      notes: formData.notes,
    };

    confirmBooking(bookingDetails);

    // setBookingSuccess(true);
    //   setTimeout(() => {
    //     setBookingSuccess(false);
    //     setShowBookingForm(false);
    //     setFormData({
    //       eventDate: '',
    //       eventTime: '',
    //       durationHours: '2',
    //       eventLocation: '',
    //       eventType: '',
    //       notes: '',
    //     });
    //   }, 3000);
    // } catch (error) {
    //   console.error('Error creating booking:', error);
    //   alert('Failed to create booking. Please try again.');
    // } finally {
    // setLoading(false);
    // }
  };

  const calculateTotal = () => artist.hourlyRate * parseFloat(formData.durationHours || '0');

  // if (confirmBookingSuccess) {
  //   return (
  //     <div className={styles.successWrapper}>
  //       <div className={styles.successCard}>
  //         <div className={styles.iconCircle}>
  //           <svg
  //             className={styles.checkIcon}
  //             fill="none"
  //             stroke="currentColor"
  //             viewBox="0 0 24 24"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth={2}
  //               d="M5 13l4 4L19 7"
  //             />
  //           </svg>
  //         </div>

  //         <h2 className={styles.title}>Booking Submitted!</h2>

  //         <p className={styles.message}>
  //           {`Your booking request has been sent to ${
  //             <strong>
  //               {' '}
  //               $
  //               {artist.name}
  //             </strong>}
  //           . You'll receive a confirmation shortly.`}
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

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
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className={styles.inputField}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Start Time *</label>
                <input
                  type="time"
                  required
                  value={formData.eventTime}
                  onChange={(e) => setFormData({ ...formData, eventTime: e.target.value })}
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
                value={formData.durationHours}
                onChange={(e) => setFormData({ ...formData, durationHours: e.target.value })}
                className={styles.inputField}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Event Location *</label>
              <input
                type="text"
                required
                placeholder="Enter the venue address"
                value={formData.eventLocation}
                onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                className={styles.inputField}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Event Type</label>
              <select
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
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
                {formData.durationHours}
                {' '}
                hours × $
                {artist.hourlyRate}
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
              <ButtonWithSpinner
                type="submit"
                spinOn={confirmBookingLoading}
                disabled={confirmBookingLoading}
                className={`${styles.btnBase} ${styles.btnSubmit}`}
              >
                {confirmBookingLoading ? 'Submitting...' : 'Confirm Booking'}
              </ButtonWithSpinner>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

BookingForm.propTypes = {
  artist: PropTypes.object,
  // isUserLoggedIn: PropTypes.bool,
  // onLoginRequired: PropTypes.func,
  setShowBookingForm: PropTypes.func,
  confirmBooking: PropTypes.func,
  confirmBookingLoading: PropTypes.func,
  // confirmBookingSuccess: PropTypes.func,
  userProfile: PropTypes.func,
};

export default BookingForm;
