import { parseSignUpFormData } from './utils';
import {
  REGISTER_USER,
  REGISTER_USER_FAILED,
  REGISTER_USER_SUCCESS,
  VALIDATE_OTP,
  VALIDATE_OTP_FAILED,
  VALIDATE_OTP_SUCCESS,
} from './constants';

export function registerUser(signUpFormData) {
  return {
    type: REGISTER_USER,
    formData: parseSignUpFormData(signUpFormData),
  };
}

export function registerUserFailed(data) {
  return {
    type: REGISTER_USER_FAILED,
    data,
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

export function validateOtpFailed(data) {
  return {
    type: VALIDATE_OTP_FAILED,
    data,
  };
}

export function validateOtpSuccess(data) {
  return {
    type: VALIDATE_OTP_SUCCESS,
    data,
  };
}
