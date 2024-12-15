import { parseFormData } from './utils';
import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  VALIDATE_OTP,
  VALIDATE_OTP_SUCCESS,
} from './constants';

export function registerUser(signUpFormData) {
  console.log(
    'setup containers/SignUp registerUser action called signUpFormData',
    signUpFormData
  );
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
export function validateOtp(otp) {
  return {
    type: VALIDATE_OTP,
    otpValue: otp,
  };
}

export function validateOtpSuccess(data) {
  return {
    type: VALIDATE_OTP_SUCCESS,
    data,
  };
}
