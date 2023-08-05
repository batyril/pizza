import { createContext } from 'react';

interface IContext {
  searchValue: string;
  setSearchValue?: React.Dispatch<React.SetStateAction<string>>;
}

const defaultValue: IContext = { searchValue: '' };

export const AppContext = createContext(defaultValue);
