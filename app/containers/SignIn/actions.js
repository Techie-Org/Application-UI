import { SIGN_IN_USER, SIGN_IN_USER_SUCCESS } from './constants';

export function signInUser(signInFormData) {
  console.log('setup containers/SignIn signInUser action called signInFormData', signInFormData);
  return {
    type: SIGN_IN_USER,
    formData: signInFormData,
  };
}

export function signInUserSuccess(data) {
  console.log('setup containers/SignIn signInUserSuccess action called data', data);
  return {
    type: SIGN_IN_USER_SUCCESS,
    data,
  };
}
