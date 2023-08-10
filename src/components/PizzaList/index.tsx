import { PizzaBlock } from '../PizzaBlock';
import { Skeleton } from '../Skeleton';
import { useEffect } from 'react';
import { IPizza } from '../../const/interfaces.ts';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store.ts';
import ErrorRequest from '../ErrorRequest';
import {
  selectActiveCategory,
  selectActiveSort,
  selectFilter,
} from '../../redux/filter/selectors.ts';
import {
  pizzaSelector,
  selectPizzasItems,
} from '../../redux/pizza/selectors.ts';
import { fetchPizzas } from '../../redux/pizza/AsyncAction.ts';
import { setPizzas } from '../../redux/pizza/slice.ts';
import { setPage } from '../../redux/filter/slice.ts';

export const PizzaList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { currentPage, searchValue } = useSelector(selectFilter);
  const activeCategory = useSelector(selectActiveCategory);
  const activeSort = useSelector(selectActiveSort);
  const { loadingStatus, totalCount } = useSelector(pizzaSelector);
  const items = useSelector(selectPizzasItems);

  const fetchData = async (page: number) => {
    dispatch(fetchPizzas({ activeSort, activeCategory, searchValue, page }));
  };

  useEffect(() => {
    setPizzas([]);
  }, [activeSort.name, activeCategory, searchValue]);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, activeSort.name, activeCategory, searchValue]);

  const skeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const renderPizza = items.map((pizza: IPizza) => (
    <PizzaBlock key={pizza.id} {...pizza} />
  ));
  return (
    <>
      <h2 className='content__title'>Все пиццы</h2>
      {loadingStatus === 'error' ? (
        <ErrorRequest />
      ) : (
        <div className='content__items'>
          {loadingStatus === 'loading' ? skeletons : renderPizza}
        </div>
      )}

      {items.length === totalCount ? null : (
        <button
          className='content__button'
          onClick={() => dispatch(setPage(currentPage + 1))}
        >
          Загрузить еще
        </button>
      )}
    </>
  );
};
