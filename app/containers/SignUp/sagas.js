import { call, put, takeLatest, select } from 'redux-saga/effects';
import request from 'utils/request';
import getHeaders from 'utils/web';
import { loadHomeSuccess, registerUserSuccess } from './actions';
import {
  LOAD_HOME,
  REGISTER_USER_API_URL,
  REGISTER_USER,
  TIMEOUT,
} from './constants';

export function* registerUserSaga() {
  try {
    const requestUrl = REGISTER_USER_API_URL;
    const data = yield select(() => {
      return {
        name: 'abc',
        phone: '12341234',
        email: 'acd@gmail.com',
        password: 'asdfasdf',
      };
    }); // needs userData here entered in form

    const response = yield call(request, requestUrl, {
      method: 'POST',
      data: data,
      timeout: TIMEOUT,
      headers: getHeaders(),
    });

    console.log('register User response', response);
    yield put(registerUserSuccess(response));
  } catch (error) {
    console.log('register User error', error); // Not getting proper error response
  }
}

export function* registerUserDaemon() {
  yield takeLatest(REGISTER_USER, registerUserSaga);
}

export default [registerUserDaemon];
