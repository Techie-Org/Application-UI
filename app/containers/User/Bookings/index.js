import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import compose from 'lodash/fp/compose';
import MyBookings from 'components/Bookings';
import {
  makeSelectIsUserLoggedIn,
  makeSelectUserProfileData,
  makeSelectUserProfileLoaded,
} from 'containers/GlobalHeaderContainer/selectors';
import { fetchUserBookings } from '../actions';
import {
  makeSelectUserBookingsData,
  makeSelectUserBookingsLoaded,
} from './selectors';

const mapStateToProps = () => createStructuredSelector({
  bookings: makeSelectUserBookingsData(),
  bookingsLoaded: makeSelectUserBookingsLoaded(),
  isUserProfileLoaded: makeSelectUserProfileLoaded(),
  userProfile: makeSelectUserProfileData(),
  isUserLoggedIn: makeSelectIsUserLoggedIn(),
});

export const mapDispatchToProps = (dispatch) => ({
  fetchBookings: (payload) => dispatch(fetchUserBookings(payload)),
});

const MyBookingsContainer = compose(
  injectIntl,
  connect(mapStateToProps, mapDispatchToProps),
)(MyBookings);

export default MyBookingsContainer;
