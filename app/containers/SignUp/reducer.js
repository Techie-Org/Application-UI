import { fromJS } from 'immutable';
import { LOAD_HOME, LOAD_HOME_SUCCESS } from './constants';

const initialState = fromJS({
  homeResponse: {
    data: null,
    loading: null,
    loaded: null,
  },
});

function home(state = initialState, action) {
  switch (action.type) {
    case LOAD_HOME:
      return state
        .setIn(['homeResponse', 'loading'], true)
        .setIn(['homeResponse', 'loaded'], false);
    case LOAD_HOME_SUCCESS:
      return state
        .setIn(['homeResponse', 'loading'], false)
        .setIn(['homeResponse', 'loaded'], true)
        .setIn(['homeResponse', 'data'], action.data);
    default:
      return state;
  }
}

export default home;
