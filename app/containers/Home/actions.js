import {
  FETCH_ARTISTS,
  FETCH_ARTISTS_FAILED,
  FETCH_ARTISTS_SUCCESS,
} from './constants';

export function fetchArtists() {
  return {
    type: FETCH_ARTISTS,
  };
}

export function fetchArtistsSuccess(data) {
  return {
    type: FETCH_ARTISTS_SUCCESS,
    data,
  };
}

export function fetchArtistsFailed(data) {
  return {
    type: FETCH_ARTISTS_FAILED,
    data,
  };
}
