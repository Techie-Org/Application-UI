import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { intlShape } from 'react-intl';
import { history } from 'utils/browserHistory';
import messages from './messages';
import styles from './styles.scss';

const LoginSection = (props) => {
  const { userLoggedIn, intl } = props;

  const handleLoginClick = () => {
    history.navigate('/signIn');
  };

  const handleSignupClick = () => {};

  return (
    <div className={styles.loginSectionContainer}>
      {userLoggedIn ? (
        <div>User logged in</div>
      ) : (
        <div className={styles.buttonGroup}>
          <Button className={styles.loginButton} onClick={handleLoginClick}>
            {intl.formatMessage(messages.logIn)}
          </Button>
          <Button className={styles.signupButton} onClick={handleSignupClick}>
            {intl.formatMessage(messages.signUp)}
          </Button>
        </div>
      )}
    </div>
  );
};

LoginSection.propTypes = {
  intl: intlShape,
  userLoggedIn: PropTypes.bool.isRequired,
};

LoginSection.defaulProps = {
  userLoggedIn: false,
};

export default LoginSection;
