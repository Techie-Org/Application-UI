import { call, put, takeLatest, select } from 'redux-saga/effects';
import request from 'utils/request';
import getHeaders from 'utils/web';
import { history } from 'utils/browserHistory';
import { registerUserSuccess } from './actions';
import { makeSelectSignUpFormData } from './selectors';
import {
  REGISTER_USER_API_URL,
  REGISTER_USER,
  TIMEOUT,
} from './constants';

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

    yield put(registerUserSuccess(response.data));
    history.navigate('/account/signIn');
  } catch (error) {
    console.log('register User error', error);
  }
}

export function* registerUserDaemon() {
  yield takeLatest(REGISTER_USER, registerUserSaga);
}

export default [registerUserDaemon];
