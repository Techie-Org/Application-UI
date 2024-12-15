import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, intlShape } from 'react-intl';
import { Grid2, Paper, Avatar, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import LocalForm from 'components/_DesignWrappers/LocalForm';
import TextField from 'components/_DesignWrappers/TextField';
import CheckBoxField from 'components/_DesignWrappers/CheckBoxField';
import TextLink from 'components/_DesignWrappers/TextLink';
import Button from 'components/_DesignWrappers/Button';
import {
  isBlankValidator,
  emailValidator,
  lengthCheckValidator,
} from 'components/Form/Validators';
import config from 'config';

import messages from './messages';
import styles from './styles.scss';

const SignIn = (props) => {
  const { intl, signInUser } = props;

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
        <LocalForm
          form="SignInForm"
          onSubmit={handleSignInSubmit}
          data-test-id="signInForm"
        >
          <TextField
            model=".email"
            label={intl.formatMessage(messages.emailLabel)}
            placeholder={intl.formatMessage(messages.emailPlaceholder)}
            validators={[
              isBlankValidator(intl.formatMessage(messages.emailError)),
              emailValidator(intl.formatMessage(messages.invalidEmailError)),
            ]}
            fullWidth
          />
          <TextField
            model=".password"
            className={styles.passwordField}
            label={intl.formatMessage(messages.passwordLabel)}
            placeholder={intl.formatMessage(messages.passwordPlaceholder)}
            validators={[
              isBlankValidator(intl.formatMessage(messages.passwordError)),
              lengthCheckValidator(intl.formatMessage(messages.passwordLengthError), 8),
            ]}
            isPassword
            fullWidth
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
            data-test-id="signInSubmitButton"
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
