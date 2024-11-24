import { fromJS } from 'immutable';
import { LOAD_USER_PROFILE, USER_PROFILE_SUCCESS, USER_LOGOUT, USER_LOGOUT_SUCCESS, USER_LOGGED_IN } from './constants';

// const REDUCER_KEY = 'globalHeader';

const initialState = fromJS({
  userProfile: {
    loading: false,
    loaded: false,
    error: false,
    data: {},
  },
  userLogout: {
    loading: false,
    loaded: false,
    error: false,
    data: {},
  },
  userLoggedIn: false,
});

function globalHeaderReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_PROFILE:
      return state
        .setIn(['userProfile', 'loading'], true)
        .setIn(['userProfile', 'loaded'], false)
        .setIn(['userProfile', 'error'], false);
    case USER_PROFILE_SUCCESS:
      return state
        .setIn(['userProfile', 'loading'], false)
        .setIn(['userProfile', 'loaded'], true)
        .setIn(['userProfile', 'error'], false)
        .setIn(['userProfile', 'data'], action.data);
    case USER_LOGOUT:
      return state
        .setIn(['userLogout', 'loading'], true)
        .setIn(['userLogout', 'loaded'], false)
        .setIn(['userLogout', 'error'], false);
    case USER_LOGOUT_SUCCESS:
      return state
        .setIn(['userLogout', 'loading'], false)
        .setIn(['userLogout', 'loaded'], true)
        .setIn(['userLogout', 'error'], false)
        .setIn(['userLogout', 'data'], {});
    case USER_LOGGED_IN:
      return state
        .set('userLoggedIn', action.payload);
    default:
      return state;
  }
}

export default globalHeaderReducer;
