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
import messages from './messages';
import styles from './styles.scss';

const SignIn = (props) => {
  const { intl } = props;

  const handleSignInSubmit = (formData) => {
    console.log('SignIn submit formData', formData);
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
            model=".username"
            label={intl.formatMessage(messages.usernameLabel)}
            placeholder={intl.formatMessage(messages.usernamePlaceholder)}
            fullWidth
            required
          />
          <TextField
            model=".password"
            className={styles.passwordField}
            label={intl.formatMessage(messages.passwordLabel)}
            placeholder={intl.formatMessage(messages.passwordPlaceholder)}
            isPassword
            fullWidth
            required
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
          <TextLink href="/signUp">
            <FormattedMessage {...messages.signUpLink} />
          </TextLink>
        </Typography>
      </Paper>
    </Grid2>
  );
};

SignIn.propTypes = {
  intl: PropTypes.shape(intlShape),
};

export default SignIn;
