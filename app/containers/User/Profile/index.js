import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import compose from 'lodash/fp/compose';
import MyProfile from 'components/Profile';
import {
  makeSelectIsUserLoggedIn,
  makeSelectUserProfileData,
  makeSelectUserProfileLoaded,
} from 'containers/GlobalHeaderContainer/selectors';
import { updateUserProfile } from '../actions';

const mapStateToProps = () => createStructuredSelector({
  isUserProfileLoaded: makeSelectUserProfileLoaded(),
  userProfile: makeSelectUserProfileData(),
  isUserLoggedIn: makeSelectIsUserLoggedIn(),
});

export const mapDispatchToProps = (dispatch) => ({
  updateProfile: (payload) => dispatch(updateUserProfile(payload)),
});

const MyProfileContainer = compose(
  injectIntl,
  connect(mapStateToProps, mapDispatchToProps),
)(MyProfile);

export default MyProfileContainer;
