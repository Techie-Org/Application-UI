import { createSelector } from 'reselect';

export const signUpState = (state) => state.get('signUp');

export const makeSelectRegisterUserLoading = () => createSelector(
  signUpState,
  (state) => state?.getIn(['registerUser', 'loading']) ?? false,
);

export const makeSelectSignUpFormData = () => createSelector(
  signUpState,
  (state) => state?.get('formData') ?? {},
);
