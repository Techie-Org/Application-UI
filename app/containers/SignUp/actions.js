import { parseSignUpFormData } from './utils';
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
    formData: parseSignUpFormData(signUpFormData),
  };
}

export function registerUserSuccess(data) {
  console.log(
    'setup containers/SignUp registerUserSuccess action called dat',
    data
  );
  return {
    type: REGISTER_USER_SUCCESS,
    data,
  };
}
export function validateOtp(otp) {
  console.log(
    'setup containers/Signin ootp validation action called data',
    otp
  );
  return {
    type: VALIDATE_OTP,
    otpValue: otp,
  };
}

export function validateOtpSuccess(data) {
  console.log(
    'setup containers/SignIn validateOtpSuccess action called data',
    data
  );
  return {
    type: VALIDATE_OTP_SUCCESS,
    data,
  };
}
