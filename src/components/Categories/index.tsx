import { useDispatch, useSelector } from 'react-redux';
import { selectActiveCategory } from '../../redux/filter/selectors.ts';
import { setCategory } from '../../redux/filter/slice.ts';
import { FC } from 'react';
import styles from './categories.module.scss';

const categories = [
  { name: 'Все', id: 6 },
  { name: 'Мясные', id: 0 },
  { name: 'Гриль', id: 1 },
  { name: 'Вегетарианская', id: 2 },
  { name: 'Острые', id: 3 },
  { name: 'C Мазиком', id: 4 },
  { name: 'Закрытые', id: 5 },
];

const Categories: FC = () => {
  const activeCategory = useSelector(selectActiveCategory);
  const dispatch = useDispatch();
  const onClickCategory = (index: number) => {
    dispatch(setCategory(index));
  };

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((category) => (
          <li
            onClick={() => onClickCategory(category.id)}
            className={activeCategory === category.id ? styles.active : ''}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
