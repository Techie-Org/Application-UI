import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import GlobalHeader from 'components/GlobalHeader';
import compose from 'lodash/fp/compose';
import { loadUserProfile, logoutUser } from './actions';
import { makeSelectUserProfileData, makeSelectIsUserLoggedIn } from './selectors';

const mapStateToProps = createStructuredSelector({
  userProfileData: makeSelectUserProfileData(),
  isUserLoggedIn: makeSelectIsUserLoggedIn(),
});

export const mapDispatchToProps = (dispatch) => ({
  loadUserProfile: () => dispatch(loadUserProfile()),
  logoutUser: () => dispatch(logoutUser()),
});

const GlobalHeaderContainer = compose(
  injectIntl,
  connect(mapStateToProps, mapDispatchToProps)
)(GlobalHeader);

export default GlobalHeaderContainer;
