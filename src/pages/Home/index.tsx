import { Categories } from '../../components/Categories';
import { Sort } from '../../components/Sort';
import { PizzaList } from '../../components/PizzaList';
import { useEffect, useState } from 'react';
import { SortType } from '../../const/interfaces.ts';

export const Home = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  const defaultCategory = 6;
  const defaultSort: SortType = {
    name: 'популярности ↓',
    sort: 'rating',
    order: 'desc',
  };
  const [activeSort, setActiveSort] = useState(defaultSort);
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Sort activeSort={activeSort} setActiveSort={setActiveSort} />
      </div>
      <PizzaList activeCategory={activeCategory} activeSort={activeSort} />
    </div>
  );
};
