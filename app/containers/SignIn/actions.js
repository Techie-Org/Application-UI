import { SIGN_IN_USER, SIGN_IN_USER_SUCCESS } from './constants';

export function signInUser(signInFormData) {
  return {
    type: SIGN_IN_USER,
    formData: signInFormData,
  };
}

export function signInUserSuccess(data) {
  return {
    type: SIGN_IN_USER_SUCCESS,
    data,
  };
}
