import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import compose from 'lodash/fp/compose';
import SignUp from 'components/SignUp';
import {
  registerUser as registerUserAction,
} from './actions';
import { makeSelectRegisterUserLoaded } from './selectors';

const mapStateToProps = () => createStructuredSelector({
  registerUserLoaded: makeSelectRegisterUserLoaded(),
});

export const mapDispatchToProps = (dispatch) => ({
  loadHome: (request) => dispatch(loadHomeAction(request)), // Sample action dispatched initially
});

const SignUpContainer = compose(
  injectIntl,
  connect(mapStateToProps, mapDispatchToProps)
)(SignUp);

export default SignUpContainer;
