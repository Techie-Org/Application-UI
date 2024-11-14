import { call, put, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import getHeaders from 'utils/web';
import { userProfileSuccess, setUserLogIn } from './actions';
import {
  LOAD_USER_PROFILE,
  USER_PROFILE_API_URL,
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
    console.log('userProfile response', response);
  } catch (error) {
    console.log('userProfile error', error);
  }
}

export function* userProfileDaemon() {
  yield takeEvery(LOAD_USER_PROFILE, userProfileSaga);
}

export default [userProfileDaemon];
