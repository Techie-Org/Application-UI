import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';


// import artistryLogo from './assets/artistryLogo.svg';
import { HOMEPAGE_ROUTE } from './constants';
// import NavbarItems from './NavbarItems';
import messages from './messages';
import styles from './styles.scss';


export const GlobalHeader = (props) => {
  const { openSignInModal, loading, intl } = props;

  const renderLogo = () => (
    <div className={classNames(styles.headerLogoContainer)}>
      {/* <ScreenReaderMessage> */}
      <FormattedMessage {...messages.logoAria} />
      {/* </ScreenReaderMessage> */}
      <a // TODO: Have a common link component to render throught the app
        className={styles.headerLinkLogo}
        id='artistryLogo'
        href={HOMEPAGE_ROUTE}
        role='presentation'
        aria-label={intl.formatMessage(messages.logoAria)}
      >
        <img 
          alt={intl.formatMessage(messages.logoAria)}
          data-test-id="artistry-logo"
          role="presentation"
          // src={artistryLogo}
          aria-hidden
        />
      </a>
    </div>
  );

  const renderNavbar= () => (
    <div className={styles.navbarContainer}>
      {renderLogo()}
      <p>Navbar need to render here</p>
      {/* <NavbarItems 
        menuData={'headerData'} // TODO: navbar data needs to be passed here
      /> */}
    </div>
  );

  return (
    <>
      <div className={styles.globalHeaderContainer}>
        <section className={styles.globalHeaderNavbar}>
          {renderNavbar()}
        </section>
      </div>
    </>
  )
}

GlobalHeader.propTypes = {
  openSignInModal: PropTypes.func,
  loading: PropTypes.bool,
};

GlobalHeader.defaultProps= {
  loading: false,
}

export default GlobalHeader;
