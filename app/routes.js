/*
  * Component Import Helper
*/
export const componentHelper = {
  home: () => import('containers/Home'),
  signIn: () => import('containers/SignIn'),
  signUp: () => import('containers/SignUp'),
  userBookings: () => import('containers/User/Bookings'),
};

/*
  * Reducer Import Helper
*/
export const reducerHelper = {
  home: () => import('containers/Home/reducer'),
  globalHeader: () => import('containers/GlobalHeaderContainer/reducer'),
  signIn: () => import('containers/SignIn/reducer'),
  signUp: () => import('containers/SignUp/reducer'),
  user: () => import('containers/User/reducer'),
};

/*
  * Saga Import Helper
*/
export const sagaHelper = {
  home: () => import('containers/Home/sagas'),
  globalHeader: () => import('containers/GlobalHeaderContainer/sagas'),
  signIn: () => import('containers/SignIn/sagas'),
  signUp: () => import('containers/SignUp/sagas'),
  user: () => import('containers/User/sagas'),
};

/*
  * Enabled routes listed below will be mapped to the Router in app/app.js
*/
export const enabledRoutes = [
  'home',
  'signIn',
  'signUp',
  'userBookings',
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
    path: '/account',
    name: 'signIn',
    reducers: ['signIn', 'signUp'],
    sagas: ['signIn', 'signUp'],
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
  userBookings: {
    path: '/user/bookings',
    name: 'userBookings',
    reducers: ['user'],
    sagas: ['user'],
    config: {},
  },
};

export const routes = {
  ...homeRoutes,
  ...accountRoutes,
  ...userRoutes,
};
