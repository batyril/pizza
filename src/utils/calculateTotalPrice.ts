import { ICart } from '../const/interfaces.ts';

export const calculateTotalPrice = (items: ICart[]): number => {
  return items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};
