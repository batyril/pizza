import cartEmptyIcon from '../../assets/img/empty-cart.png';
import { Link } from 'react-router-dom';
import { PATHS } from '../../const/paths.ts';

const CartEmpty = () => {
  return (
    <div className='cart cart--empty'>
      <h2>Корзина пустая 😕</h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={cartEmptyIcon} alt='Empty cart' />
      <Link to={PATHS.BASE} className='button button--black'>
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
