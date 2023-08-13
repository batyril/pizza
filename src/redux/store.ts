import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filter/slice.ts';
import cartReducer from './cart/slice.ts';
import pizzaReducer from './pizza/slice.ts';
import pizzaPageSlice from './pizzaPage/slice.ts';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    pizza: pizzaReducer,
    pizzaPage: pizzaPageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
