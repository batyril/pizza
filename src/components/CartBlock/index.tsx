import { ICart } from '../../const/interfaces.ts';
import { useDispatch } from 'react-redux';
import {
  minusCount,
  plusCount,
  removePizzaCart,
} from '../../redux/cart/slice.ts';
import { FC } from 'react';
import styles from './cartBlock.module.scss';
import { MinusButton, PlusButton } from '../index.ts';
import RemoveButton from '../buttons/RemoveButton.tsx';

const CartBlock: FC<ICart> = ({ id, count, title, price, imageUrl }) => {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(plusCount(id));
  };

  const onClickMinus = () => {
    dispatch(minusCount(id));
  };

  const onRemoveCart = () => {
    const messageText = 'Вы действительно хотите удалить пиццу ?';
    if (window.confirm(messageText)) dispatch(removePizzaCart(id));
  };

  return (
    <div className={styles.cart__item}>
      <div className={styles['cart__item-img']}>
        <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
      </div>
      <div className={styles['cart__item-info']}>
        <h3>{title}</h3>
        {/*       <p>
          {typesName} тесто, {size} см.
        </p>*/}
      </div>

      <div className={styles['cart__item-count']}>
        <MinusButton count={count} onClickMinus={onClickMinus} />
        <b>{count}</b>
        <PlusButton onClickPlus={onClickPlus} />
      </div>
      <div className={styles['cart__item-price']}>
        <b>{price * count} ₽</b>
      </div>
      <div onClick={onRemoveCart} className={styles['cart__item-remove']}>
        <RemoveButton />
      </div>
    </div>
  );
};

export default CartBlock;
