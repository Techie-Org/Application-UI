import { createSelector } from 'reselect';

export const homeState = (state) => state.get('home');

export const makeSelectUserProfileLoading = () => createSelector(
  homeState,
  (state) => state?.getIn(['artistsData', 'loading']) ?? false,
);

export const makeSelectUserProfileLoaded = () => createSelector(
  homeState,
  (state) => state?.getIn(['artistsData', 'loaded']) ?? false,
);

export const makeSelectArtistsResponseData = () => createSelector(
  homeState,
  (state) => state?.getIn(['artistsData', 'data']) ?? [],
);
