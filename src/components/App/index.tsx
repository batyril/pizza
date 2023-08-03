import '../../scss/app.scss';
import { Categories } from '../Categories';
import { Header } from '../Header';
import { Sort } from '../Sort';
import { PizzaBlock } from '../PizzaBlock';
import { useEffect, useState } from 'react';
import { pizzaService } from '../../service/pizzaService.ts';

function App() {
  const [pizzas, setPizzas] = useState([]);
  const { getPizzas } = pizzaService();
  useEffect(() => {
    getPizzas().then((res) => setPizzas(res));
  }, []);
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {pizzas.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
