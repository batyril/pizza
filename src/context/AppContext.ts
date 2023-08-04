import { createContext } from 'react';

const defaultValue = {
  sorts: ['популярности', 'цене', 'алфавиту'],
  categories: [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ],
};

export const AppContext = createContext(defaultValue);
