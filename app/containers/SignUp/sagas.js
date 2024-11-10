import { put, takeLatest } from 'redux-saga/effects';

export function* loadHome() {
  console.log('setup containers/Home loadHome saga called');
}

export function* loadHomeDaemon() {
  yield takeLatest('LOAD_HOME', loadHome);
}

export default [loadHomeDaemon];
