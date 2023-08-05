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
  const { searchValue } = useContext(AppContext);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { getPizzas } = pizzaService();
  useEffect(() => {
    setIsLoading(false);
    getPizzas(activeSort, activeCategory).then((res) => {
      setPizzas(res);
      setIsLoading(true);
    });
  }, [activeSort, activeCategory]);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const renderPizza = pizzas
    .filter((pizza: Pizza) =>
      pizza.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
    )
    .map((pizza: Pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  return (
    <>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading ? renderPizza : skeletons}
      </div>
    </>
  );
};
