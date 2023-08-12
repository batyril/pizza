import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import { FC } from 'react';
import styles from './MainLayout.module.scss';
const MainLayout: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
