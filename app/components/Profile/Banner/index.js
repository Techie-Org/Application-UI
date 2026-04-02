import React from 'react';
import PropTypes from 'prop-types';
import { Camera } from 'lucide-react';
import styles from '../styles.scss';

const ProfileBanner = ({ avatarUrl }) => (
  <div className={styles.profileBanner}>
    <div className={styles.avatarWrapper}>
      <div className={styles.avatarContainer}>
        <img
          src={avatarUrl || 'https://ui-avatars.com/api/?name=User&background=6366f1&color=fff'}
          alt="Profile"
          className={styles.profileAvatar}
        />
        <button type="button" className={styles.cameraBtn}><Camera size={18} /></button>
      </div>
    </div>
  </div>
);

ProfileBanner.propTypes = {
  avatarUrl: PropTypes.string,
};

export default ProfileBanner;
