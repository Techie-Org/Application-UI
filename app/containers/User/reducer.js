import { fromJS } from 'immutable';

export const initialState = fromJS({
  userBookings: [],
});

export default function UserProfileReducer(state = initialState, action = {}) {
  switch (action.type) {
    // case OPEN_MODAL:
    //   return state.set('userBookings', true);
    // case CLOSE_MODAL:
    //   return state.set('userBookings', false);
    default:
      return state;
  }
}
