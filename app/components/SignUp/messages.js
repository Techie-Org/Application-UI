/**
 * SignUp messages
 *
 * This contains all the text for SignUp component
 */
import { defineMessages } from 'react-intl';

const scope = 'artistry.components.SignUp';

export default defineMessages({
  signUpHeader: {
    id: `${scope}.signUpHeader`,
    defaultMessage: 'Sign Up',
  },
  signUpInfoMessage: {
    id: `${scope}.signUpInfoMessage`,
    defaultMessage: 'Please fill this form to create an account !',
  },
  nameLabel: {
    id: `${scope}.nameLabel`,
    defaultMessage: 'Name',
  },
  namePlaceholder: {
    id: `${scope}.namePlaceholder`,
    defaultMessage: 'Enter your name',
  },
  blankNameError: {
    id: `${scope}.blankNameError`,
    defaultMessage: 'Name is required',
  },
  emailLabel: {
    id: `${scope}.emailLabel`,
    defaultMessage: 'Email',
  },
  emailPlaceholder: {
    id: `${scope}.emailPlaceholder`,
    defaultMessage: 'Enter your email',
  },
  blankEmailError: {
    id: `${scope}.blankEmailError`,
    defaultMessage: 'Email is required',
  },
  genderLabel: {
    id: `${scope}.genderLabel`,
    defaultMessage: 'Gender',
  },
  phoneLabel: {
    id: `${scope}.phoneLabel`,
    defaultMessage: 'Phone',
  },
  phonePlaceholder: {
    id: `${scope}.phonePlaceholder`,
    defaultMessage: 'Enter your phone number',
  },
  blankPhoneError: {
    id: `${scope}.blankPhoneError`,
    defaultMessage: 'Phone number is required',
  },
  passwordLabel: {
    id: `${scope}.passwordLabel`,
    defaultMessage: 'Password',
  },
  passwordPlaceholder: {
    id: `${scope}.passwordPlaceholder`,
    defaultMessage: 'Enter your password',
  },
  blankPasswordError: {
    id: `${scope}.blankPasswordError`,
    defaultMessage: 'Please enter a password',
  },
  confirmPasswordLabel: {
    id: `${scope}.confirmPasswordLabel`,
    defaultMessage: 'Confirm Password',
  },
  confirmPasswordPlaceholder: {
    id: `${scope}.confirmPasswordPlaceholder`,
    defaultMessage: 'Confirm your password',
  },
  blankConfirmPasswordError: {
    id: `${scope}.blankConfirmPasswordError`,
    defaultMessage: 'Please confirm your password',
  },
  termsConditionCheckboxValue: {
    id: `${scope}.termsConditionCheckboxValue`,
    defaultMessage: 'checkedA',
  },
  termsConditionLabel: {
    id: `${scope}.termsConditionLabel`,
    defaultMessage: 'I accept the terms and conditions.',
  },
  signUpButton: {
    id: `${scope}.signUpButton`,
    defaultMessage: 'Sign Up',
  },
  accountExistText: {
    id: `${scope}.accountExistText`,
    defaultMessage: 'Already have an account? ',
  },
  signInLink: {
    id: `${scope}.signInLink`,
    defaultMessage: 'Sign In',
  },
});
