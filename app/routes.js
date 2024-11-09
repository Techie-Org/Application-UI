/*
  * Component Import Helper
*/
export const componentHelper = {
  home: () => import('containers/Home'),
  signIn: () => import('containers/SignIn'),
  signUp: () => import('containers/SignUp'),
};

/*
  * Reducer Import Helper
*/
export const reducerHelper = {
  home: () => import('containers/Home/reducer'),
  signIn: () => import('containers/SignIn/reducer'),
  signUp: () => import('containers/SignUp/reducer'),
};

/*
  * Saga Import Helper
*/
export const sagaHelper = {
  home: () => import('containers/Home/sagas'),
  signIn: () => import('containers/SignIn/sagas'),
  signUp: () => import('containers/SignUp/sagas'),
};

/*
  * Enabled routes listed below will be mapped to the Router in app/app.js
*/
export const enabledRoutes = [
  'home',
  'signIn',
  'signUp',
];

const homeRoutes = {
  home: {
    path: '/',
    name: 'home',
    reducers: ['home'],
    sagas: ['home'],
    config: {},
  },
  signIn: {
    path: '/signIn',
    name: 'signIn',
    reducers: ['signIn'],
    sagas: ['signIn'],
    config: {},
  },
  signUp: {
    path: '/signUp',
    name: 'signUp',
    reducers: ['signUp'],
    sagas: ['signUp'],
    config: {},
  },
};

export const routes = {
  ...homeRoutes,
};
