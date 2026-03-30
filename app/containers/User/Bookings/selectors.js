import { createSelector } from 'reselect';

export const userBookingsState = (state) => state.get('user');

export const makeSelectUserBookingsLoading = () => createSelector(
  userBookingsState,
  (state) => state?.getIn(['userBookings', 'loading']) ?? false,
);

export const makeSelectUserBookingsLoaded = () => createSelector(
  userBookingsState,
  (state) => state?.getIn(['userBookings', 'loaded']) ?? false,
);

export const makeSelectUserBookingsData = () => createSelector(
  userBookingsState,
  (state) => state?.getIn(['userBookings', 'data']) ?? [],
);
