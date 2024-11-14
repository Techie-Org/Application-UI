/*
  Define the sagas that will always be present in the application
*/

import appSagas from 'containers/App/sagas';
import globalHeaderSagas from 'containers/GlobalHeaderContainer/sagas';

export const rootSagas = {
  app: appSagas,
  globalHeader: globalHeaderSagas,
};

export default rootSagas;
