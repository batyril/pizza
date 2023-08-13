import { createSlice } from '@reduxjs/toolkit';
import { calculateTotalPrice } from '../../utils/calculateTotalPrice.ts';
import { InitStateCart } from '../../const/interfaces.ts';
import { getCartFromLs } from '../../utils/getCartFromLs.ts';

const { items, totalPrice } = getCartFromLs();

const initialState: InitStateCart = {
  totalPrice: totalPrice,
  items: items,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizzaCart: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = calculateTotalPrice(state.items);
    },
    removePizzaCart: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.totalPrice = calculateTotalPrice(state.items);
    },
    clearPizzaCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    plusCount: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count++;
      }
      state.totalPrice = state.totalPrice = calculateTotalPrice(state.items);
    },
    minusCount: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count === 0 ? (findItem.count = 0) : findItem.count--;
      }
      state.totalPrice = state.totalPrice = calculateTotalPrice(state.items);
    },
  },
});

export const {
  addPizzaCart,
  removePizzaCart,
  clearPizzaCart,
  plusCount,
  minusCount,
} = cartSlice.actions;

export default cartSlice.reducer;
