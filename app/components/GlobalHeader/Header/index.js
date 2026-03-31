import React from 'react';
import PropTypes from 'prop-types';
import { Music, User } from 'lucide-react';
import styles from './styles.scss';
import UserMenu from '../UserMenu';

const Header = ({
  onNavigate,
  isAuthenticated,
  logoutUser,
  userProfileData,
}) => {
  const renderAuthButton = () => (
    <button
      type="button"
      onClick={() => onNavigate('/account')}
      className={styles.authButton}
    >
      <User className={styles.authIcon} />
      <span>Sign In</span>
    </button>
  );

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.headerInner}>
          <div
            role="button"
            tabIndex={0} /* This makes the div focusable via the Tab key */
            className={styles.logoSection}
            onClick={() => onNavigate('/')}
            onKeyDown={() => {}}
          >
            <Music className={styles.logoIcon} />
            <span className={styles.logoText}>ArtistBook</span>
          </div>

          <nav className={styles.navMenu}>
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className={`${styles.navLink} ${
                'currentView' === 'browse' ? styles.isActive : styles.isInactive
              }`}
            >
              Browse Artists
            </button>

            {/* {isAuthenticated && (
            <button
              type="button"
              onClick={() => onNavigate('user/bookings')}
              className={`${styles.navLink} ${styles.withIcon} ${
                'currentView' === 'bookings' ? styles.isActive : styles.isInactive
              }`}
            >
              <Calendar className={styles.icon} />
              <span>My Bookings</span>
            </button>
          )} */}
            {isAuthenticated ? (
              <UserMenu
                onNavigate={onNavigate}
                logoutUser={logoutUser}
                userProfileData={userProfileData}
              />
            ) : (
              renderAuthButton()
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired,
  userProfileData: PropTypes.object,
};

export default Header;
