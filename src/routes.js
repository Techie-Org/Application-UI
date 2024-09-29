/* 
  * Component Import Helper
*/
export const componentHelper = {
  home: () => import('containers/Home'),
};

/* 
  * Reducer Import Helper
*/
export const reducerHelper = {
  home: () => import('containers/Home/reducer'),
};

/* 
  * Saga Import Helper
*/
export const sagaHelper = {
  home: () => import('containers/Home/sagas'),
};

/* 
  * Enabled routes listed below will be mapped to the Router in app/app.js
*/
export const enabledRoutes = [
  'home',
];

const homeRoutes = {
  home: {
    path: '/',
    name: 'home',
    reducers: ['home'],
    sagas: ['home'],
    config: {},
  },
};

export const routes = {
  ...homeRoutes,
};
