import useScrollToTop from '../../hooks/useScrollToTop.ts';
import { Categories, PizzaList, Sort } from '../../components';
import { FC } from 'react';
import styles from './Home.module.scss';
const Home: FC = () => {
  useScrollToTop();
  return (
    <div className={styles.container}>
      <div className={styles.content__top}>
        <Categories />
        <Sort />
      </div>
      <PizzaList />
    </div>
  );
};

export default Home;
