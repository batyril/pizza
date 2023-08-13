import { createSlice } from '@reduxjs/toolkit';
import { InitStatePizzaPage } from '../../const/interfaces.ts';
import { fetchPizzaId } from './AsyncAction.ts';

const initialState: InitStatePizzaPage = {
  items: null,
  loadingStatus: 'loading',
};

export const pizzaPageSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzas: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzaId.pending, (state) => {
        state.loadingStatus = 'loading';
      })
      .addCase(fetchPizzaId.fulfilled, (state, action) => {
        state.loadingStatus = 'idle';
        state.items = action.payload;
      })
      .addCase(fetchPizzaId.rejected, (state) => {
        state.loadingStatus = 'error';
        state.items = null;
      })
      .addDefaultCase(() => {});
  },
});

export const { setPizzas } = pizzaPageSlice.actions;

export default pizzaPageSlice.reducer;
