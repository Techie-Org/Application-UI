import { LOAD_USER_PROFILE, USER_PROFILE_SUCCESS, USER_LOGGED_IN } from './constants';

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

export function setUserLogIn(payload = false) {
  console.log('setup containers/GlobalHeader userLogoutSuccess action called data');
  return {
    type: USER_LOGGED_IN,
    payload,
  };
}
