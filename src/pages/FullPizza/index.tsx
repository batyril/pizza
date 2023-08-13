import { useParams } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { ICart } from '../../const/interfaces.ts';
import stylesSelector from '../../components/PizzaBlock/pizza-block.module.scss';
import AddCartButton from '../../components/buttons/AddCartButton.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { cartSelectorById } from '../../redux/cart/selectors.ts';
import { AppDispatch, RootState } from '../../redux/store.ts';
import { addPizzaCart } from '../../redux/cart/slice.ts';
import styles from './FullPizza.module.scss';
import { fetchPizzaId } from '../../redux/pizzaPage/AsyncAction.ts';
import { ErrorRequest } from '../../components';

const typesName = ['тонкое', 'традиционное'];

const FullPizza: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  const fetchData = async () => {
    dispatch(fetchPizzaId(Number(id)));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { items, loadingStatus } = useSelector(
    (state: RootState) => state.pizzaPage,
  );
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const addPizzaCount = useSelector(cartSelectorById(Number(id)));
  const checkAddPizza = addPizzaCount ? <i>{addPizzaCount.count}</i> : null;

  const onClickAdd = () => {
    if (items) {
      const pizza: ICart = {
        id: items.id,
        title: items.title,
        price: items.price,
        imageUrl: items.imageUrl,
        size: activeSize,
        typesName: typesName[activeType],
        count: 0,
        description: items.description,
      };
      dispatch(addPizzaCart(pizza));
    }
  };

  if (loadingStatus === 'error') {
    return <ErrorRequest />;
  }

  return (
    <>
      {loadingStatus === 'loading' ? (
        <div>Загрузка...</div>
      ) : (
        items && (
          <div className={styles.fullPizza}>
            <img
              className={styles.fullPizza__image}
              src={items.imageUrl}
              alt='Pizza'
            />
            <div className={styles.fullPizza__wrapper}>
              <h4 className={styles.fullPizza__title}>{items.title}</h4>
              <p className={styles.fullPizza__description}>
                {items.description}
              </p>
              <div className={stylesSelector.pizzaBlock__selector}>
                <ul>
                  {items.types.map((type: number) => (
                    <li
                      key={type}
                      onClick={() => {
                        setActiveType(type);
                      }}
                      className={
                        activeType === type ? stylesSelector.active : ''
                      }
                    >
                      {typesName[type]}
                    </li>
                  ))}
                </ul>
                <ul>
                  {items.sizes.map((size: number, index: number) => (
                    <li
                      key={index}
                      onClick={() => {
                        setActiveSize(size);
                      }}
                      className={
                        activeSize === size ? stylesSelector.active : ''
                      }
                    >
                      {size} см.
                    </li>
                  ))}
                </ul>
              </div>
              <AddCartButton
                onClickAdd={onClickAdd}
                checkAddPizza={checkAddPizza}
              />
            </div>
          </div>
        )
      )}
    </>
  );
};

export default FullPizza;
