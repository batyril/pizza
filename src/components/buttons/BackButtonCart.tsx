import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../const/paths.ts';
import styles from './Buttons.module.scss';
const BackButtonCart: FC = () => {
  return (
    <Link
      to={PATHS.BASE}
      className={`${styles.button} ${styles['button--outline']} ${styles['button--add']} ${styles['go-back-btn']}`}
    >
      <svg
        width='8'
        height='14'
        viewBox='0 0 8 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7 13L1 6.93015L6.86175 1'
          stroke='#D3D3D3'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>

      <span>Вернуться назад</span>
    </Link>
  );
};

export default BackButtonCart;
