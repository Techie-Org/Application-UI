import { createSelector } from 'reselect';

export const userProfileState = (state) => state.get('user');

export const makeSelectUpdateUserProfileLoading = () => createSelector(
  userProfileState,
  (state) => state?.getIn(['updateUserProfile', 'loading']) ?? false,
);

export const makeSelectUpdateUserProfileLoaded = () => createSelector(
  userProfileState,
  (state) => state?.getIn(['updateUserProfile', 'loaded']) ?? false,
);

export const makeSelectUpdateUserProfileData = () => createSelector(
  userProfileState,
  (state) => state?.getIn(['updateUserProfile', 'data']) ?? [],
);
