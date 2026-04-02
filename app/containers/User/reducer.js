import { fromJS } from 'immutable';
import {
  FETCH_BOOKINGS,
  FETCH_BOOKINGS_SUCCESS,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_SUCCESS,
} from './constants';

export const initialState = fromJS({
  userBookings: {
    data: null,
    loading: false,
    loaded: false,
    error: false,
  },
  updateUserProfile: {
    data: null,
    loading: false,
    loaded: false,
    error: false,
  },
});

export default function UserProfileReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_BOOKINGS:
      return state
        .setIn(['userBookings', 'loading'], true)
        .setIn(['userBookings', 'loaded'], false);
    case FETCH_BOOKINGS_SUCCESS:
      return state
        .setIn(['userBookings', 'loading'], false)
        .setIn(['userBookings', 'loaded'], true)
        .setIn(['userBookings', 'data'], action.data);
    case UPDATE_USER_PROFILE:
      return state
        .setIn(['updateUserProfile', 'loading'], true)
        .setIn(['updateUserProfile', 'loaded'], false);
    case UPDATE_USER_PROFILE_SUCCESS:
      return state
        .setIn(['updateUserProfile', 'loading'], false)
        .setIn(['updateUserProfile', 'loaded'], true)
        .setIn(['updateUserProfile', 'data'], action.data);
    default:
      return state;
  }
}
