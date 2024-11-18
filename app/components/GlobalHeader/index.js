import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames';
import TextLink from 'components/_DesignWrappers/TextLink';

// import artistryLogo from './assets/artistryLogo.svg';
import { Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { HOMEPAGE_ROUTE } from './constants';
// import NavbarItems from './NavbarItems';
import CONFIG from '../../config/development';
import messages from './messages';
import styles from './styles.scss';

export const GlobalHeader = (props) => {
  const { intl, isUserLoggedIn, loadUserProfile } = props;

  useEffect(() => {
    loadUserProfile();
  }, [isUserLoggedIn]);

  const renderLogo = () => (
    <div className={classNames(styles.headerLogoContainer)}>
      {/* <ScreenReaderMessage> */}
      <FormattedMessage {...messages.logoAria} />
      {/* </ScreenReaderMessage> */}
      <TextLink
        className={styles.headerLinkLogo}
        id="artistryLogo"
        href={HOMEPAGE_ROUTE}
        role="presentation"
        aria-label={intl.formatMessage(messages.logoAria)}
      >
        <img
          alt={intl.formatMessage(messages.logoAria)}
          data-test-id="artistry-logo"
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
      <p>Navbar need to render here</p>
      {/* <NavbarItems
        menuData={'headerData'} // TODO: navbar data needs to be passed here
      /> */}
      <Toolbar>
        <Typography>
          <Link to={CONFIG.SIGN_UP_PAGE}>
            <Button>Sign Up</Button>
          </Link>
          <Link to={CONFIG.SIGN_IN_PAGE}>
            <Button>Log In</Button>
          </Link>
        </Typography>
      </Toolbar>
    </div>
  );

  return (
    <div className={styles.globalHeaderContainer}>
      <section className={styles.globalHeaderNavbar}>{renderNavbar()}</section>
    </div>
  );
};

GlobalHeader.propTypes = {
  intl: PropTypes.shape(intlShape),
  loadUserProfile: PropTypes.func,
  loading: PropTypes.bool,
  isUserLoggedIn: PropTypes.bool,
};

// GlobalHeader.defaultProps = {
//   // loading: false,
// };

export default injectIntl(GlobalHeader);
