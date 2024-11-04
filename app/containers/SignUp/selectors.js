import { createSelector } from 'reselect';

export const signUpState = (state) => state.get('signUp');

export const makeSelectRegistrationStatus = () => createSelector(
  signUpState,
  (state) => state?.getIn(['signUpData', 'registrationStatus']),
);
export const makeSelectSignUpFormData = () => createSelector(
  signUpState,
  (state) => state?.getIn(['signUpData', 'formData']),
);