import { parseFormData } from './utils';
import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
} from './constants';

export function registerUser(signUpFormData) {
  return {
    type: REGISTER_USER,
    formData: parseFormData(signUpFormData),
  };
}

export function registerUserSuccess(data) {
  return {
    type: REGISTER_USER_SUCCESS,
    data,
  };
}
