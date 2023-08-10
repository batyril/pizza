import { useDispatch, useSelector } from 'react-redux';
import { filterSelector, setCategory } from '../../slices/filterSlice.ts';

const categories = [
  { name: 'Все', id: 6 },
  { name: 'Мясные', id: 0 },
  { name: 'Гриль', id: 1 },
  { name: 'Вегетарианская', id: 2 },
  { name: 'Острые', id: 3 },
  { name: 'C Мазиком', id: 4 },
  { name: 'Закрытые', id: 5 },
];

export const Categories = () => {
  const { activeCategory } = useSelector(filterSelector);
  const dispatch = useDispatch();
  const onClickCategory = (index: number) => {
    dispatch(setCategory(index));
  };

  return (
    <div className='categories'>
      <ul>
        {categories.map((category) => (
          <li
            onClick={() => onClickCategory(category.id)}
            className={activeCategory === category.id ? 'active' : ''}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
