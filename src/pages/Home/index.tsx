import { Categories } from '../../components/Categories';
import { Sort } from '../../components/Sort';
import { PizzaList } from '../../components/PizzaList';
import { useEffect, useState } from 'react';

export const Home = () => {
  const sorts = ['популярности', 'цене', 'алфавиту'];
  useEffect(() => window.scrollTo(0, 0), []);
  const [activeSort, setActiveSort] = useState(sorts[0]);

  const categories = [
    { name: 'Все', id: 6 },
    { name: 'Мясные', id: 0 },
    { name: 'Гриль', id: 1 },
    { name: 'Вегетарианская', id: 2 },
    { name: 'Острые', id: 3 },
    { name: 'C Мазиком', id: 4 },
    { name: 'Закрытые', id: 5 },
  ];
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categories={categories}
        />
        <Sort
          sorts={sorts}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
        />
      </div>
      <PizzaList activeCategory={activeCategory} activeSort={activeSort} />
    </div>
  );
};
