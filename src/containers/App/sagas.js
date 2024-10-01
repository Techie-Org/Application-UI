import { call, put, select, take, takeLatest } from "redux-saga/effects";
import request from '../../utils/request';



export function* getAnonTokenData() {
  try {
    
  } catch (error) {
    
  }
}

export function* getToken(params) {
  try {
    
  } catch (error) {
    
  }
}

export function* getAnonTokenDaemon() {
  yield takeLatest('action_name', getAnonTokenData);
}

export default [
  getAnonTokenDaemon,
];
