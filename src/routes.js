/* 
  * Component Import Helper
*/
export const componentHelper = {
  home: () => import("containers/Home"),
  signIn: () => import("containers/SignIn"),
};

/* 
  * Reducer Import Helper
*/
export const reducerHelper = {
  home: () => import("containers/Home/reducer"),
  signIn: () => import("containers/SignIn/reducer"),
};

/* 
  * Saga Import Helper
*/
export const sagaHelper = {
  home: () => import("containers/Home/sagas"),
  signIn: () => import("containers/SignIn/sagas"),
};

/* 
  * Enabled routes listed below will be mapped to the Router in app/app.js
*/
export const enabledRoutes = [
  'home',
  'signIn', // Test purpose
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

const signInRoutes = {
  signIn: {
    path: '/signIn',
    name: 'signIn',
    reducers: ['signIn'],
    sagas: ['signIn'],
    config: {},
  },
};

export const routes = {
  ...homeRoutes,
  ...signInRoutes,
};
