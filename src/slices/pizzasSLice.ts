import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CounterState, SortType } from '../const/interfaces.ts';
import { pizzaService } from '../service/pizzaService.ts';

const initialState: CounterState = {
  items: [],
  loadingStatus: 'loading',
  totalCount: 0,
};

interface IFetchData {
  activeSort: SortType;
  activeCategory: number;
  searchValue: string;
  page: number;
}

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizza',
  async ({ activeSort, activeCategory, searchValue, page }: IFetchData) => {
    const { getPizzas } = pizzaService();
    const { data, headers } = await getPizzas(
      activeSort,
      activeCategory,
      searchValue,
      page,
    );
    const totalCount = Number(headers['x-total-count']);
    return { data, totalCount, page };
  },
);

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzas: (state, action) => {
      state.items = action.payload;
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
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.loadingStatus = 'error';
        state.items = [];
      })
      .addDefaultCase(() => {});
  },
});

export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
