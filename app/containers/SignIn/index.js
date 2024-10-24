import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import compose from 'lodash/fp/compose';
import SignIn from 'components/SignIn';
import SignUp from 'components/SignUp';
import { loadHome as loadHomeAction } from './actions';
import { makeSelectHomeResponse } from './selectors';

const mapStateToProps = () => createStructuredSelector({
  tokenData: () => '1234', // sample data initially
  homeData: makeSelectHomeResponse(),
});

export const mapDispatchToProps = (dispatch) => ({
  loadHome: (request) => dispatch(loadHomeAction(request)), // Sample action dispatched initially
});

const SignInContainer = compose(
  injectIntl,
  connect(mapStateToProps, mapDispatchToProps)
)(SignUp);

export default SignInContainer;
