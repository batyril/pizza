import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../const/paths.ts';
import styles from './Buttons.module.scss';

const BackButton: FC = () => {
  return (
    <Link
      to={PATHS.BASE}
      className={`${styles.button} ${styles['button--black']}`}
    >
      <span>Вернуться на главную</span>
    </Link>
  );
};

export default BackButton;
