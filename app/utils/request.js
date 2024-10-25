import axios from 'axios';
import get from 'lodash/get';
import { CANCEL } from 'redux-saga';

const CANCEL_OPERATION = 'Operations canceled.';

export const CSL_ERROR_TYPE = 'CSL Error';

export const throwCsl = (response, url, status = 503) => {
  // should not be in here if there is no error
  if (!response || !response.CslErrorResponse || (status >= 0 && status < 300)) {
    return;
  }

  // This is the object htat catch of the calling saga will receive
  // This is what any calls using 'handleApiErrors' will receive
  const error = new Error(CSL_ERROR_TYPE);
  error.reportingType = CSL_ERROR_TYPE;
  error.response = { status, CslErrorResponse: response };
  throw error;
};

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 *  @param {object} response A reponse from a network request
 *
 *  @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = error && error.response;
  delete error.config;
  delete error.request;
  throw error;
}

function handleError(error) {
  // istanbul ignore next
  const errorObj = new Error((error && error.response && error.response.statusText) || error.message);
  errorObj.response = error && error.response;
  errorObj.code = error && error.code; // ECONNABORTED
  delete errorObj.config;
  delete errorObj.request;
  throw errorObj;
}

export const processCslErrors = (response, url) => {
  const { CslErrorResponse } = response;
  if (CslErrorResponse) {
    const status = 503;
    throwCsl(response, url, status);
  }
  return response;
};

/**
 * Parses the JSON returned by a network request
 *
 * @param {object} response A reponse from a network request
 *
 * @return {object} Returns the parsed JSON from the request
 */
function parseJSON(response) {
  const parsedResponse = response.data || {};
  const contentType = get(response, 'headers["content-type"]', '');
  // IE doesn't support startsWith
  if (contentType.indexOf('image/' === 0) || contentType.indexOf('application/pdf') > -1) {
    return parsedResponse;
  }
  parsedResponse.status = response.status;
  return parsedResponse;
}

/**
 * Requests a URL, returning a promise
 *
 * @param {string} url The URL we want to request
 *
 * @param {object} [options] The options we want to pass to 'fetch'
 *
 * @return {object} Returns the response data
 */
export default function request(url, options = {}) {
  const cancelTokenSource = axios.CancelToken.source();
  // console.log('cancelTokenSource.token', cancelTokenSource.token);
  const promise = axios(url, Object.assign(options, { cancelToken: cancelTokenSource.token }))
    .then(checkStatus)
    .then(handleError)
    .then(parseJSON)
    .then(((response) => processCslErrors(response, url)));

  /* istanbul ignore next */
  promise[CANCEL] = () => {
    // cancel XHR request, called by redux-saga when a saga gets cancelled
    cancelTokenSource.cancel(CANCEL_OPERATION);
  };
}
