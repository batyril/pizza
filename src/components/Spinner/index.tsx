import { PuffLoader } from 'react-spinners';
import { CSSProperties } from 'react';
import styles from './spinner.module.scss';
const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <PuffLoader
        color={'#fe5f1e'}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
};

export default Spinner;
