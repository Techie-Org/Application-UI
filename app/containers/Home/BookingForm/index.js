import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import BookingForm from 'components/Home/BookingForm';
import { makeSelectIsUserLoggedIn, makeSelectUserProfileData } from 'containers/GlobalHeaderContainer/selectors';
import { confirmBooking as confirmBookingAction } from '../actions';
import { makeSelectConfirmBookingLoading, makeSelectConfirmBookingSuccess } from '../selectors';

const mapStateToProps = () => (
  createStructuredSelector({
    confirmBookingLoading: makeSelectConfirmBookingLoading(),
    confirmBookingSuccess: makeSelectConfirmBookingSuccess(),
    isUserLoggedIn: makeSelectIsUserLoggedIn(),
    userProfile: makeSelectUserProfileData(),
  })
);

export const mapDispatchToProps = (dispatch) => ({
  confirmBooking: (bookingDetails) => dispatch(confirmBookingAction(bookingDetails)),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(BookingForm);
