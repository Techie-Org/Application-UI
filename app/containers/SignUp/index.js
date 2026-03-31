// import { createStructuredSelector } from 'reselect';
// import { injectIntl } from 'react-intl';
// import { connect } from 'react-redux';
// import compose from 'lodash/fp/compose';
// import SignUp from 'components/SignUp';
// import {
//   registerUser as registerUserAction,
//   validateOtp as validateOtpAction,
// } from './actions';
// import {
//   makeSelectRegisterUserLoading,
//   makeSelectRegisterUserLoaded,
//   makeSelectOtpValidationLoading,
//   makeSelectOtpValidationLoaded,
// } from './selectors';

// const mapStateToProps = () => createStructuredSelector({
//   registerUserLoading: makeSelectRegisterUserLoading(),
//   registerUserLoaded: makeSelectRegisterUserLoaded(),
//   otpValidationLoading: makeSelectOtpValidationLoading(),
//   otpValidationLoaded: makeSelectOtpValidationLoaded(),
// });

// export const mapDispatchToProps = (dispatch) => ({
//   registerUser: (requestData) => dispatch(registerUserAction(requestData)),
//   validateOtp: (request) => dispatch(validateOtpAction(request)),
// });

// const SignUpContainer = compose(
//   injectIntl,
//   connect(mapStateToProps, mapDispatchToProps)
// )(SignUp);

// export default SignUpContainer;
