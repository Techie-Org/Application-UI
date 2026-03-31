import React, { useState } from 'react';
import { User, ChevronDown, Calendar, Settings, LogOut } from 'lucide-react';
import { Container } from '@mui/material';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const UserMenu = ({ onNavigate, logoutUser, userProfileData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const handleItemClick = (action) => {
    console.log(`Navigating to: ${action}`);
    closeDropdown();
  };

  return (
    <nav className={styles.navbar}>
      {/* <div className={styles.navLogo}>TravelEase</div> */}

      <Container className={styles.userMenuWrapper}>
        <button
          type="button"
          className={`${styles.userTrigger} ${isOpen ? styles.active : ''}`}
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <div className={styles.avatarCircle}>
            <User size={18} strokeWidth={2.5} />
          </div>
          <span className={styles.welcomeText}>
            {`Hi, ${userProfileData?.name}`}
          </span>
          <ChevronDown
            className={`${styles.chevron} ${isOpen ? styles.rotate : ''}`}
            size={16}
          />
        </button>

        {isOpen && (
          <>
            {/* 1. Transparent Backdrop: Captures clicks anywhere else to close */}
            <Container className={styles.backdrop} onClick={closeDropdown} />

            {/* 2. The Menu */}
            <div className={styles.dropdownCard}>
              <ul className={styles.dropdownList}>
                <li
                  className={styles.dropdownItem}
                  onClick={() => onNavigate('user/bookings')}
                >
                  <Calendar size={16} />
                  <span>My Bookings</span>
                </li>
                <li
                  className={styles.dropdownItem}
                  onClick={() => handleItemClick('profile')}
                >
                  <Settings size={16} />
                  <span>Profile</span>
                </li>
                <div className={styles.dropdownDivider}></div>
                <li
                  className={`${styles.dropdownItem} ${styles.logoutItem}`}
                  onClick={() => logoutUser()}
                >
                  <LogOut size={16} />
                  <span>Log Out</span>
                </li>
              </ul>
            </div>
          </>
        )}
      </Container>
    </nav>
  );
};

UserMenu.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  userProfileData: PropTypes.object,
};

export default UserMenu;
