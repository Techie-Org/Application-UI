import { fromJS } from 'immutable';
import { OPEN_MODAL, CLOSE_MODAL } from './constants';

export const initialState = fromJS({
  signInModalIsOpen: false,
});

export default function loginButtonReducer(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN_MODAL:
      return state.set('signInModalIsOpen', true);
    case CLOSE_MODAL:
      return state.set('signInModalIsOpen', false);
    default:
      return state;
  }
}
