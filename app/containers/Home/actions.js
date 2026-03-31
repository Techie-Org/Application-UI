import {
  FETCH_ARTISTS,
  FETCH_ARTISTS_FAILED,
  FETCH_ARTISTS_SUCCESS,
  CONFIRM_BOOKING,
  CONFIRM_BOOKING_SUCCESS,
  CONFIRM_BOOKING_FAILED,
} from './constants';

export function fetchArtists() {
  return {
    type: FETCH_ARTISTS,
  };
}

export function fetchArtistsSuccess(data) {
  return {
    type: FETCH_ARTISTS_SUCCESS,
    data,
  };
}

export function fetchArtistsFailed(data) {
  return {
    type: FETCH_ARTISTS_FAILED,
    data,
  };
}

export function confirmBooking(bookingDetails) {
  return {
    type: CONFIRM_BOOKING,
    payload: bookingDetails,
  };
}

export function confirmBookingSuccess(data) {
  return {
    type: CONFIRM_BOOKING_SUCCESS,
    data,
  };
}

export function confirmBookingFailed(data) {
  return {
    type: CONFIRM_BOOKING_FAILED,
    data,
  };
}
