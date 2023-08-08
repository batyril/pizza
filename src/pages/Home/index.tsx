import { Categories } from '../../components/Categories';
import { Sort } from '../../components/Sort';
import { PizzaList } from '../../components/PizzaList';
import useScrollToTop from '../../hooks/useScrollToTop.ts';

export const Home = () => {
  useScrollToTop();
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <PizzaList />
    </div>
  );
};
