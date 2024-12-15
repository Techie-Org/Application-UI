import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import compose from 'lodash/fp/compose';
import SignUp from 'components/SignUp';
import {
  registerUser as registerUserAction,
  validateOtp as validateOtpAction,
} from './actions';
import {
  makeSelectRegisterUserLoading,
  makeSelectRegisterUserLoaded,
} from './selectors';

const mapStateToProps = () => createStructuredSelector({
  registerUserLoading: makeSelectRegisterUserLoading(),
  registerUserLoaded: makeSelectRegisterUserLoaded(),
});

export const mapDispatchToProps = (dispatch) => ({
  registerUser: (requestData) => dispatch(registerUserAction(requestData)),
  validateOtp: (request) => dispatch(validateOtpAction(request)),
});

const SignUpContainer = compose(
  injectIntl,
  connect(mapStateToProps, mapDispatchToProps)
)(SignUp);

export default SignUpContainer;
