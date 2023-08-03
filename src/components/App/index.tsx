import '../../scss/app.scss';
import { Categories } from '../Categories';
import { Header } from '../Header';
import { Sort } from '../Sort';
import { PizzaList } from '../PizzaList';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <PizzaList />
        </div>
      </div>
    </div>
  );
}

export default App;
