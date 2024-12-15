import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames';
import TextLink from 'components/_DesignWrappers/TextLink';

// import artistryLogo from './assets/artistryLogo.svg';
import {
  Button,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import config from 'config';
import { HOMEPAGE_ROUTE } from './constants';
// import NavbarItems from './NavbarItems';
import messages from './messages';
import styles from './styles.scss';

export const GlobalHeader = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuAnchorElement, setMenuAnchorElement] = useState(null);
  const { intl, isUserLoggedIn, logoutUser, loadUserProfile } = props;

  useEffect(() => {
    loadUserProfile();
  }, [isUserLoggedIn]);

  const handleUserLogout = () => {
    logoutUser();
    setShowMenu(!showMenu);
  };

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

  const handleMenuState = () => {
    setShowMenu(!showMenu);
  };

  const renderUserAvatar = () => (
    <div>
      <Button
        onClick={(event) => {
          setMenuAnchorElement(event.currentTarget);
          handleMenuState();
        }}
      >
        <Avatar>
          <AccountCircleIcon />
        </Avatar>
      </Button>
      <Menu
        anchorEl={menuAnchorElement}
        open={showMenu}
        onClose={handleMenuState}
      >
        <MenuItem onClick={handleMenuState}>Profile</MenuItem>
        <MenuItem onClick={handleMenuState}>My account</MenuItem>
        <MenuItem onClick={handleUserLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );

  const renderLoginSignupButtons = () => (
    <Toolbar>
      <Typography>
        <Link to={config.SIGN_UP_PAGE}>
          <Button>Sign Up</Button>
        </Link>
        <Link to={config.SIGN_IN_PAGE}>
          <Button>Log In</Button>
        </Link>
      </Typography>
    </Toolbar>
  );

  const renderNavbar = () => (
    <div className={styles.navbarContainer}>
      {renderLogo()}
      <p>Navbar need to render here</p>
      {/* <NavbarItems
        menuData={'headerData'} // TODO: navbar data needs to be passed here
      /> */}
      {isUserLoggedIn ? renderUserAvatar() : renderLoginSignupButtons()}
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
  logoutUser: PropTypes.func,
  loading: PropTypes.bool,
  isUserLoggedIn: PropTypes.bool,
};

// GlobalHeader.defaultProps = {
//   // loading: false,
// };

export default injectIntl(GlobalHeader);
