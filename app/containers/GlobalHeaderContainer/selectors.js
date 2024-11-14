import { createSelector } from 'reselect';

export const globalHeaderState = (state) => state.get('globalHeader');

export const makeSelectUserProfileLoading = () => createSelector(
  globalHeaderState,
  (state) => state?.getIn(['userProfile', 'loading']) ?? false,
);

export const makeSelectUserProfileLoaded = () => createSelector(
  globalHeaderState,
  (state) => state?.getIn(['userProfile', 'loaded']) ?? false,
);

export const makeSelectUserProfileData = () => createSelector(
  globalHeaderState,
  (state) => state?.getIn(['userProfile', 'data']) ?? {},
);

export const makeSelectIsUserLoggedIn = () => createSelector(
  globalHeaderState,
  (state) => state?.get('userLoggedIn') ?? false,
);
