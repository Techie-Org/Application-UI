import { fromJS } from 'immutable';
import {REGISTRATION_SUCCESSFUL,SIGNUP_FORM_DATA } from './constants';

const initialState = fromJS({
  signUpData: {
    registrationStatus:false,
    formData:{}
  },
});

function signUp(state = initialState, action) {
  switch (action.type) {
      case REGISTRATION_SUCCESSFUL:
        return state
         .setIn(['signUpData','registrationStatus'],true);
         case SIGNUP_FORM_DATA:
         return state
          .setIn(['signUpData','formData'],action.payload);

    default:
      return state;
  }
}

export default signUp;
