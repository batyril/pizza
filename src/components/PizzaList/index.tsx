import { PizzaBlock } from '../PizzaBlock';
import { Skeleton } from '../Skeleton';
import { useContext, useEffect, useState } from 'react';
import { pizzaService } from '../../service/pizzaService.ts';
import { IPizza } from '../../const/interfaces.ts';
import { AppContext } from '../../context/AppContext.ts';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setPage } from '../../store/filterSlice.ts';
export const PizzaList = () => {
  const { activeCategory, activeSort, currentPage } = useSelector(
    (state: RootState) => state.filter,
  );
  const { searchValue } = useContext(AppContext);
  const [pizzas, setPizzas] = useState<IPizza[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const { getPizzas } = pizzaService();

  const fetchData = async (page: number) => {
    setIsLoading(false);
    await getPizzas(activeSort, activeCategory, searchValue, page)
      .then((res) => {
        setPizzas((prevPizzas) => {
          if (page === 1) {
            return res.data;
          } else {
            return [...prevPizzas, ...res.data];
          }
        });
        setTotalCount(Number(res.headers['x-total-count']));
      })
      .finally(() => setIsLoading(true));
  };

  useEffect(() => {
    setPizzas([]);
    setPage(1);
  }, [activeSort, activeCategory, searchValue]);
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, activeSort, activeCategory, searchValue]);

  const skeletons = [...new Array(6)].map((_, index) => (
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
          onClick={() => setPage(currentPage + 1)}
        >
          Загрузить еще
        </button>
      )}
    </>
  );
};
