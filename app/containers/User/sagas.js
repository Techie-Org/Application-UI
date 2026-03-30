import { call, put, takeLatest, select } from 'redux-saga/effects';
import request from 'utils/request';
import getHeaders from 'utils/web';
import { makeSelectIsUserLoggedIn } from 'containers/GlobalHeaderContainer/selectors';
import { fetchUserBookingsFailed, fetchUserBookingsSuccess } from './actions';
import { FETCH_BOOKINGS, FETCH_USER_BOOKINGS_API_URL, TIMEOUT } from './constants';

export function* fetchUserBookingsSaga({ data } = {}) {
  try {
    const requestUrl = FETCH_USER_BOOKINGS_API_URL;
    const isUserLoggedIn = yield select(makeSelectIsUserLoggedIn());

    if (!isUserLoggedIn) {
      return;
    }

    const response = yield call(request, requestUrl, {
      method: 'POST',
      data,
      timeout: TIMEOUT,
      headers: getHeaders(),
    });

    yield put(fetchUserBookingsSuccess(response.data));
  } catch (error) {
    yield put(fetchUserBookingsFailed(error));
    console.log('fetchUserBookings error', error);
  }
}

export function* fetchUserBookingsDaemon() {
  yield takeLatest(FETCH_BOOKINGS, fetchUserBookingsSaga);
}

export default [fetchUserBookingsDaemon];
