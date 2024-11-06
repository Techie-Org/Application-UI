import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import compose from 'lodash/fp/compose';
import SignUp from 'components/SignUp';
import { registerUser as registerUserAction } from './actions';
import { makeSelectRegisterUserLoading } from './selectors';

const mapStateToProps = () => createStructuredSelector({
  registerUserLoading: makeSelectRegisterUserLoading(),
});

export const mapDispatchToProps = (dispatch) => ({
  registerUser: (requestData) => dispatch(registerUserAction(requestData)),
});

const SignUpContainer = compose(
  injectIntl,
  connect(mapStateToProps, mapDispatchToProps)
)(SignUp);

export default SignUpContainer;
