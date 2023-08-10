import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IPizza } from '../../const/interfaces.ts';
import { pizzaService } from '../../service/pizzaService.ts';
import { PATHS } from '../../const/paths.ts';

const FullPizza = () => {
  const { getPizzaById } = pizzaService();
  const pizzaId = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = useState<IPizza>();
  const [isLoading, setIsLoading] = useState(true);
  const fetchPizza = async () => {
    setIsLoading(false);
    try {
      console.log();
      const res = await getPizzaById(Number(pizzaId.id));
      setPizza(res.data);
    } catch (error) {
      alert('Пицца не найдена');
      navigate(PATHS.BASE);
    } finally {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    fetchPizza();
  }, []);

  if (!pizza) {
    return <div>Загрузка...</div>;
  }

  return <div>пицца полная {pizza.title}</div>;
};

export default FullPizza;
