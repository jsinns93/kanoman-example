
import { MenuItem, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Order', href: '#order' },
  { name: 'Contact', href: '#contact' },
];

export const MENU_ITEMS: MenuItem[] = [
  // Breakfast
  { name: 'Big Breakfast', price: 'Rp65.000', category: 'Breakfast' },
  { name: 'Veggie in a Wrap', price: 'Rp50.000', category: 'Breakfast' },
  { name: 'Banana French Toast', price: 'Rp45.000', category: 'Breakfast' },
  { name: 'Coconut Chia Delight', price: 'Rp52.000', category: 'Breakfast' },
  { name: 'Smoke Beef Cheese Egg Wrap', price: 'Rp48.000', category: 'Breakfast' },
  
  // Salad
  { name: 'Grilled Chicken Salad', price: 'Rp55.000', category: 'Salad' },
  { name: 'Nori Soba Salad', price: 'Rp58.000', category: 'Salad' },
  { name: 'Smoked Salmon Salad', price: 'Rp65.000', category: 'Salad' },

  // Appetizer
  { name: 'Prawn Sesame Toast', price: 'Rp65.000', category: 'Appetizer' },
  { name: 'Chicken Dumpling in Red Oil', price: 'Rp45.000', category: 'Appetizer' },
  { name: 'Cheesy Fries', price: 'Rp40.000', category: 'Appetizer' },
  { name: 'Cheese & Chicken Mushroom Bites', price: 'Rp45.000', category: 'Appetizer' },
  { name: 'Grilled Chicken Bao Bun', price: 'Rp42.000', category: 'Appetizer' },
  { name: 'Tahu Gejrot', price: 'Rp35.000', category: 'Appetizer', isSpecial: true },
  { name: 'Goi Cuon', price: 'Rp40.000', category: 'Appetizer' },
  { name: 'Zwarteballen', price: 'Rp55.000', category: 'Appetizer' },
  { name: 'Golden Tofu Curry', price: 'Rp60.000', category: 'Appetizer' },
  { name: 'Mushroom Crunchies', price: 'Rp40.000', category: 'Appetizer' },
  { name: 'Pop Chicks Bites', price: 'Rp36.000', category: 'Appetizer' },
  { name: 'Chicken Karaage', price: 'Rp38.000', category: 'Appetizer' },

  // Main Course
  { name: 'Nasi Iga Bakar Kanoman', price: 'Rp80.000', category: 'Main Course', isSpecial: true },
  { name: 'Nasi Jamblang Ayam', price: 'Rp60.000', category: 'Main Course' },
  { name: 'Nasi Jamblang Blakutak', price: 'Rp60.000', category: 'Main Course' },
  { name: 'Empal Gentong', price: 'Rp60.000', category: 'Main Course', isSpecial: true },
  { name: 'Iga Garang Asam', price: 'Rp80.000', category: 'Main Course' },
  { name: 'Nasi Khas Cirebon', price: 'Rp58.000', category: 'Main Course' },
  { name: 'Nasi Jeruk Ayam Sambal Matah', price: 'Rp58.000', category: 'Main Course' },
  { name: 'Beef Saikoro Donburi', price: 'Rp70.000', category: 'Main Course' },
  { name: 'Kare Raisu', price: 'Rp68.000', category: 'Main Course' },
  { name: 'Sapo Tofu Rice', price: 'Rp48.000', category: 'Main Course' },
  { name: 'Cheesy Chicken Katsu', price: 'Rp60.000', category: 'Main Course' },
  { name: 'Seoul Style Beef & Kimchi Rice', price: 'Rp75.000', category: 'Main Course' },
  { name: 'Spicy Brisket Peanut Noodles', price: 'Rp55.000', category: 'Main Course' },
  { name: 'Mie Yamin', price: 'Rp48.000', category: 'Main Course' },
  { name: 'Mie Ayam', price: 'Rp48.000', category: 'Main Course' },
  { name: 'Pan Seared Salmon Butter Rice', price: 'Rp99.500', category: 'Main Course' },
  { name: 'Kanoman Fried Rice with Satay', price: 'Rp55.000', category: 'Main Course' },

  // Dessert
  { name: 'Es Cendol Kanoman', price: 'Rp35.000', category: 'Dessert', isSpecial: true },
  { name: 'Pisang Goreng Gula Aren', price: 'Rp35.000', category: 'Dessert' },
  { name: 'Matcha No Mori', price: 'Rp45.000', category: 'Dessert' },
  { name: 'Tapel', price: 'Rp36.000', category: 'Dessert' },
  { name: 'Pisang Bakar Kanoman', price: 'Rp37.000', category: 'Dessert' },
  { name: 'Dark Choco Lava', price: 'Rp40.000', category: 'Dessert' },

  // Drinks
  { name: 'Kanoman Dolce Latte', price: 'Rp52.000', category: 'Drinks', isSpecial: true },
  { name: 'Café Latte', price: 'Rp38.000', category: 'Drinks' },
  { name: 'Cappuccino', price: 'Rp38.000', category: 'Drinks' },
  { name: 'Americano', price: 'Rp33.000', category: 'Drinks' },
  { name: 'Bir Pletok', price: 'Rp38.000', category: 'Drinks', isSpecial: true },
  { name: 'Jamu Tonic', price: 'Rp35.000', category: 'Drinks' },
  { name: 'Indigo Mint Tea', price: 'Rp35.000', category: 'Drinks' },
  { name: 'Kanoman Tea', price: 'Rp30.000', category: 'Drinks' },
];
