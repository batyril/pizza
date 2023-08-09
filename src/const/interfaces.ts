export interface IPizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export interface ICart {
  count: number;
  price: number;
  id: number;
  title: string;
  imageUrl: string;
  size: number;
  typesName: string;
}

export interface SortType {
  name: string;
  sort: string;
  order: 'asc' | 'desc';
}
