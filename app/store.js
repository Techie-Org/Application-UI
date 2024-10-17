import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

function createReducer(asyncReducers = {}) {
  return combineReducers({
    ...rootReducer,
    ...asyncReducers,
  });
}

const sagaMiddleware = createSagaMiddleware();

// runSaga is middleware.run functino
// rootSaga is your root saga for static sagas
function createSagaInjector(runSaga, commonSagas) {
  // Create a dictionary to keep track of injected sagas
  const injectedSagas = new Map();

  const isInjected = (key) => injectedSagas.has(key);

  const injectSaga = (key, sagas) => {
    // We won't run saga if it is already injected
    if (isInjected(key)) return;

    // eslint-disable-next-line no-unused-expressions
    !!sagas.length && sagas.forEach((saga) => {
      const task = runSaga(saga); // Sagas return task when they executed, which can be used to cancel them

      injectedSagas.set(key, task); // Save the task if we want to cancel it in the future
    });
  };
  // Inject the root saga as it is statically loaded file
  Object.keys(commonSagas).forEach((commonSagaKey) => {
    injectSaga(commonSagaKey, commonSagas[commonSagaKey]);
  });

  return injectSaga;
}

// Configure the store
export default function configureStore(initialState, history) {
  // Create the store with 3 middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. thunkMiddleware: Makes redux-thunk work
  // 3. routerMiddleware: Syncs the location/URL path to the state
  const middlewaresToApply = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const enhancers = [applyMiddleware(...middlewaresToApply)];

  // if Redux DevTools Extension is installed use it, otherwise use Redux componse

  // eslint-disable-next-line no-restricted-properties
  const componseEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    // eslint-disable-next-line no-restricted-properties
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      /* TODO Try to remove when 'react-router-redux' is out of beta,
        LOCATION_CHANGE should not be fired more than once after hot reloading
      */
      // Prevent recomputing reducers for `replaceReducers`
      shouldHotReload: false,
    })
    : compose;

  const store = createStore(
    createReducer({}),
    fromJS(initialState),
    componseEnhancers(...enhancers),
  );

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};

  // Create an inject reducer function
  // This function adds the async reducer, and created a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  // Add injectSaga method to our store
  store.injectSaga = createSagaInjector(sagaMiddleware.run, rootSaga);

  store.history = history; // history

  // Return the modified store
  return store;
}
