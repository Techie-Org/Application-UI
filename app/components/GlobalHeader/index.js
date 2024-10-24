import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, intlShape } from 'react-intl';
import classNames from 'classnames';
import TextLink from '../_DesignWrappers/TextLink';

// import artistryLogo from './assets/artistryLogo.svg';
import { HOMEPAGE_ROUTE } from './constants';
import NavbarItems from './NavbarItems';
import messages from './messages';
import styles from './styles.scss';
import LoginSection from './LoginSection';

export const GlobalHeader = (props) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false); // TODO: Move this logic to redux store, get data from API

  const { intl } = props;

  const menuData = [
    { title: 'Home' },
    { title: 'Products' },
    { title: 'Artists' },
    { title: 'Account' },
  ];

  const renderLogo = () => (
    <div className={classNames(styles.headerLogoContainer)}>
      {/* <ScreenReaderMessage> */}
      <FormattedMessage {...messages.logoAria} />
      {/* </ScreenReaderMessage> */}
      <TextLink // TODO: Have a common link component to render throught the app
        className={styles.headerLinkLogo}
        id="artistryLogo"
        href={HOMEPAGE_ROUTE}
        role="presentation"
        aria-label={intl.formatMessage(messages.logoAria)}
      >
        <img
          alt={intl.formatMessage(messages.logoAria)}
          data-test-id="airbnb-logo"
          role="presentation"
          // src={artistryLogo}
          aria-hidden
        />
      </TextLink>
    </div>
  );

  const renderNavbar = () => (
    <div className={styles.navbarContainer}>
      {renderLogo()}
      <NavbarItems
        menuData={menuData} // TODO: navbar data needs to be passed here
      />
      <LoginSection
        intl={intl}
        userLoggedIn={userLoggedIn}
        setUserLoggedIn={setUserLoggedIn}
      />
    </div>
  );

  return (
    <div className={styles.globalHeaderContainer}>
      <section className={styles.globalHeaderNavbar}>
        {renderNavbar()}
      </section>
    </div>
  );
};

GlobalHeader.propTypes = {
  intl: PropTypes.shape(intlShape),
  openSignInModal: PropTypes.func,
  loading: PropTypes.bool,
};

GlobalHeader.defaultProps = {
  loading: false,
};

export default GlobalHeader;
