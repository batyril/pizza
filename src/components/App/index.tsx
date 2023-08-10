import '../../scss/app.scss';
import { Home } from '../../pages/Home';
import { Error } from '../../pages/Error';
import { Route, Routes } from 'react-router-dom';
import Cart from '../../pages/Cart';
import { PATHS } from '../../const/paths.ts';
import FullPizza from '../../pages/FullPizza';
import MainLayout from '../../layouts/MainLayout.tsx';

function App() {
  return (
    <Routes>
      <Route path={PATHS.BASE} element={<MainLayout />}>
        <Route path={PATHS.HOME} element={<Home />}></Route>
        <Route path={PATHS.CART} element={<Cart />}></Route>
        <Route path={PATHS.ERROR} element={<Error />}></Route>
        <Route path={PATHS.PIZZA} element={<FullPizza />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
