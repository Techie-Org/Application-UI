import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import getHeaders from 'utils/web';
import { fetchArtistsSuccess, fetchArtistsFailed } from './actions';
import { FETCH_ARTISTS, FETCH_ARTISTS_API_URL, TIMEOUT } from './constants';

export function* fetchArtistsSaga() {
  try {
    const requestUrl = FETCH_ARTISTS_API_URL;

    const response = yield call(request, requestUrl, {
      timeout: TIMEOUT,
      headers: getHeaders(),
    });

    yield put(fetchArtistsSuccess(response.data));
  } catch (error) {
    yield put(fetchArtistsFailed(error));
    console.log('fetchArtistsFailed error', error);
  }
}

export function* fetchArtistsDaemon() {
  yield takeLatest(FETCH_ARTISTS, fetchArtistsSaga);
}

export default [fetchArtistsDaemon];
