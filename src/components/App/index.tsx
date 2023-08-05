import '../../scss/app.scss';
import { Header } from '../Header';
import { Home } from '../../pages/Home';
import { Error } from '../../pages/Error';
import { Route, Routes } from 'react-router-dom';
import Cart from '../../pages/Cart';
import { PATHS } from '../../const/paths.ts';
import { useState } from 'react';
import { AppContext } from '../../context/AppContext.ts';

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <AppContext.Provider value={{ searchValue, setSearchValue }}>
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <Routes>
            <Route path={PATHS.HOME} element={<Home />}></Route>
            <Route path={PATHS.CART} element={<Cart />}></Route>
            <Route path={PATHS.ERROR} element={<Error />}></Route>
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
