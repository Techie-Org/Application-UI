import {
  FETCH_BOOKINGS,
  FETCH_BOOKINGS_FAILED,
  FETCH_BOOKINGS_SUCCESS,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_FAILED,
  UPDATE_USER_PROFILE_SUCCESS,
} from './constants';

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

export function updateUserProfile(data) {
  return {
    type: UPDATE_USER_PROFILE,
    data,
  };
}

export function updateUserProfileFailed(error) {
  return {
    type: UPDATE_USER_PROFILE_FAILED,
    data: error,
  };
}

export function updateUserProfileSuccess(data) {
  return {
    type: UPDATE_USER_PROFILE_SUCCESS,
    data,
  };
}
