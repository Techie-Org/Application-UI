/*
  Define the reducers that will always be present in the application
*/

import routerReducer from 'utils/routeReducer';
import appReducer from 'containers/App/reducer';
import globalHeaderReducer from 'containers/GlobalHeaderContainer/reducer';

export const rootReducer = {
  route: routerReducer,
  app: appReducer,
  globalHeader: globalHeaderReducer,
};

export default rootReducer;
