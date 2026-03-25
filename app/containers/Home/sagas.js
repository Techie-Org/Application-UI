import { put, takeLatest } from 'redux-saga/effects';
import { fetchArtistsSuccess } from './actions';
import { LOAD_HOME } from './constants';
import artists from './artists_export.json';

export function* fetchArtistsSaga() {
  yield put(fetchArtistsSuccess(artists));
}

export function* loadHomeDaemon() {
  yield takeLatest(LOAD_HOME, fetchArtistsSaga);
}

export default [loadHomeDaemon];
