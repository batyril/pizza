import { Link, useLocation } from 'react-router-dom';
import { PATHS } from '../../const/paths.ts';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store.ts';
import { FC, useEffect, useRef } from 'react';
import { ButtonCart, ButtonCartMini, Search } from '../index.ts';
import styles from './header.module.scss';

const Header: FC = () => {
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const items = useSelector((state: RootState) => state.cart.items);
  const location = useLocation();
  const isMounted = useRef(false);
  const totalCount = items.reduce((sum, item) => {
    return sum + item.count;
  }, 0);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to={PATHS.HOME}>
          <div className={styles.header__logo}>
            <img width='38' src='/img/pizza-logo.svg' alt='Pizza logo' />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>

        {location.pathname === PATHS.BASE ? (
          <>
            <Search />
          </>
        ) : null}

        {location.pathname === PATHS.BASE ? (
          <>
            <div className={styles.header__cart}>
              <ButtonCart totalPrice={totalPrice} totalCount={totalCount} />
            </div>
            <div className={styles['header__cart--floating']}>
              <ButtonCartMini totalCount={totalCount} />
            </div>{' '}
          </>
        ) : null}
        {location.pathname.includes('pizza') ? (
          <>
            <div
              className={`${styles.header__cart} ${styles['header__cart--pizzaPage']}`}
            >
              <ButtonCart totalPrice={totalPrice} totalCount={totalCount} />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
