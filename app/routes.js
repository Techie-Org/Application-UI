/*
  * Component Import Helper
*/
export const componentHelper = {
  home: () => import('containers/Home'),
  signIn: () => import('containers/SignIn'),
  signUp: () => import('containers/SignUp'),
  bookings: () => import('containers/User'),
};

/*
  * Reducer Import Helper
*/
export const reducerHelper = {
  home: () => import('containers/Home/reducer'),
  globalHeader: () => import('containers/GlobalHeaderContainer/reducer'),
  signIn: () => import('containers/SignIn/reducer'),
  signUp: () => import('containers/SignUp/reducer'),
  bookings: () => import('containers/User/reducer'),
};

/*
  * Saga Import Helper
*/
export const sagaHelper = {
  home: () => import('containers/Home/sagas'),
  globalHeader: () => import('containers/GlobalHeaderContainer/sagas'),
  signIn: () => import('containers/SignIn/sagas'),
  signUp: () => import('containers/SignUp/sagas'),
  bookings: () => import('containers/User/sagas'),
};

/*
  * Enabled routes listed below will be mapped to the Router in app/app.js
*/
export const enabledRoutes = [
  'home',
  'signIn',
  'signUp',
  'bookings',
];

const homeRoutes = {
  home: {
    path: '/',
    name: 'home',
    reducers: ['home', 'globalHeader'],
    sagas: ['home', 'globalHeader'],
    config: {},
  },
};

const accountRoutes = {
  signIn: {
    path: '/account/signIn',
    name: 'signIn',
    reducers: ['signIn'],
    sagas: ['signIn'],
    config: {},
  },
  signUp: {
    path: '/account/signUp',
    name: 'signUp',
    reducers: ['signUp'],
    sagas: ['signUp'],
    config: {},
  },
};

const userRoutes = {
  bookings: {
    path: '/user/bookings',
    name: 'bookings',
    reducers: ['bookings'],
    sagas: ['bookings'],
    config: {},
  },
};

export const routes = {
  ...homeRoutes,
  ...accountRoutes,
  ...userRoutes,
};
