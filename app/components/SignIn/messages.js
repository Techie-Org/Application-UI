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
  emailLabel: {
    id: `${scope}.emailLabel`,
    defaultMessage: 'Email',
  },
  emailPlaceholder: {
    id: `${scope}.emailPlaceholder`,
    defaultMessage: 'Enter email address',
  },
  emailError: {
    id: `${scope}.emailError`,
    defaultMessage: 'Email is required',
  },
  invalidEmailError: {
    id: `${scope}.invalidEmailError`,
    defaultMessage: 'Invalid email',
  },
  passwordLabel: {
    id: `${scope}.passwordLabel`,
    defaultMessage: 'Password',
  },
  passwordPlaceholder: {
    id: `${scope}.passwordPlaceholder`,
    defaultMessage: 'Enter password',
  },
  passwordError: {
    id: `${scope}.passwordError`,
    defaultMessage: 'Password is required',
  },
  passwordLengthError: {
    id: `${scope}.passwordLengthError`,
    defaultMessage: 'Password should be atleast 8 characters',
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
    defaultMessage: "Don't have an account? ",
  },
});
