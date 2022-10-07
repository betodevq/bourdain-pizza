export interface Pizza {
  id: number;
  name: string;
  price: number;
  ingredients: string[];
  selected?: boolean;
  quantity?: number;
}

export interface Order {
  items: Item[];
}

export interface Item {
  pizza: { id: number };
  quantity: number;
}
