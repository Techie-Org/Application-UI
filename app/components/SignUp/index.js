import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, intlShape } from 'react-intl';
import { Grid2, Paper, Avatar, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LocalForm from 'components/_DesignWrappers/LocalForm';
import TextField from 'components/_DesignWrappers/TextField';
import RadioField from 'components/_DesignWrappers/RadioField';
import CheckBoxField from 'components/_DesignWrappers/CheckBoxField';
import Button from 'components/_DesignWrappers/Button';
import TextLink from 'components/_DesignWrappers/TextLink';
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
  const [termsAgreed, setTermsAgreed] = useState(false);
  const { intl, registerUser } = props;

  const handleSignUpSubmit = (formData) => {
    registerUser(formData);
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
            <FormattedMessage {...messages.signUpInfoMessage} />
          </Typography>
        </Grid2>
        <Grid2>
          <LocalForm form="SignUpForm" onSubmit={handleSignUpSubmit}>
            <TextField
              model=".name"
              fullWidth
              label={intl.formatMessage(messages.nameLabel)}
              placeholder={intl.formatMessage(messages.namePlaceholder)}
              allowPattern={NAME_PATTERN}
              validators={[
                isBlankValidator(
                  intl.formatMessage(messages.blankNameError)
                ),
                lengthCheckValidator(
                  intl.formatMessage(messages.minLengthNameError), 3,
                ),
              ]}
            />
            <TextField
              model=".email"
              fullWidth
              label={intl.formatMessage(messages.emailLabel)}
              placeholder={intl.formatMessage(messages.emailPlaceholder)}
              allowPattern={EMAIL_ALLOWED_PATTERNS}
              validators={[
                isBlankValidator(
                  intl.formatMessage(messages.blankEmailError)
                ),
                emailValidator(
                  intl.formatMessage(messages.invalidEmailError)
                ),
              ]}
            />
            <RadioField
              model=".gender"
              legend={intl.formatMessage(messages.genderLabel)}
              items={GENDER_FIELD_ITEMS}
              variant="inline"
            />
            <TextField
              model=".phone"
              fullWidth
              label={intl.formatMessage(messages.phoneLabel)}
              placeholder={intl.formatMessage(messages.phonePlaceholder)}
              allowPattern={PHONE_NUMBER_PATTERN}
              validators={[
                isBlankValidator(
                  intl.formatMessage(messages.blankPhoneError)
                ),
                lengthCheckValidator(
                  intl.formatMessage(messages.lengthPhoneError), 10, 12
                ),
              ]}
            />
            <TextField
              model=".password"
              label={intl.formatMessage(messages.passwordLabel)}
              placeholder={intl.formatMessage(messages.passwordPlaceholder)}
              validators={[
                isBlankValidator(
                  intl.formatMessage(messages.blankPasswordError)
                ),
                lengthCheckValidator(
                  intl.formatMessage(messages.passwordLengthError), 8,
                ),
              ]}
              fullWidth
              isPassword
            />
            <TextField
              model=".confirmPassword"
              label={intl.formatMessage(messages.confirmPasswordLabel)}
              placeholder={intl.formatMessage(
                messages.confirmPasswordPlaceholder
              )}
              validators={[
                isBlankValidator(
                  intl.formatMessage(messages.blankConfirmPasswordError)
                ),
                confirmPasswordValidator(
                  intl.formatMessage(messages.passwordMatchError)
                ),
              ]}
              fullWidth
              isPassword
            />
            <CheckBoxField
              model=".terms"
              label={intl.formatMessage(messages.termsConditionLabel)}
              checkboxValue={intl.formatMessage(
                messages.termsConditionCheckboxValue
              )}
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
    </Grid2>
  );
};

SignUp.propTypes = {
  intl: PropTypes.shape(intlShape),
  registerUser: PropTypes.func,
};

export default SignUp;
