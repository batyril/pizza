import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = (state: RootState) => state.filter;
export const pizzaSelector = (state: RootState) => state.pizza;
export const cartSelector = (state: RootState) => state.cart;

export const cartSelectorById = (id: number) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);
export const selectActiveCategory = createSelector(
  [selectFilter],
  (filter) => filter.activeCategory,
);

export const selectPizzasItems = createSelector(
  [pizzaSelector],
  (pizza) => pizza.items,
);

export const selectActiveSort = createSelector(
  [selectFilter],
  (filter) => filter.activeSort,
);
