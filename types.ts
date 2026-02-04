
export type MenuCategory = 
  | 'Breakfast' 
  | 'Salad' 
  | 'Appetizer' 
  | 'Main Course' 
  | 'Dessert' 
  | 'Drinks';

export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  category: MenuCategory;
  isSpecial?: boolean;
}

export interface NavLink {
  name: string;
  href: string;
}
