import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IPizza } from '../../const/interfaces.ts';
import { pizzaService } from '../../service/pizzaService.ts';

const FullPizza = () => {
  const { getPizzaById } = pizzaService();
  const pizzaId = useParams();
  const [pizza, setPizza] = useState<IPizza[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchPizza = async () => {
    setIsLoading(false);
    try {
      const res = await getPizzaById(Number(pizzaId));
      setPizza(res.data);
    } catch (error) {
      // Обработка ошибок, если необходимо
    } finally {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    fetchPizza();
  }, []);

  return <div>пицца полная</div>;
};

export default FullPizza;
