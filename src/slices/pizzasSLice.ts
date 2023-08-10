import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IFetchPizza, InitStatePizza } from '../const/interfaces.ts';
import { pizzaService } from '../service/pizzaService.ts';
import { RootState } from '../store';

const initialState: InitStatePizza = {
  items: [],
  loadingStatus: 'loading',
  totalCount: 0,
};

export const pizzaSelector = (state: RootState) => state.pizza;

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizza',
  async (
    { activeSort, activeCategory, searchValue, page }: IFetchPizza,
    thunkAPI,
  ) => {
    const { getPizzas } = pizzaService();
    const { data, headers } = await getPizzas(
      activeSort,
      activeCategory,
      searchValue,
      page,
    );

    const { dispatch } = thunkAPI;
    const totalCount = Number(headers['x-total-count']);
    dispatch(setTotalCount(totalCount));

    return { data, page };
  },
);

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
