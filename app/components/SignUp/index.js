import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, intlShape } from 'react-intl';
import { Grid2, Paper, Avatar, Typography, IconButton, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import {
  Button,
  LocalForm,
  TextField,
  CheckBoxField,
  TextLink,
  RadioField,
} from 'components/_DesignWrappers';
import {
  isBlankValidator,
  confirmPasswordValidator,
  NAME_PATTERN,
  EMAIL_ALLOWED_PATTERNS,
  PHONE_NUMBER_PATTERN,
  lengthCheckValidator,
  emailValidator,
} from 'components/Form/Validators';
import config from 'config';
import { GENDER_FIELD_ITEMS } from './constants';
import messages from './messages';
import styles from './styles.scss';

const SignUp = (props) => {
  const {
    intl,
    registerUser,
    registerUserLoaded,
    validateOtp,
    otpValidationLoaded,
  } = props;

  const [termsAgreed, setTermsAgreed] = useState(false);
  const [openOtpModal, setOpenOtpModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (registerUserLoaded) {
      if (otpValidationLoaded) {
        setOpenOtpModal(false);
      } else {
        setOpenOtpModal(true);
      }
    } else {
      setOpenOtpModal(false);
    }
  }, [registerUserLoaded, otpValidationLoaded]);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignUpSubmit = (formData) => {
    registerUser(formData);
  };
  const handleOtpValidation = (formData) => {
    validateOtp(formData);
  };
  return (
    <Grid2>
      <Grid2 className={openOtpModal ? styles.signUpContainerAfterRegisterUserLoaded : styles.signUpContainer}>
        <Paper className={styles.signUpPaper}>
          <Grid2 align="center">
            <Avatar className={styles.signUpAddCircleAvatar}>
              <AddCircleOutlineIcon />
            </Avatar>
            <h2 className={styles.signUpHeader}>
              <FormattedMessage {...messages.signUpHeader} />
            </h2>
            <Typography variant="caption" gutterBottom>
              <FormattedMessage {...messages.signUpInfoMessage} />
            </Typography>
          </Grid2>
          <Grid2>
            <LocalForm form="SignUpForm" onSubmit={handleSignUpSubmit}>
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
              />
              <TextField
                model="email"
                fullWidth
                label={intl.formatMessage(messages.emailLabel)}
                placeholder={intl.formatMessage(messages.emailPlaceholder)}
                allowPattern={EMAIL_ALLOWED_PATTERNS}
                validators={[
                  isBlankValidator(intl.formatMessage(messages.blankEmailError)),
                  emailValidator(intl.formatMessage(messages.invalidEmailError)),
                ]}
              />
              <RadioField
                model="gender"
                legend={intl.formatMessage(messages.genderLabel)}
                items={GENDER_FIELD_ITEMS}
                variant="inline"
              />
              <TextField
                model="phone"
                fullWidth
                label={intl.formatMessage(messages.phoneLabel)}
                placeholder={intl.formatMessage(messages.phonePlaceholder)}
                allowPattern={PHONE_NUMBER_PATTERN}
                validators={[
                  isBlankValidator(intl.formatMessage(messages.blankPhoneError)),
                  lengthCheckValidator(intl.formatMessage(messages.lengthPhoneError), 10, 12),
                ]}
              />
              <TextField
                model="password"
                type={showPassword ? 'text' : 'password'}
                label={intl.formatMessage(messages.passwordLabel)}
                placeholder={intl.formatMessage(messages.passwordPlaceholder)}
                validators={[
                  isBlankValidator(intl.formatMessage(messages.blankPasswordError)),
                  lengthCheckValidator(intl.formatMessage(messages.passwordLengthError), 8),
                ]}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                        aria-label={showPassword ? intl.formatMessage(messages.hidePasswordLabel) : intl.formatMessage(messages.showPasswordLabel)}
                      >
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
                isPassword
              />
              <TextField
                model="confirmPassword"
                label={intl.formatMessage(messages.confirmPasswordLabel)}
                placeholder={intl.formatMessage(
                  messages.confirmPasswordPlaceholder
                )}
                validators={[
                  isBlankValidator(intl.formatMessage(messages.blankConfirmPasswordError)),
                  confirmPasswordValidator(intl.formatMessage(messages.passwordMatchError)),
                ]}
                fullWidth
                isPassword
              />
              <CheckBoxField
                model="terms"
                label={intl.formatMessage(messages.termsConditionLabel)}
                checkboxValue={intl.formatMessage(messages.termsConditionCheckboxValue)}
                onChange={() => setTermsAgreed(!termsAgreed)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!termsAgreed}
                text={intl.formatMessage(messages.signUpButton)}
              />
            </LocalForm>
          </Grid2>
          <Grid2>
            <Typography>
              <FormattedMessage {...messages.accountExistText} />
              <TextLink href={config.SIGN_IN_PAGE}>
                <FormattedMessage {...messages.signInLink} />
              </TextLink>
            </Typography>
          </Grid2>
        </Paper>
        <Modal
          open={openOtpModal}
          aria-labelledby="otp-modal-title"
          aria-describedby="otp-modal-description"
        >
          <Stack className={styles.otpModal} spacing={3} alignItems="center">
            <Typography className={styles.otpDescription} variant="h3">
              <FormattedMessage {...messages.otpDescription} />
            </Typography>
            <Typography
              variant="caption"
              gutterBottom
              className={styles.otpSentMessage}
            >
              <FormattedMessage {...messages.otpMessage} />
            </Typography>
            <Stack alignItems="center" className={styles.otpFormStack}>
              <LocalForm
                form="verifyOtpValidation"
                onSubmit={handleOtpValidation}
                className={styles.otpFormContainer}
              >
                <TextField
                  model=".otp"
                  label={intl.formatMessage(messages.otpLabel)}
                  placeholder={intl.formatMessage(messages.otpPlaceholder)}
                  fullWidth
                  allowPattern={PHONE_NUMBER_PATTERN}
                  inputProps={{
                    maxLength: 6,
                  }}
                  validators={
                    lengthCheckValidator(intl.formatMessage(messages.otpLengthValidator), 6, 6)
                  }
                />
                <Button
                  type="submit"
                  variant="contained"
                  className={styles.verifyBtn}
                  fullWidth
                >
                  {intl.formatMessage(messages.otpButton)}
                </Button>
              </LocalForm>
            </Stack>
          </Stack>
        </Modal>
      </Grid2>
    </Grid2>
  );
};

SignUp.propTypes = {
  intl: PropTypes.shape(intlShape),
  registerUser: PropTypes.func,
  registerUserLoaded: PropTypes.bool,
  validateOtp: PropTypes.func,
  emailId: PropTypes.string,
  otpValidationLoaded: PropTypes.bool,
};

export default SignUp;
