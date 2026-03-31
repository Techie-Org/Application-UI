import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Music, Mail, Lock, User as UserIcon } from 'lucide-react';
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { history } from 'utils/browserHistory';
import {
  LocalForm,
  TextField,
} from 'components/_DesignWrappers';
import {
  isBlankValidator,
  emailValidator,
  NAME_PATTERN,
  lengthCheckValidator,
} from 'components/Form/Validators';
import { FormattedMessage, intlShape } from 'react-intl';
import VerificationModal from './VerificationModal';
import styles from './styles.scss';
import messages from './messages';
import ButtonWithSpinner from '../_DesignWrappers/ButtonWithSpinner';

const Auth = (props) => {
  const {
    intl,
    signInUser,
    signInUserLoading,
    // signInUserLoaded,
    registerUser,
    registerUserLoading,
    registerUserLoaded,
    validateOtp,
    otpValidationLoading,
    otpValidationSuccess,
    isUserLoggedIn = false,
  } = props;

  const [isLogin, setIsLogin] = useState(true);
  const [openOtpModal, setOpenOtpModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const loading = registerUserLoading || signInUserLoading;

  useEffect(() => {
    if (registerUserLoaded) {
      if (otpValidationSuccess) {
        setOpenOtpModal(false);
      } else {
        setOpenOtpModal(true);
      }
    } else {
      setOpenOtpModal(false);
    }
  }, [registerUserLoaded, otpValidationSuccess]);

  // Redirecting user to homepage if already logged in
  useEffect(() => {
    if (isUserLoggedIn) {
      history.navigate('/'); // TODO: Need to redirect user to the profile page once that is ready
    }
  }, [isUserLoggedIn]);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignInSubmit = (formData) => {
    console.log('signinsubmit formdata', formData);
    if (!isLogin) {
      setUserEmail(formData.email);
      registerUser(formData);
      return;
    }
    signInUser(formData);
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authBox}>
        <div className={styles.authCard}>
          <div className={styles.logoWrapper}>
            <div className={styles.iconCircle}>
              <Music className={styles.logoIcon} />
            </div>
          </div>

          <h2 className={styles.title}>
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className={styles.subtitle}>
            {isLogin
              ? 'Sign in to manage your bookings'
              : 'Sign up to start booking amazing artists'}
          </p>

          {/* <form onSubmit={handleSubmit} className={styles.authForm}> */}
          <LocalForm
            form="SignInForm"
            onSubmit={handleSignInSubmit}
            data-test-id="signInForm"
            className={styles.authForm}
          >
            {!isLogin && (
              <div>
                <div className={styles.inputWrapper}>
                  <TextField
                    model="name"
                    className={styles.inputField}
                    label={intl.formatMessage(messages.nameLabel)}
                    placeholder={intl.formatMessage(messages.namePlaceholder)}
                    allowPattern={NAME_PATTERN}
                    validators={[
                      isBlankValidator(intl.formatMessage(messages.blankNameError)),
                      lengthCheckValidator(intl.formatMessage(messages.minLengthNameError), 3),
                    ]}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <UserIcon size={20} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              </div>
            )}

            <div>
              <div className={styles.inputWrapper}>
                <TextField
                  model="email"
                  className={styles.inputField}
                  label={intl.formatMessage(messages.emailLabel)}
                  placeholder={intl.formatMessage(messages.emailPlaceholder)}
                  validators={[
                    isBlankValidator(intl.formatMessage(messages.emailError)),
                    emailValidator(intl.formatMessage(messages.invalidEmailError)),
                  ]}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Mail size={20} />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>

            <div>
              <div className={styles.inputWrapper}>
                <TextField
                  model="password"
                  className={styles.inputField}
                  label={intl.formatMessage(messages.passwordLabel)}
                  placeholder={intl.formatMessage(messages.passwordPlaceholder)}
                  validators={[
                    isBlankValidator(intl.formatMessage(messages.passwordError)),
                    lengthCheckValidator(intl.formatMessage(messages.passwordLengthError), 8),
                  ]}
                  isPassword
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock size={20} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                          aria-label={showPassword ? intl.formatMessage(messages.hidePasswordLabel) : intl.formatMessage(messages.showPasswordLabel)}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
            {/* {!isLogin && (
              <div>
                <label className={styles.label}>Full Name</label>
                <div className={styles.inputWrapper}>
                  <UserIcon className={styles.fieldIcon} />
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={styles.inputField}
                  />
                </div>
              </div>
            )} */}

            {/* <div>
              <label className={styles.label}>Email Address</label>
              <div className={styles.inputWrapper}>
                <Mail className={styles.fieldIcon} />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={styles.inputField}
                />
              </div>
            </div> */}

            {/* <div>
              <label className={styles.label}>Password</label>
              <div className={styles.inputWrapper}>
                <Lock className={styles.fieldIcon} />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  minLength={6}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className={styles.inputField}
                />
              </div>
              {!isLogin && (
                <p className={styles.hintText}>Must be at least 6 characters</p>
              )}
            </div> */}

            <ButtonWithSpinner
              type="submit"
              disabled={loading}
              className={styles.submitBtn}
              spinOn={loading}
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </ButtonWithSpinner>
            {/* </form> */}
          </LocalForm>

          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className={styles.toggleBtn}
          >
            {isLogin ? <FormattedMessage {...messages.accountNotExist} /> : <FormattedMessage {...messages.accountExist} />}
          </button>
        </div>
      </div>
      <div>
        {openOtpModal && (
          <VerificationModal
            isOpen={openOtpModal}
            onClose={() => setOpenOtpModal(false)}
            validateOtp={validateOtp}
            otpValidationLoading={otpValidationLoading}
            email={userEmail}
            setIsLogin={setIsLogin}
            otpValidationSuccess={otpValidationSuccess}
          />
        )}
      </div>
    </div>
  );
};

Auth.propTypes = {
  intl: PropTypes.shape(intlShape),
  signInUser: PropTypes.func,
  signInUserLoading: PropTypes.bool,
  registerUser: PropTypes.func,
  registerUserLoading: PropTypes.bool,
  registerUserLoaded: PropTypes.bool,
  validateOtp: PropTypes.func,
  otpValidationLoading: PropTypes.bool,
  otpValidationSuccess: PropTypes.bool,
  isUserLoggedIn: PropTypes.bool,
};

export default Auth;
