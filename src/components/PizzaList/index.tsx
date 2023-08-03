import { PizzaBlock } from '../PizzaBlock';
import { Skeleton } from '../Skeleton';
import { useEffect, useState } from 'react';
import { pizzaService } from '../../service/pizzaService.ts';
import { Pizza } from '../../const/interfaces.ts';

export const PizzaList = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { getPizzas } = pizzaService();
  useEffect(() => {
    getPizzas().then((res) => {
      setPizzas(res);
      setIsLoading(true);
    });
  }, []);
  return (
    <>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading
          ? pizzas.map((pizza: Pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))
          : [...new Array(6)].map((_, index) => <Skeleton key={index} />)}
      </div>
    </>
  );
};
