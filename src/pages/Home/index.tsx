import { Categories } from '../../components/Categories';
import { Sort } from '../../components/Sort';
import { PizzaList } from '../../components/PizzaList';

export const Home = () => {
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
