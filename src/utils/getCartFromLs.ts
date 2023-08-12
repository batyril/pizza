import { calculateTotalPrice } from './calculateTotalPrice.ts';

export const getCartFromLs = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calculateTotalPrice(items);
  return {
    items,
    totalPrice,
  };
};
