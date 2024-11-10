import { fromJS } from 'immutable';
import { SIGN_IN_USER, SIGN_IN_USER_SUCCESS } from './constants';

// const REDUCER_KEY = 'signIn';

const initialState = fromJS({
  signInFormData: {
    email: '',
    password: '',
  },
  signInUser: {
    loading: false,
    loaded: false,
    error: false,
    data: {},
  },
});

function signIn(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_USER:
      return state
        .setIn(['signInUser', 'loading'], true)
        .setIn(['signInUser', 'loaded'], false)
        .setIn(['signInUser', 'error'], false)
        .set('signInFormData', action.formData);
    case SIGN_IN_USER_SUCCESS:
      return state
        .setIn(['signInUser', 'loading'], false)
        .setIn(['signInUser', 'loaded'], true)
        .setIn(['signInUser', 'error'], false)
        .setIn(['signInUser', 'data'], action.data);
    default:
      return state;
  }
}

export default signIn;
