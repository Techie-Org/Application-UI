import { LOAD_HOME, LOAD_HOME_SUCCESS } from './constants';

export function fetchArtists() {
  return {
    type: LOAD_HOME,
  };
}

export function fetchArtistsSuccess(data) {
  return {
    type: LOAD_HOME_SUCCESS,
    data,
  };
}
