import { createSelector } from 'reselect';

export const signInState = (state) => state.get('signIn');

export const makeSelectSignInUserLoading = () => createSelector(
  signInState,
  (state) => state?.getIn(['signInUser', 'loading']) ?? false,
);

export const makeSelectSignInUserLoaded = () => createSelector(
  signInState,
  (state) => state?.getIn(['signInUser', 'loaded']) ?? false,
);

export const makeSelectSignInFormData = () => createSelector(
  signInState,
  (state) => state?.get('signInFormData') ?? {},
);

export const makeSelectSignInUserData = () => createSelector(
  signInState,
  (state) => state?.getIn(['signInUser', 'data']) ?? {},
);
