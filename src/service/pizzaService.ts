import axios from 'axios';

export const pizzaService = () => {
  const apiBase = 'http://localhost:3000/';
  const getPizzas = async () => {
    const res = await axios.get(`${apiBase}pizzas`);
    return res.data;
  };
  return { getPizzas };
};
