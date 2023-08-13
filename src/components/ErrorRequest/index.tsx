import styles from './ErrorRequest.module.scss';
import { FC } from 'react';

const ErrorRequest: FC = () => {
  return (
    <div className={styles['error-container']}>
      <div className={styles['error-message']}>
        Произошла ошибка при выполнении запроса. 😕
        <p>Пожалуйста, попробуйте позже.</p>
      </div>
    </div>
  );
};

export default ErrorRequest;
