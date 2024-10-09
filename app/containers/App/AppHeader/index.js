import React from 'react';
import { useIntl } from 'react-intl';
import styles from './styles.scss';

export const AppHeader = ({ children }) => {
  const intl = useIntl();

  return (
    <header 
      className={styles.floatingHeader} 
      role='banner'
    >
      {children}
    </header>
  );
}

export default AppHeader;

