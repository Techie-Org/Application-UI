import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import compose from 'lodash/fp/compose';
// import SignIn from 'components/SignIn';
import AuthSignIn from 'components/AuthSignIn';
import { signInUser as signInUserAction } from './actions';
import { makeSelectSignInUserLoading, makeSelectSignInUserLoaded } from './selectors';
import {
  registerUser as registerUserAction,
  validateOtp as validateOtpAction,
} from '../SignUp/actions';
import {
  makeSelectRegisterUserLoading,
  makeSelectRegisterUserLoaded,
  makeSelectOtpValidationLoaded,
} from '../SignUp/selectors';

const mapStateToProps = () => createStructuredSelector({
  signInUserLoading: makeSelectSignInUserLoading(),
  signInUserLoaded: makeSelectSignInUserLoaded(),
  registerUserLoading: makeSelectRegisterUserLoading(),
  registerUserLoaded: makeSelectRegisterUserLoaded(),
  otpValidationLoaded: makeSelectOtpValidationLoaded(),
});

export const mapDispatchToProps = (dispatch) => ({
  signInUser: (request) => dispatch(signInUserAction(request)),
  registerUser: (requestData) => dispatch(registerUserAction(requestData)),
  validateOtp: (request) => dispatch(validateOtpAction(request)),
});

const SignInContainer = compose(
  injectIntl,
  connect(mapStateToProps, mapDispatchToProps)
// )(SignIn);
)(AuthSignIn);

export default SignInContainer;
