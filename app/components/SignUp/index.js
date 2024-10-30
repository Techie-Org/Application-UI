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
import { GENDER_FIELD_ITEMS } from './constants';
import messages from './messages';
import styles from './styles.scss';

const SignUp = (props) => {
  const { intl } = props;

  const [termsAgreed, setTermsAgreed] = useState(false);

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
            />
            <TextField
              model=".email"
              fullWidth
              label={intl.formatMessage(messages.emailLabel)}
              placeholder={intl.formatMessage(messages.emailPlaceholder)}
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
            />
            <TextField
              model=".password"
              label={intl.formatMessage(messages.passwordLabel)}
              placeholder={intl.formatMessage(messages.passwordPlaceholder)}
              fullWidth
              isPassword
            />
            <TextField
              model=".confirmPassword"
              label={intl.formatMessage(messages.confirmPasswordLabel)}
              placeholder={intl.formatMessage(
                messages.confirmPasswordPlaceholder
              )}
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
            <TextLink href="/signIn">
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
};

export default SignUp;
