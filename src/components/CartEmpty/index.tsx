import cartEmptyIcon from '../../assets/img/empty-cart.png';
import { FC } from 'react';
import { BackButton } from '../index.ts';
import styles from './cartEmpty.module.scss';
const CartEmpty: FC = () => {
  return (
    <div className={styles['cart cart--empty']}>
      <h2>Корзина пустая 😕</h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={cartEmptyIcon} alt='Empty cart' />
      <BackButton />
    </div>
  );
};

export default CartEmpty;
