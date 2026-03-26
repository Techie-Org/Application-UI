import React from 'react';
import { Music, User, Calendar } from 'lucide-react';
import styles from './styles.scss';

const Header = ({ onNavigate, currentView, isAuthenticated }) => (
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
              currentView === 'browse' ? styles.isActive : styles.isInactive
            }`}
          >
            Browse Artists
          </button>

          {isAuthenticated && (
            <button
              type="button"
              onClick={() => onNavigate('user/bookings')}
              className={`${styles.navLink} ${styles.withIcon} ${
                currentView === 'bookings' ? styles.isActive : styles.isInactive
              }`}
            >
              <Calendar className={styles.icon} />
              <span>My Bookings</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => onNavigate('/account')}
            className={styles.authButton}
          >
            <User className={styles.authIcon} />
            <span>{isAuthenticated ? 'Account' : 'Sign In'}</span>
          </button>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
