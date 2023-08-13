export interface IPizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
  description: string;
}

export interface IFetchPizza {
  activeSort: SortType;
  activeCategory: number;
  searchValue: string;
  page: number;
}

export interface InitStateCart {
  totalPrice: number;
  items: ICart[];
}

export interface InitStateFilter {
  activeSort: SortType;
  activeCategory: number;
  currentPage: number;
  searchValue: string;
}

export interface InitStatePizzaPage {
  items: IPizza | null;
  loadingStatus: 'idle' | 'loading' | 'error';
}

export interface InitStatePizza {
  items: IPizza[];
  loadingStatus: 'idle' | 'loading' | 'error';
  totalCount?: number;
}

export interface ICart {
  count: number;
  price: number;
  id: number;
  title: string;
  imageUrl: string;
  size: number;
  typesName: string;
  description: string;
}

export interface SortType {
  name: string;
  sort: string;
  order: 'asc' | 'desc';
}
