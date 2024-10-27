/**
 * SignIn messages
 *
 * This contains all the text for SignIn component
 */
import { defineMessages } from 'react-intl';

const scope = 'artistry.components.SignIn';

export default defineMessages({
  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: 'Sign In',
  },
  usernameLabel: {
    id: `${scope}.usernameLabel`,
    defaultMessage: 'Username',
  },
  usernamePlaceholder: {
    id: `${scope}.usernamePlaceholder`,
    defaultMessage: 'Enter username',
  },
  passwordLabel: {
    id: `${scope}.passwordLabel`,
    defaultMessage: 'Password',
  },
  passwordPlaceholder: {
    id: `${scope}.passwordPlaceholder`,
    defaultMessage: 'Enter password',
  },
  rememberMeLabel: {
    id: `${scope}.rememberMeLabel`,
    defaultMessage: 'Remember me',
  },
  rememberMeCheckBoxName: {
    id: `${scope}.rememberMeCheckBoxName`,
    defaultMessage: 'checkedB',
  },
  signInButton: {
    id: `${scope}.signInButton`,
    defaultMessage: 'Sign In',
  },
  forgotPassword: {
    id: `${scope}.forgotPassword`,
    defaultMessage: 'Forgot password',
  },
  signUpLink: {
    id: `${scope}.signUpLink`,
    defaultMessage: 'Sign Up',
  },
  accountExistText: {
    id: `${scope}.accountExistText`,
    defaultMessage: 'Don\'t have an account? ',
  },
});
