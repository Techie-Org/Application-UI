import { LOAD_HOME, LOAD_HOME_SUCCESS } from './constants';

export function loadHome(request) {
  console.log('setup containers/SignUp loadHome action called');
  return {
    type: LOAD_HOME,
    request,
  };
}

export function loadHomeSuccess(data) {
  console.log('setup containers/SignUp loadHomeSuccess action called data', data);
  return {
    type: LOAD_HOME_SUCCESS,
    data,
  };
}
