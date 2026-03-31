import { fromJS } from 'immutable';
import {
  FETCH_ARTISTS,
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_FAILED,
} from './constants';

const initialState = fromJS({
  artistsData: {
    data: null,
    loading: false,
    loaded: false,
    error: false,
  },
});

function home(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTISTS:
      return state
        .setIn(['artistsData', 'loading'], true)
        .setIn(['artistsData', 'loaded'], false);
    case FETCH_ARTISTS_SUCCESS:
      return state
        .setIn(['artistsData', 'loading'], false)
        .setIn(['artistsData', 'loaded'], true)
        .setIn(['artistsData', 'data'], action.data);
    case FETCH_ARTISTS_FAILED:
      return state
        .setIn(['artistsData', 'loading'], false)
        .setIn(['artistsData', 'loaded'], true)
        .setIn(['artistsData', 'error'], true)
        .setIn(['artistsData', 'data'], action.data);
    default:
      return state;
  }
}

export default home;
