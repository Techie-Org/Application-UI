import { LOAD_USER_PROFILE, USER_PROFILE_SUCCESS, USER_LOGOUT, USER_LOGOUT_SUCCESS, USER_LOGGED_IN } from './constants';

export function loadUserProfile() {
  return {
    type: LOAD_USER_PROFILE,
  };
}

export function userProfileSuccess(data) {
  return {
    type: USER_PROFILE_SUCCESS,
    data,
  };
}

export function logoutUser() {
  return {
    type: USER_LOGOUT,
  };
}

export function userLogoutSuccess() {
  return {
    type: USER_LOGOUT_SUCCESS,
  };
}

export function setUserLogIn(payload = false) {
  return {
    type: USER_LOGGED_IN,
    payload,
  };
}
