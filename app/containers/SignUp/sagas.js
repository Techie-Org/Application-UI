import { call, put, takeLatest, select } from 'redux-saga/effects';
import request from 'utils/request';
import getHeaders from 'utils/web';
import { history } from 'utils/browserHistory';
import { registerUserSuccess, validateOtpSuccess } from './actions';
import { makeSelectSignUpFormData, makeSelectOtpValue } from './selectors';
import {
  REGISTER_USER_API_URL,
  REGISTER_USER,
  TIMEOUT,
  VALIDATE_OTP,
  VALIDATE_OTP_API_URL,
} from './constants';
import { transformvalidateOtpData } from './utils';

export function* registerUserSaga() {
  try {
    const requestUrl = REGISTER_USER_API_URL;
    const formData = yield select(makeSelectSignUpFormData());

    const response = yield call(request, requestUrl, {
      method: 'POST',
      data: formData,
      timeout: TIMEOUT,
      headers: getHeaders(),
    });

    console.log('register User response', response);
    yield put(registerUserSuccess(response.data));
  } catch (error) {
    console.log('register User error', error);
  }
}
export function* validateOtpSaga() {
  try {
    const requestUrl = VALIDATE_OTP_API_URL;
    const formData = yield select(makeSelectSignUpFormData());
    const otpData = yield select(makeSelectOtpValue());
    const formDataWithOtp = transformvalidateOtpData(formData, otpData);
    const response = yield call(request, requestUrl, {
      method: 'POST',
      data: formDataWithOtp,
      timeout: TIMEOUT,
      headers: getHeaders(),
    });

    console.log('otpValidate response', response);
    yield put(validateOtpSuccess(response.data));

    history.navigate('/account/signIn');
  } catch (error) {
    console.log('otpValidate error', error);
  }
}

export function* registerUserDaemon() {
  yield takeLatest(REGISTER_USER, registerUserSaga);
}
export function* validateOtpDaemon() {
  yield takeLatest(VALIDATE_OTP, validateOtpSaga);
}

export default [registerUserDaemon, validateOtpDaemon];
