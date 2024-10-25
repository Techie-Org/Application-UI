import { put, takeLatest } from 'redux-saga/effects';
import { loadHomeSuccess } from './actions';
import { LOAD_HOME } from './constants';

export function* loadHome() {
  console.log('setup containers/Home loadHome saga called');
  yield put(loadHomeSuccess('Home data loaded'));
}

export function* loadHomeDaemon() {
  yield takeLatest(LOAD_HOME, loadHome);
}

export default [loadHomeDaemon];
