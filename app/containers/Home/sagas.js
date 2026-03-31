import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import getHeaders from 'utils/web';
import {
  fetchArtistsSuccess,
  fetchArtistsFailed,
  confirmBookingSuccess,
  confirmBookingFailed,
} from './actions';
import {
  FETCH_ARTISTS,
  FETCH_ARTISTS_API_URL,
  TIMEOUT,
  CONFIRM_BOOKING_API_URL,
  CONFIRM_BOOKING,
} from './constants';

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

export function* confirmBookingSaga({ payload }) {
  try {
    const requestUrl = CONFIRM_BOOKING_API_URL;

    const response = yield call(request, requestUrl, {
      method: 'POST',
      data: payload,
      timeout: TIMEOUT,
      headers: getHeaders(),
    });

    yield put(confirmBookingSuccess(response));
  } catch (error) {
    yield put(confirmBookingFailed(error));
    console.log('confirmBookingFailed error', error);
  }
}

export function* fetchArtistsDaemon() {
  yield takeLatest(FETCH_ARTISTS, fetchArtistsSaga);
}

export function* confirmBookingDaemon() {
  yield takeLatest(CONFIRM_BOOKING, confirmBookingSaga);
}

export default [fetchArtistsDaemon, confirmBookingDaemon];
