import { ICart } from '../const/interfaces.ts';

const calculateTotalPrice = (items: ICart[]): number => {
  return items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};

export default calculateTotalPrice;
