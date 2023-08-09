import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../slices/filterSlice.ts';
import cartReducer from '../slices/cartSlice.ts';
import pizzaReducer from '../slices/pizzasSLice.ts';

export const store = configureStore({
  reducer: { filter: filterReducer, cart: cartReducer, pizza: pizzaReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
