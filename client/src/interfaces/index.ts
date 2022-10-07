export interface Pizza {
  id: number;
  name: string;
  price: number;
  ingredients: string[];
  selected?: boolean;
  quantity?: number;
}