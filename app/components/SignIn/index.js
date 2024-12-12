import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, intlShape } from 'react-intl';
import { Grid2, Paper, Avatar, Typography, InputAdornment, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import LocalForm from 'components/_DesignWrappers/LocalForm';
import TextField from 'components/_DesignWrappers/TextField';
import CheckBoxField from 'components/_DesignWrappers/CheckBoxField';
import TextLink from 'components/_DesignWrappers/TextLink';
import Button from 'components/_DesignWrappers/Button';
import { isBlankValidator, emailValidator, lengthCheckValidator } from 'components/Form/Validators';
import config from 'config';

import messages from './messages';
import styles from './styles.scss';

const SignIn = (props) => {
  const { intl, signInUser } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignInSubmit = (formData) => {
    signInUser(formData);
  };

  return (
    <Grid2>
      <Paper className={styles.signInPaper}>
        <Grid2 align="center">
          <Avatar className={styles.lockAvatar}>
            <LockIcon />
          </Avatar>
          <h2>{intl.formatMessage(messages.signIn)}</h2>
        </Grid2>
        <LocalForm form="SignInForm" onSubmit={handleSignInSubmit}>
          <TextField
            model=".email"
            label={intl.formatMessage(messages.emailLabel)}
            placeholder={intl.formatMessage(messages.emailPlaceholder)}
            validators={[
              isBlankValidator(
                intl.formatMessage(messages.emailError)
              ),
              emailValidator(
                intl.formatMessage(messages.invalidEmailError)
              ),
            ]}
            fullWidth
          />
          <TextField
            model=".password"
            className={styles.passwordField}
            label={intl.formatMessage(messages.passwordLabel)}
            placeholder={intl.formatMessage(messages.passwordPlaceholder)}
            validators={[
              isBlankValidator(
                intl.formatMessage(messages.passwordError)
              ),
              lengthCheckValidator(
                intl.formatMessage(messages.passwordLengthError), 8,
              ),
            ]}
            isPassword
            fullWidth
            type={showPassword ? 'text' : 'password'}
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
          />
          <CheckBoxField
            model=".rememberLogin"
            label={intl.formatMessage(messages.rememberMeLabel)}
            checkboxValue={intl.formatMessage(messages.rememberMeCheckBoxName)}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className={styles.signInButton}
            fullWidth
          >
            {intl.formatMessage(messages.signInButton)}
          </Button>
        </LocalForm>
        <Typography>
          <TextLink href="#">
            <FormattedMessage {...messages.forgotPassword} />
          </TextLink>
        </Typography>
        <Typography>
          <FormattedMessage {...messages.accountExistText} />
          <TextLink href={config.SIGN_UP_PAGE}>
            <FormattedMessage {...messages.signUpLink} />
          </TextLink>
        </Typography>
      </Paper>
    </Grid2>
  );
};

SignIn.propTypes = {
  intl: PropTypes.shape(intlShape),
  signInUser: PropTypes.func,
};

export default SignIn;
