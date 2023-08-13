import { RootState } from '../store.ts';
import { createSelector } from '@reduxjs/toolkit';

export const pizzaSelector = (state: RootState) => state.pizza;

export const pizzaSelectorById = (id: number) => (state: RootState) =>
  state.pizza.items.find((obj) => obj.id === id);

export const selectPizzasItems = createSelector(
  [pizzaSelector],
  (pizza) => pizza.items,
);
