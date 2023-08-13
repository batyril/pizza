import { FC, useState } from 'react';
import { ICart, IPizza } from '../../const/interfaces.ts';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartSelectorById } from '../../redux/cart/selectors.ts';
import { addPizzaCart } from '../../redux/cart/slice.ts';
import styles from './pizza-block.module.scss';
import AddCartButton from '../buttons/AddCartButton.tsx';

const typesName = ['тонкое', 'традиционное'];

const PizzaBlock: FC<IPizza> = ({
  title,
  imageUrl,
  types,
  sizes,
  price,
  id,
  description,
}) => {
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [activeType, setActiveType] = useState(0);
  const dispatch = useDispatch();
  const addPizzaCount = useSelector(cartSelectorById(id));
  const checkAddPizza = addPizzaCount ? <i>{addPizzaCount.count}</i> : null;
  const onClickAdd = () => {
    const items: ICart = {
      id,
      title,
      price,
      imageUrl,
      size: activeSize,
      typesName: typesName[activeType],
      count: 0,
      description,
    };
    dispatch(addPizzaCart(items));
  };

  return (
    <div className={styles.pizzaBlock}>
      <Link to={`/pizza/${id}`}>
        <img className={styles.pizzaBlock__image} src={imageUrl} alt='Pizza' />{' '}
      </Link>
      <h4 className={styles.pizzaBlock__title}>{title}</h4>
      <div className={styles.pizzaBlock__selector}>
        <ul>
          {types.map((type: number) => (
            <li
              key={type}
              onClick={() => {
                setActiveType(type);
              }}
              className={activeType === type ? styles.active : ''}
            >
              {typesName[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size: number, index: number) => (
            <li
              key={index}
              onClick={() => {
                setActiveSize(size);
              }}
              className={activeSize === size ? styles.active : ''}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.pizzaBlock__bottom}>
        <div className={styles.pizzaBlock__price}>от {price}₽</div>
        <AddCartButton onClickAdd={onClickAdd} checkAddPizza={checkAddPizza} />
      </div>
    </div>
  );
};

export default PizzaBlock;
