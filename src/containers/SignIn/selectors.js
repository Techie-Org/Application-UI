import { createSelector } from 'reselect';

export const homeState = (state) => state.get('home');

export const makeSelectHomeResponse = () => createSelector(
  homeState,
  (state) => state?.getIn(["homeResponse", "data"]),
);
