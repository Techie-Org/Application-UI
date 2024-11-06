import { parseFormData } from './utils';
import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
} from './constants';

export function registerUser(signUpFormData) {
  console.log('setup containers/SignUp registerUser action called signUpFormData', signUpFormData);
  return {
    type: REGISTER_USER,
    formData: parseFormData(signUpFormData),
  };
}

export function registerUserSuccess(data) {
  console.log('setup containers/SignUp registerUserSuccess action called data', data);
  return {
    type: REGISTER_USER_SUCCESS,
    data: data,
  };
}
