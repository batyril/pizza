import { Categories } from '../../components/Categories';
import { Sort } from '../../components/Sort';
import { PizzaList } from '../../components/PizzaList';
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => window.scrollTo(0, 0), []);
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
