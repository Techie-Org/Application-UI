import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import { Mail, CheckCircle, Sun, Moon } from 'lucide-react';
import styles from '../styles.scss';

const ProfileStats = ({ email, toggleTheme, currentMode }) => (
  <div className={styles.infoGrid}>
    <div className={styles.infoTile}>
      <div className={styles.tileLabel}>
        <Mail size={14} />
        Email
      </div>
      <div className={styles.tileValue}>
        {email || 'user@example.com'}
        <CheckCircle size={14} className={styles.verifiedBadge} />
      </div>
    </div>

    <Container className={`${styles.infoTile} ${styles.interactiveTile}`} onClick={toggleTheme}>
      <div className={styles.tileLabel}>
        {currentMode === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
        Appearance
      </div>
      <div className={styles.tileValue}>
        {currentMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
      </div>
    </Container>
  </div>
);

ProfileStats.propTypes = {
  email: PropTypes.string,
  toggleTheme: PropTypes.func.isRequired,
  currentMode: PropTypes.oneOf(['light', 'dark']).isRequired,
};

export default ProfileStats;
