/*
  Define the sagas that will always be present in the application
*/

import globalHeaderSagas from 'containers/GlobalHeaderContainer/sagas';

export const rootSagas = {
  globalHeader: globalHeaderSagas,
};

export default rootSagas;
