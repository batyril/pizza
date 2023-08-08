import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from './filterSlice.ts';

export const store = configureStore({
  reducer: { filter: pizzaReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
