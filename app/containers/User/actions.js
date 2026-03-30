import { FETCH_BOOKINGS, FETCH_BOOKINGS_FAILED, FETCH_BOOKINGS_SUCCESS } from './constants';

export function fetchUserBookings(data) {
  return {
    type: FETCH_BOOKINGS,
    data,
  };
}

export function fetchUserBookingsFailed(data) {
  return {
    type: FETCH_BOOKINGS_FAILED,
    data,
  };
}

export function fetchUserBookingsSuccess(data) {
  return {
    type: FETCH_BOOKINGS_SUCCESS,
    data,
  };
}
