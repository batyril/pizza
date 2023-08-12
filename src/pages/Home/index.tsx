import { Sort } from '../../components/Sort';
import useScrollToTop from '../../hooks/useScrollToTop.ts';
import { Categories, PizzaList } from '../../components';

const Home = () => {
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

export default Home;
