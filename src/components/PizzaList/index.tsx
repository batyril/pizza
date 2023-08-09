import { PizzaBlock } from '../PizzaBlock';
import { Skeleton } from '../Skeleton';
import { useEffect, useRef, useState } from 'react';
import { pizzaService } from '../../service/pizzaService.ts';
import { IPizza } from '../../const/interfaces.ts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setFilers, setPage } from '../../slices/filterSlice.ts';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { sorts } from '../Sort';
export const PizzaList = () => {
  const isMounted = useRef(false);
  const isSearch = useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeCategory, activeSort, currentPage, searchValue } = useSelector(
    (state: RootState) => state.filter,
  );
  const [pizzas, setPizzas] = useState<IPizza[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const { getPizzas } = pizzaService();

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
    setIsLoading(false);

    try {
      const res = await getPizzas(
        activeSort,
        activeCategory,
        searchValue,
        page,
      );

      setPizzas((prevPizzas) => {
        if (page === 1) {
          return res.data;
        } else {
          return [...prevPizzas, ...res.data];
        }
      });

      setTotalCount(Number(res.headers['x-total-count']));
    } catch (error) {
      // Обработка ошибок, если необходимо
    } finally {
      setIsLoading(true);
    }
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
  const renderPizza = pizzas.map((pizza: IPizza) => (
    <PizzaBlock key={pizza.id} {...pizza} />
  ));

  return (
    <>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading ? renderPizza : skeletons}
      </div>
      {pizzas.length === totalCount ? null : (
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
