import { RootState } from '../store.ts';
import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = (state: RootState) => state.filter;

export const selectActiveCategory = createSelector(
  [selectFilter],
  (filter) => filter.activeCategory,
);

export const selectActiveSort = createSelector(
  [selectFilter],
  (filter) => filter.activeSort,
);
