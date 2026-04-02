import React from 'react';
import { Phone, Venus, Mars } from 'lucide-react';
import PropTypes from 'prop-types';
import styles from '../styles.scss';

// Read-only view
export const ProfileDetails = ({ phone, gender }) => {
  // Helper to display fallback text if value is empty
  const renderValue = (value, placeholder = 'Not Set') => value && value.trim() !== '' ? (
    value
  ) : (
    <span className={styles.placeholderText}>{placeholder}</span>
  );

  return (
    <div className={styles.detailsList}>
      <DetailRow
        icon={<Phone size={18} />}
        label="Phone"
        value={renderValue(phone, 'No contact added')}
      />
      <DetailRow
        icon={gender === 'Female' ? <Venus size={18} /> : <Mars size={18} />}
        label="Gender"
        value={renderValue(gender, 'Gender not specified')}
      />
    </div>
  );
};

const DetailRow = ({ icon, label, value }) => (
  <div className={styles.detailRow}>
    <div className={styles.iconBox}>{icon}</div>
    <div className={styles.textStack}>
      <span className={styles.rowLabel}>{label}</span>
      <span className={styles.rowValue}>{value}</span>
    </div>
  </div>
);

ProfileDetails.propTypes = {
  phone: PropTypes.string,
  gender: PropTypes.string,
};

DetailRow.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ProfileDetails;
