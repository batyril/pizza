export interface Pizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export interface SortType {
  name: string;
  sort: string;
  order: 'asc' | 'desc';
}
