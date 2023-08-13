import '../../scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import { PATHS } from '../../const/paths.ts';
import MainLayout from '../../layouts/MainLayout.tsx';
import { lazy, Suspense } from 'react';
import { Home, Error } from '../../pages';
import { Spinner } from '../index.ts';

const Cart = lazy(() => import('../../pages/Cart'));
const FullPizza = lazy(() => import('../../pages/FullPizza'));
function App() {
  return (
    <Routes>
      <Route path={PATHS.BASE} element={<MainLayout />}>
        <Route path={PATHS.HOME} element={<Home />}></Route>
        <Route
          path={PATHS.CART}
          element={
            <Suspense fallback={<Spinner />}>
              <Cart />
            </Suspense>
          }
        ></Route>
        <Route path={PATHS.ERROR} element={<Error />}></Route>
        <Route
          path={PATHS.PIZZA}
          element={
            <Suspense fallback={<Spinner />}>
              <FullPizza />{' '}
            </Suspense>
          }
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
