import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from '../slices/filterSlice.ts';
import cartSliceReducer from '../slices/cartSlice.ts';

export const store = configureStore({
  reducer: { filter: pizzaReducer, cart: cartSliceReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
