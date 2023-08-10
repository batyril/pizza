import { PizzaBlock } from '../PizzaBlock';
import { Skeleton } from '../Skeleton';
import { useEffect, useRef } from 'react';
import { IPizza } from '../../const/interfaces.ts';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';
import {
  filterSelector,
  setFilers,
  setPage,
} from '../../slices/filterSlice.ts';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { sorts } from '../Sort';
import {
  setPizzas,
  fetchPizzas,
  pizzaSelector,
} from '../../slices/pizzasSLice.ts';
import ErrorRequest from '../ErrorRequest';

export const PizzaList = () => {
  const isMounted = useRef(false);
  const isSearch = useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { activeCategory, activeSort, currentPage, searchValue } =
    useSelector(filterSelector);
  const { items, loadingStatus, totalCount } = useSelector(pizzaSelector);

  useEffect(() => {
    const urlParams = window.location.search;
    if (urlParams) {
      const indexQuestion = 1;
      const params = qs.parse(urlParams.substring(indexQuestion));
      const sort = sorts.find(
        (item) =>
          item.sort === params.sortProperty && item.order === params.order,
      );
      dispatch(setFilers({ ...params, sort }));
      isSearch.current = true;
    }
  }, []);

  const fetchData = async (page: number) => {
    dispatch(fetchPizzas({ activeSort, activeCategory, searchValue, page }));
  };

  useEffect(() => {
    setPizzas([]);
  }, [activeSort.name, activeCategory, searchValue]);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, activeSort.name, activeCategory, searchValue]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: activeSort.sort,
        categoryId: activeCategory,
        currentPage: currentPage,
        order: activeSort.order,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
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
