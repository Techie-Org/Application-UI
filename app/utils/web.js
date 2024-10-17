/**
 * request/response handler
 */
const getHeaders = (token = null, locale = 'en-US', accept = 'application/json') => {
  let headers = {
    'Accept-Language': locale,
    Accept: accept,
    'Content-Type': 'application/json',
  };

  if (token) {
    headers = { ...headers, Authorization: `bearer ${token}` };
  }
  return headers;
};

export default getHeaders;
