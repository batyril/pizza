import { createSlice } from '@reduxjs/toolkit';
import { InitStatePizza } from '../../const/interfaces.ts';
import { fetchPizzas } from './AsyncAction.ts';

const initialState: InitStatePizza = {
  items: [],
  loadingStatus: 'loading',
  totalCount: 0,
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzas: (state, action) => {
      state.items = action.payload;
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.loadingStatus = 'loading';
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.loadingStatus = 'idle';
        if (action.payload.page === 1) {
          state.items = action.payload.data;
        } else {
          state.items = [...state.items, ...action.payload.data];
        }
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.loadingStatus = 'error';
        state.items = [];
      })
      .addDefaultCase(() => {});
  },
});

export const { setPizzas, setTotalCount } = pizzaSlice.actions;

export default pizzaSlice.reducer;
