import { useState } from 'react';

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  const onClickCategory = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className='categories'>
      <ul>
        {categories.map((category, categoryIndex) => (
          <li
            onClick={() => onClickCategory(categoryIndex)}
            className={activeIndex === categoryIndex ? 'active' : ''}
            key={categoryIndex}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
