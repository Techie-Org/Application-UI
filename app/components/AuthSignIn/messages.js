/**
 * SignIn messages
 *
 * This contains all the text for SignIn component
 */
import { defineMessages } from 'react-intl';

const scope = 'artistry.components.AuthSignIn';

export default defineMessages({
  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: 'Sign In',
  },
  nameLabel: {
    id: `${scope}.nameLabel`,
    defaultMessage: 'Name',
  },
  namePlaceholder: {
    id: `${scope}.namePlaceholder`,
    defaultMessage: 'John Doe',
  },
  minLengthNameError: {
    id: `${scope}.minLengthNameError`,
    defaultMessage: 'Atleast 3 characters required',
  },
  blankNameError: {
    id: `${scope}.blankNameError`,
    defaultMessage: 'Name is required',
  },
  emailLabel: {
    id: `${scope}.emailLabel`,
    defaultMessage: 'Email Address',
  },
  emailPlaceholder: {
    id: `${scope}.emailPlaceholder`,
    defaultMessage: 'you@example.com',
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
    defaultMessage: '********',
  },
  passwordError: {
    id: `${scope}.passwordError`,
    defaultMessage: 'Password is required',
  },
  passwordLengthError: {
    id: `${scope}.passwordLengthError`,
    defaultMessage: 'Password should be atleast 8 characters',
  },
  signInButton: {
    id: `${scope}.signInButton`,
    defaultMessage: 'Sign In',
  },
  forgotPassword: {
    id: `${scope}.forgotPassword`,
    defaultMessage: 'Forgot password',
  },
  accountNotExist: {
    id: `${scope}.accountNotExist`,
    defaultMessage: 'Don\'t have an account? Sign up',
  },
  accountExist: {
    id: `${scope}.accountExist`,
    defaultMessage: 'Already have an account? Sign in',
  },
  hidePasswordLabel: {
    id: `${scope}.hidePasswordLabel`,
    defaultMessage: 'HidePassword',
  },
  showPasswordLabel: {
    id: `${scope}.showPasswordLabel`,
    defaultMessage: 'ShowPassword',
  },
});
