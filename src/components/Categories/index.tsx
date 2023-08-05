interface ICategories {
  activeCategory: number;
  setActiveCategory: React.Dispatch<React.SetStateAction<number>>;
}

export const Categories = ({
  activeCategory,
  setActiveCategory,
}: ICategories) => {
  const onClickCategory = (index: number) => {
    setActiveCategory(index);
  };

  const categories = [
    { name: 'Все', id: 6 },
    { name: 'Мясные', id: 0 },
    { name: 'Гриль', id: 1 },
    { name: 'Вегетарианская', id: 2 },
    { name: 'Острые', id: 3 },
    { name: 'C Мазиком', id: 4 },
    { name: 'Закрытые', id: 5 },
  ];

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
