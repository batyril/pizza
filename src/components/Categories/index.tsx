interface ICategories {
  activeCategory: number;
  setActiveCategory: React.Dispatch<React.SetStateAction<number>>;
  categories: { name: string; id: number }[];
}

export const Categories = ({
  activeCategory,
  setActiveCategory,
  categories,
}: ICategories) => {
  const onClickCategory = (index: number) => {
    setActiveCategory(index);
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
