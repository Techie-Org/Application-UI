import { fromJS } from 'immutable';
// import {} from './constants';

const initialState = fromJS({
  tokenResponse: {
    loading: false,
    loaded: false,
    error: false,
    data: '',
  },
});

function app(state = initialState, action) {
  switch (action.type) {
    case 'loading_value_from_contants':
      return state
        .setIn(['tokenResponse', 'loading'], true)
        .setIn(['tokenResponse', 'loaded'], false)
        .setIn(['tokenResponse', 'error'], false);
    case 'loaded_value_from_contants':
      return state
        .setIn(['tokenResponse', 'loading'], false)
        .setIn(['tokenResponse', 'loaded'], true)
        .setIn(['tokenResponse', 'error'], false)
        .setIn(['tokenResponse', 'data'], action?.token);
    case 'error_value_from_contants':
      return state
        .setIn(['tokenResponse', 'loading'], false)
        .setIn(['tokenResponse', 'loaded'], false)
        .setIn(['tokenResponse', 'error'], true);
    default:
      return state;
  }
}

export default app;
