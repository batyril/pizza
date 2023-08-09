import styles from './ErrorRequest.module.scss';

const ErrorRequest = () => {
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
