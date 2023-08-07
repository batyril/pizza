import { PizzaBlock } from '../PizzaBlock';
import { Skeleton } from '../Skeleton';
import { useContext, useEffect, useState } from 'react';
import { pizzaService } from '../../service/pizzaService.ts';
import { Pizza, SortType } from '../../const/interfaces.ts';
import { AppContext } from '../../context/AppContext.ts';

interface IPizzaList {
  activeSort: SortType;
  activeCategory: number;
}

export const PizzaList = ({ activeSort, activeCategory }: IPizzaList) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { searchValue } = useContext(AppContext);
  const [pizzas, setPizzas] = useState<Pizza[] | []>([]);
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
    setCurrentPage(1);
  }, [activeSort, activeCategory, searchValue]);
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, activeSort, activeCategory, searchValue]);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const renderPizza = pizzas.map((pizza: Pizza) => (
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
          onClick={() => setCurrentPage((prevState) => prevState + 1)}
        >
          Загрузить еще
        </button>
      )}
    </>
  );
};
