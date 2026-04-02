import React from 'react';
import { Pencil } from 'lucide-react';
import PropTypes from 'prop-types';
import styles from '../styles.scss';

const ProfileHeader = ({ name = 'Anonymous User', isEditing, onEditClick }) => (
  <div className={styles.headerSection}>
    <div className={styles.titleInfo}>
      <h1>{name}</h1>
      <p className={styles.userRole}>Member since 2024</p>
    </div>
    {!isEditing && (
      <button
        type="button"
        className={styles.editActionBtn}
        onClick={onEditClick}
      >
        <Pencil size={14} />
        <span>Edit Profile</span>
      </button>
    )}
  </div>
);

ProfileHeader.propTypes = {
  name: PropTypes.string,
  isEditing: PropTypes.bool.isRequired,
  onEditClick: PropTypes.func.isRequired,
};

export default ProfileHeader;
