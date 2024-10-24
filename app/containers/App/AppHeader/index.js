import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import styles from './styles.scss';

export const AppHeader = ({ children }) => (
// const intl = useIntl();
  <header
    className={styles.floatingHeader}
    role="banner"
  >
    {children}
  </header>
);
AppHeader.propTypes = {
  // intl: PropTypes.shape(intlShape),
  children: PropTypes.any,
};

export default injectIntl(AppHeader);
