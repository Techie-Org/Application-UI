import { call, put, takeLatest, select } from 'redux-saga/effects';
import request from 'utils/request';
import getHeaders from 'utils/web';
import { history } from 'utils/browserHistory';
import { signInUserSuccess } from './actions';
import { setUserLogIn } from '../GlobalHeaderContainer/actions';
import { makeSelectSignInFormData } from './selectors';
import {
  SIGN_IN_USER, SIGN_IN_USER_API_URL,
  TIMEOUT,
} from './constants';

export function* signInUserSaga() {
  try {
    const requestUrl = SIGN_IN_USER_API_URL;
    const formData = yield select(makeSelectSignInFormData());

    const response = yield call(request, requestUrl, {
      method: 'POST',
      data: formData,
      timeout: TIMEOUT,
      headers: getHeaders(),
    });

    yield put(signInUserSuccess(response.data));
    yield put(setUserLogIn(true));
    history.navigate('/');
  } catch (error) {
    console.log('signInUser error', error);
  }
}

export function* signInUserDaemon() {
  yield takeLatest(SIGN_IN_USER, signInUserSaga);
}

export default [signInUserDaemon];
