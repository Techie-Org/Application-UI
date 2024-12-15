/**
 * Test store addons
 */

import { browserHistory } from 'react-router-dom';
import configureStore from '../store';

describe('configureStore', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  describe('asyncReducers', () => {
    it('should contain an object for reducers', () => {
      expect(typeof store.asyncReducers).toBe('object');
    });
  });

  describe('runSaga', () => {
    it('should return a hook used `sagaMiddleware.run` and passed to `createSagaInjector` method', () => {
      expect(typeof store.injectSaga).toBe('function');
    });
  });
});
