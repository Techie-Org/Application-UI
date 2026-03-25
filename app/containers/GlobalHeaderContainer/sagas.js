import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import getHeaders from 'utils/web';
import { history } from 'utils/browserHistory';
import { userProfileSuccess, userLogoutSuccess, setUserLogIn } from './actions';
import {
  LOAD_USER_PROFILE,
  USER_PROFILE_API_URL,
  USER_LOGOUT,
  USER_LOGOUT_API_URL,
  TIMEOUT,
} from './constants';

export function* userProfileSaga() {
  try {
    const requestUrl = USER_PROFILE_API_URL;

    const response = yield call(request, requestUrl, {
      timeout: TIMEOUT,
      headers: getHeaders(),
    });

    if (response.success) {
      yield put(userProfileSuccess(response.data));
      yield put(setUserLogIn(true));
    }
  } catch (error) {
    console.log('userProfile error', error);
  }
}

export function* userLogoutSaga() {
  try {
    const requestUrl = USER_LOGOUT_API_URL;

    const response = yield call(request, requestUrl, {
      timeout: TIMEOUT,
      headers: getHeaders(),
    });

    if (response.success) {
      yield put(userLogoutSuccess(response.data));
      yield put(setUserLogIn(false));
      history.navigate('/');
    }
  } catch (error) {
    console.log('logoutUser error', error);
  }
}

export function* userProfileDaemon() {
  yield takeEvery(LOAD_USER_PROFILE, userProfileSaga);
}

export function* userLogoutDaemon() {
  yield takeLatest(USER_LOGOUT, userLogoutSaga);
}

export default [userProfileDaemon, userLogoutDaemon];
