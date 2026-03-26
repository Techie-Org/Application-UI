import React, { useState } from 'react';
import { Music, Mail, Lock, User as UserIcon } from 'lucide-react';
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  LocalForm,
  TextField,
} from 'components/_DesignWrappers';
import {
  isBlankValidator,
  emailValidator,
  NAME_PATTERN,
  lengthCheckValidator,
} from 'components/Form/Validators';
import { FormattedMessage } from 'react-intl';
import VerificationModal from './VerificationModal';
import styles from './styles.scss';
import messages from './messages';

const Auth = (props) => {
  const { intl, signInUser } = props;

  const [isLogin, setIsLogin] = useState(true);
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignInSubmit = (formData) => {
    console.log('signinsubmit formdata', formData);
    if (!isLogin) {
      setOtpModalOpen(true);
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
                    fullWidth
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
                  fullWidth
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
                  className={styles.passwordField}
                  label={intl.formatMessage(messages.passwordLabel)}
                  placeholder={intl.formatMessage(messages.passwordPlaceholder)}
                  validators={[
                    isBlankValidator(intl.formatMessage(messages.passwordError)),
                    lengthCheckValidator(intl.formatMessage(messages.passwordLengthError), 8),
                  ]}
                  isPassword
                  fullWidth
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

            <button
              type="submit"
              disabled={loading}
              className={styles.submitBtn}
            >
              {loading ? 'Please wait...' : isLogin ? 'Sign In' : 'Create Account'}
            </button>
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
        {otpModalOpen && (
          <VerificationModal
            isOpen={otpModalOpen}
            onClose={() => setOtpModalOpen(false)}
            // email={formData.email}
          />
        )}
      </div>
    </div>
  );
};

export default Auth;
