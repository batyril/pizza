import styles from './NotFound.module.scss';
import { FC } from 'react';

const NotFound: FC = () => {
  return (
    <h1 className={styles.notFound}>
      <span> &#128533;</span>
      <p>Ничего не найдено</p>
    </h1>
  );
};

export default NotFound;
