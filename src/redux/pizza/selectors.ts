import { RootState } from '../store.ts';
import { createSelector } from '@reduxjs/toolkit';

export const pizzaSelector = (state: RootState) => state.pizza;

export const selectPizzasItems = createSelector(
  [pizzaSelector],
  (pizza) => pizza.items,
);
