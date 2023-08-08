import { createSlice } from '@reduxjs/toolkit';

import { SortType } from '../const/interfaces.ts';

export interface CounterState {
  activeSort: SortType;
  activeCategory: number;
  currentPage: number;
  searchValue: string;
}

const defaultCategory = 6;
const defaultPage = 6;
const defaultSort: SortType = {
  name: 'популярности ↓',
  sort: 'rating',
  order: 'desc',
};

const initialState: CounterState = {
  activeSort: defaultSort,
  activeCategory: defaultCategory,
  currentPage: defaultPage,
  searchValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setSort: (state, action) => {
      state.activeSort = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategory, setSearchValue, setSort, setPage } =
  filterSlice.actions;

export default filterSlice.reducer;
