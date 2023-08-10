import { createSlice } from '@reduxjs/toolkit';
import { InitStateFilter, SortType } from '../../const/interfaces.ts';

const defaultCategory = 6;
const defaultPage = 1;
const defaultSort: SortType = {
  name: 'популярности ↓',
  sort: 'rating',
  order: 'desc',
};

const initialState: InitStateFilter = {
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
      state.currentPage = 1;
    },
    setSort: (state, action) => {
      state.activeSort = action.payload;
      state.currentPage = 1;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
      state.currentPage = 1;
    },
    setFilers: (state, action) => {
      state.currentPage = Number(action.payload.currentPage);
      state.activeCategory = Number(action.payload.categoryId);
      state.activeSort = action.payload.sort;
    },
  },
});

export const { setCategory, setSearchValue, setSort, setPage, setFilers } =
  filterSlice.actions;

export default filterSlice.reducer;
