import styles from './Search.module.scss';
import { ChangeEvent, FC, useCallback, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/filter/slice.ts';

const Search: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const updateSearchDebounced = useCallback(
    debounce((search: string) => {
      dispatch(setSearchValue(search));
    }, 1000),
    [],
  );

  const updateSearch = (search: string) => {
    updateSearchDebounced(search);
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue ? setValue(event.target.value) : '';
    updateSearch(event.target.value);
  };

  const onResetInput = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  return (
    <div className={styles.search}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder='Поиск пиццы....'
      ></input>

      <svg
        className={styles.icon__search}
        height='512px'
        id='Layer_1'
        version='1.1'
        viewBox='0 0 512 512'
        width='512px'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M448.3,424.7L335,311.3c20.8-26,33.3-59.1,33.3-95.1c0-84.1-68.1-152.2-152-152.2c-84,0-152,68.2-152,152.2  s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L425,448L448.3,424.7z M120.1,312.6c-25.7-25.7-39.8-59.9-39.8-96.3  s14.2-70.6,39.8-96.3S180,80,216.3,80c36.3,0,70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3  c-25.7,25.7-59.9,39.9-96.2,39.9C180,352.5,145.8,338.3,120.1,312.6z' />
      </svg>

      {value.length > 0 ? (
        <svg
          onClick={onResetInput}
          className={styles.icon__close}
          height='48'
          viewBox='0 0 48 48'
          width='48'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z' />
          <path d='M0 0h48v48h-48z' fill='none' />
        </svg>
      ) : null}
    </div>
  );
};

export default Search;
