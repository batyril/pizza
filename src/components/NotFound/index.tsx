import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <h1 className={styles.notFound}>
      <span> &#128533;</span>
      <p>Ничего не найдено</p>
    </h1>
  );
};

export default NotFound;
