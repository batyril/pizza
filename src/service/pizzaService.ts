import axios from 'axios';
import { SortType } from '../const/interfaces.ts';

export const pizzaService = () => {
  const apiBase = 'http://localhost:3000/';
  const getPizzas = async (
    activeSort: SortType,
    activeCategory: number,
    searchValue: string,
    currentPage: number,
  ) => {
    const defaultCategory = 6;
    const categoryFilter =
      activeCategory === defaultCategory ? `` : `category=${activeCategory}`;
    const pizzasOnPage = 4;
    return await axios.get(`${apiBase}pizzas?${categoryFilter}`, {
      params: {
        _sort: activeSort.sort,
        _order: activeSort.order,
        q: searchValue,
        _page: currentPage,
        _limit: pizzasOnPage,
      },
    });
  };
  return { getPizzas };
};
