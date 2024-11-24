import { LOAD_USER_PROFILE, USER_PROFILE_SUCCESS, USER_LOGOUT, USER_LOGOUT_SUCCESS, USER_LOGGED_IN } from './constants';

export function loadUserProfile() {
  console.log('setup containers/GlobalHeader loadUserProfile action called');
  return {
    type: LOAD_USER_PROFILE,
  };
}

export function userProfileSuccess(data) {
  console.log('setup containers/GlobalHeader userProfileSuccess action called data', data);
  return {
    type: USER_PROFILE_SUCCESS,
    data,
  };
}

export function logoutUser() {
  console.log('setup containers/GlobalHeader userLogout action called');
  return {
    type: USER_LOGOUT,
  };
}

export function userLogoutSuccess() {
  console.log('setup containers/GlobalHeader userLogoutSuccess action called data');
  return {
    type: USER_LOGOUT_SUCCESS,
  };
}

export function setUserLogIn(payload = false) {
  console.log('setup containers/GlobalHeader userLogoutSuccess action called data');
  return {
    type: USER_LOGGED_IN,
    payload,
  };
}
