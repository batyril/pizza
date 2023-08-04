import axios from 'axios';

export const pizzaService = () => {
  const apiBase = 'http://localhost:3000/';
  const getPizzas = async (activeSort: string, activeCategory: number) => {
    let translateSort = '';
    switch (activeSort) {
      case 'популярности':
        translateSort = 'rating';
        break;
      case 'цене':
        translateSort = 'price';
        break;
      case 'алфавиту':
        translateSort = 'title';
        break;
    }
    const res = await axios.get(
      `${apiBase}pizzas?_sort=${translateSort}&_order=${
        translateSort === 'title' ? 'asc' : 'desc'
      }&${activeCategory === 6 ? '' : `category=${activeCategory}`}`,
    );
    return res.data;
  };
  return { getPizzas };
};
