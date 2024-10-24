import React from 'react';
import PropTypes from 'prop-types';
import { intlShape } from 'react-intl';
import {
  Grid2,
  Paper,
  TextField,
  Button,
  Avatar,
  Typography,
  Link,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import LocalForm from '../_DesignWrappers/LocalForm';
import messages from './messages';
import styles from './styles.scss';

const SignIn = (props) => {
  const { intl } = props;
  return (
    <Grid2>
      <Paper className={styles.signInPaper}>
        <Grid2 align="center">
          <Avatar className={styles.lockAvatar}>
            <LockIcon />
          </Avatar>
          <h2>{intl.formatMessage(messages.signIn)}</h2>
        </Grid2>
        <LocalForm>
          <TextField
            label={intl.formatMessage(messages.usernameLabel)}
            placeholder={intl.formatMessage(messages.usernamePlaceholder)}
            fullWidth
            required
          />
          <TextField
            className={styles.passwordField}
            label={intl.formatMessage(messages.passwordLabel)}
            placeholder={intl.formatMessage(messages.passwordPlaceholder)}
            type="password"
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label={intl.formatMessage(messages.rememberMeLabel)}
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
          <Link href="#">
            {intl.formatMessage(messages.forgotPassword)}
          </Link>
        </Typography>
        <Typography>
          {intl.formatMessage(messages.accountExistText)}
          <Link href="#">
            {intl.formatMessage(messages.signUpLink)}
          </Link>
        </Typography>
      </Paper>
    </Grid2>
  );
};

SignIn.propTypes = {
  intl: PropTypes.shape(intlShape),
};

export default SignIn;
