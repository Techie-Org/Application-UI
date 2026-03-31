import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import compose from 'lodash/fp/compose';
// import SignIn from 'components/SignIn';
import AuthSignIn from 'components/AuthSignIn';
import {
  makeSelectIsUserLoggedIn,
  makeSelectUserProfileLoaded,
} from 'containers/GlobalHeaderContainer/selectors';
import {
  registerUser as registerUserAction,
  validateOtp as validateOtpAction,
  resendOtp as resendOtpAction,
} from 'containers/SignUp/actions';
import {
  makeSelectRegisterUserLoading,
  makeSelectRegisterUserLoaded,
  makeSelectOtpValidationLoaded,
  makeSelectOtpValidationSuccess,
} from 'containers/SignUp/selectors';
import {
  makeSelectSignInUserLoading,
  makeSelectSignInUserLoaded,
} from './selectors';
import { signInUser as signInUserAction } from './actions';

const mapStateToProps = () => createStructuredSelector({
  signInUserLoading: makeSelectSignInUserLoading(),
  signInUserLoaded: makeSelectSignInUserLoaded(),
  registerUserLoading: makeSelectRegisterUserLoading(),
  registerUserLoaded: makeSelectRegisterUserLoaded(),
  otpValidationLoaded: makeSelectOtpValidationLoaded(),
  otpValidationSuccess: makeSelectOtpValidationSuccess(),
  isUserProfileLoaded: makeSelectUserProfileLoaded(),
  isUserLoggedIn: makeSelectIsUserLoggedIn(),
});

export const mapDispatchToProps = (dispatch) => ({
  signInUser: (request) => dispatch(signInUserAction(request)),
  registerUser: (requestData) => dispatch(registerUserAction(requestData)),
  validateOtp: (request) => dispatch(validateOtpAction(request)),
  resendOtp: () => dispatch(resendOtpAction()),
});

const SignInContainer = compose(
  injectIntl,
  connect(mapStateToProps, mapDispatchToProps),
  // )(SignIn);
)(AuthSignIn);

export default SignInContainer;
