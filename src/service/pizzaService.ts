import axios from 'axios';
import { SortType } from '../const/interfaces.ts';

export const pizzaService = () => {
  const apiBase = 'http://localhost:3000/';
  const getPizzas = async (
    activeSort: SortType,
    activeCategory: number,
    searchValue: string,
  ) => {
    const defaultCategory = 6;
    const categoryFilter =
      activeCategory === defaultCategory ? '' : `category=${activeCategory}`;
    const res = await axios.get(
      `${apiBase}pizzas?_sort=${activeSort.sort}&_order=${activeSort.order}&${categoryFilter}&q=${searchValue}`,
    );
    return res.data;
  };
  return { getPizzas };
};
