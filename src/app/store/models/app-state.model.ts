import { ShoppingItem } from './shopping-item.model';
import { CartItem } from './cart-item.model';

export interface AppState {
  readonly shopping: Array<ShoppingItem>
  readonly cart: Array<CartItem>
}