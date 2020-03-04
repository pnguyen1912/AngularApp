import { Action } from '@ngrx/store';
import { CartItem } from '../models/cart-item.model';

export enum CartActionTypes {
  ADD_ITEM = '[CART] Add Item',
  REMOVE_ALL = '[CART] Remove All'
}

export class AddItemAction implements Action {
  readonly type = CartActionTypes.ADD_ITEM;
  constructor(public payload: CartItem) { }
}

export class RemoveAllAction implements Action {
  readonly type = CartActionTypes.REMOVE_ALL;
}

export type CartAction = AddItemAction | RemoveAllAction