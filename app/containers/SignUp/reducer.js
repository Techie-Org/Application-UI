import { fromJS } from 'immutable';
import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  VALIDATE_OTP,
  VALIDATE_OTP_SUCCESS,
} from './constants';

const initialState = fromJS({
  formData: {
    name: '',
    email: '',
    gender: '',
    phone: '',
    password: '',
  },
  registerUser: {
    loading: false,
    loaded: false,
    error: false,
    data: {},
  },
  validateOtp: {
    loading: false,
    loaded: false,
    error: false,
    data: {},
  },
});

function signUp(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return state
        .setIn(['registerUser', 'loading'], true)
        .setIn(['registerUser', 'loaded'], false)
        .setIn(['registerUser', 'error'], false)
        .set('formData', action.formData);
    case REGISTER_USER_SUCCESS:
      return state
        .setIn(['registerUser', 'loading'], false)
        .setIn(['registerUser', 'loaded'], true)
        .setIn(['registerUser', 'error'], false)
        .setIn(['registerUser', 'data'], action.data);
    case VALIDATE_OTP:
      return state
        .setIn(['validateOtp', 'loading'], true)
        .setIn(['validateOtp', 'loaded'], false)
        .setIn(['validateOtp', 'error'], false)
        .setIn(['userOtpValue', 'otp'], action.otpValue);
    case VALIDATE_OTP_SUCCESS:
      return state
        .setIn(['validateOtp', 'loading'], false)
        .setIn(['validateOtp', 'loaded'], true)
        .setIn(['validateOtp', 'error'], false)
        .setIn(['validateOtp', 'data'], action.data);
    default:
      return state;
  }
}

export default signUp;
