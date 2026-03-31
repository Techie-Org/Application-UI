import { createSelector } from 'reselect';

export const homeState = (state) => state.get('home');

export const makeSelectArtistsDataLoading = () => createSelector(
  homeState,
  (state) => state?.getIn(['artistsData', 'loading']) ?? false,
);

export const makeSelectArtistsDataLoaded = () => createSelector(
  homeState,
  (state) => state?.getIn(['artistsData', 'loaded']) ?? false,
);

export const makeSelectArtistsResponseData = () => createSelector(
  homeState,
  (state) => state?.getIn(['artistsData', 'data']) ?? [],
);

export const makeSelectConfirmBookingLoading = () => createSelector(
  homeState,
  (state) => state?.getIn(['confirmBooking', 'loading']) ?? false,
);

export const makeSelectConfirmBookingLoaded = () => createSelector(
  homeState,
  (state) => state?.getIn(['confirmBooking', 'loaded']) ?? false,
);

export const makeSelectConfirmBookingFailed = () => createSelector(
  homeState,
  (state) => state?.getIn(['confirmBooking', 'error']) ?? false,
);

export const makeSelectConfirmBookingSuccess = () => createSelector(
  makeSelectConfirmBookingLoaded(),
  makeSelectConfirmBookingFailed(),
  (confirmBookingLoaded, confirmBookingFailed) => confirmBookingLoaded && !confirmBookingFailed,
);
