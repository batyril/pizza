import { RootState } from '../store.ts';

export const cartSelector = (state: RootState) => state.cart;

export const cartSelectorById = (id: number) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);
