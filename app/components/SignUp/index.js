import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, intlShape } from 'react-intl';
import {
  Grid2,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LocalForm from '../_DesignWrappers/LocalForm';
import messages from './messages';
import styles from './styles.scss';

const SignUp = (props) => {
  const { intl } = props;
  console.log('signUp props', props);
  console.log('signUp messages', messages);

  const handleSignUpSubmit = (formData) => {
    console.log('SignUp FormData ', formData);
  };

  return (
    <Grid2>
      <Paper className={styles.signUpPaper}>
        <Grid2 align="center">
          <Avatar className={styles.signUpAddCircleAvatar}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2 className={styles.signUpHeader}>
            <FormattedMessage {...messages.signUpHeader} />
          </h2>
          <Typography variant="caption" gutterBottom>
            {intl.formatMessage(messages.signUpInfoMessage)}
          </Typography>
        </Grid2>
        <LocalForm onSubmit={handleSignUpSubmit}>
          <TextField
            model=".name"
            className={styles.signUpField}
            fullWidth
            label={intl.formatMessage(messages.nameLabel)}
            placeholder={intl.formatMessage(messages.namePlaceholder)}
          />
          <TextField
            model=".email"
            className={styles.signUpField}
            fullWidth
            label={intl.formatMessage(messages.emailLabel)}
            placeholder={intl.formatMessage(messages.emailPlaceholder)}
          />
          <FormControl model=".gender" component="fieldset">
            <FormLabel component="legend">
              <FormattedMessage {...messages.genderLabel} />
            </FormLabel>
            <RadioGroup
              aria-label={intl.formatMessage(messages.gender)}
              name={intl.formatMessage(messages.gender)}
              style={{ display: 'initial' }}
            >
              <FormControlLabel
                className={styles.signUpField}
                value={intl.formatMessage(messages.genderFemale)}
                control={<Radio />}
                label={intl.formatMessage(messages.genderFemaleLabel)}
              />
              <FormControlLabel
                className={styles.signUpField}
                value={intl.formatMessage(messages.genderMale)}
                control={<Radio />}
                label={intl.formatMessage(messages.genderMaleLabel)}
              />
            </RadioGroup>
          </FormControl>
          <TextField
            model=".phone"
            className={styles.signUpField}
            fullWidth
            label={intl.formatMessage(messages.phoneLabel)}
            placeholder={intl.formatMessage(messages.phonePlaceholder)}
          />
          <TextField
            model=".password"
            className={styles.signUpField}
            fullWidth
            label={intl.formatMessage(messages.passwordLabel)}
            placeholder={intl.formatMessage(messages.passwordPlaceholder)}
          />
          <TextField
            model=".confirmPassword"
            className={styles.signUpField}
            fullWidth
            label={intl.formatMessage(messages.confirmPasswordLabel)}
            placeholder={intl.formatMessage(
              messages.confirmPasswordPlaceholder
            )}
          />
          <FormControlLabel
            model=".terms"
            className={styles.signUpField}
            control={(
              <Checkbox
                name={intl.formatMessage(messages.termsConditionCheckboxName)}
              />
            )}
            label={intl.formatMessage(messages.termsConditionLabel)}
          />
          <Button type="submit" variant="contained" color="primary">
            {intl.formatMessage(messages.signUpButton)}
          </Button>
        </LocalForm>
      </Paper>
    </Grid2>
  );
};

SignUp.propTypes = {
  intl: PropTypes.shape(intlShape),
};

export default SignUp;
