import { put, takeLatest } from 'redux-saga/effects';
import { fetchArtistsSuccess } from './actions';
import { LOAD_HOME } from './constants';
import artists from './tests/mockData/artists.json';

export function* fetchArtistsSaga() {
  yield put(fetchArtistsSuccess(artists));
}

export function* loadHomeDaemon() {
  yield takeLatest(LOAD_HOME, fetchArtistsSaga);
}

export default [loadHomeDaemon];
