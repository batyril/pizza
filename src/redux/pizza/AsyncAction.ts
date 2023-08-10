import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFetchPizza } from '../../const/interfaces.ts';
import { pizzaService } from '../../service/pizzaService.ts';
import { setTotalCount } from './slice.ts';

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
