import { LOAD_HOME, LOAD_HOME_SUCCESS } from "./constants";

export function loadHome(request) {
  console.log("setup containers/Home loadHome action called");
  return {
    type: LOAD_HOME,
    request,
  };
}

export function loadHomeSuccess(data) {
  console.log("setup containers/Home loadHomeSuccess action called data", data);
  return {
    type: LOAD_HOME_SUCCESS,
    data,
  };
}