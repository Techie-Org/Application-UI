import { LOAD_HOME, LOAD_HOME_SUCCESS } from './constants';

export function loadHome(request) {
  return {
    type: LOAD_HOME,
    request,
  };
}

export function loadHomeSuccess(data) {
  return {
    type: LOAD_HOME_SUCCESS,
    data,
  };
}
