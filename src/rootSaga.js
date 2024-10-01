/*
  Define the sagas that will always be present in the application
*/

import appSagas from './containers/App/sagas';

export const rootSagas = {
  app: appSagas,
};

export default rootSagas;
