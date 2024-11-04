import { REGISTRATION_SUCCESSFUL,SIGNUP_FORM_DATA } from './constants';
import { parseFormData } from './utils';
export function registrationSuccessful() {
  console.log('setup containers/SignUp registrationSuccessful action called');
  return {
    type: REGISTRATION_SUCCESSFUL,
  };
}
export function signUpFormData(formData) {
  console.log('setup containers/SignUp form data action called');
  return {
    type: SIGNUP_FORM_DATA,
    payload:parseFormData(formData)
  };
}
