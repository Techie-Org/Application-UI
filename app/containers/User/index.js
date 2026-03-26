import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import compose from 'lodash/fp/compose';
import MyBookings from 'components/Bookings';
import { myBookings } from './mockData';

const mapStateToProps = () => createStructuredSelector({
  bookings: () => myBookings,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchBookings: () => {},
});

const MyBookingsContainer = compose(
  injectIntl,
  connect(mapStateToProps, mapDispatchToProps)
)(MyBookings);

export default MyBookingsContainer;
