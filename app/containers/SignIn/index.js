import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import compose from 'lodash/fp/compose';
import SignIn from 'components/SignIn';
import { signInUser as signInUserAction } from './actions';
import { makeSelectSignInUserLoading, makeSelectSignInUserLoaded } from './selectors';

const mapStateToProps = () => createStructuredSelector({
  signInUserLoading: makeSelectSignInUserLoading(),
  signInUserLoaded: makeSelectSignInUserLoaded(),
});

export const mapDispatchToProps = (dispatch) => ({
  signInUser: (request) => dispatch(signInUserAction(request)),
});

const SignInContainer = compose(
  injectIntl,
  connect(mapStateToProps, mapDispatchToProps)
)(SignIn);

export default SignInContainer;
