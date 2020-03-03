import {Action} from '@ngrx/store';
import {CartItem} from '../models/cart-item.model';

export enum CartActionTypes {
    ADD_ITEM = '[CART] Add Item'
}

export class AddItemAction implements Action {
    readonly type = CartActionTypes.ADD_ITEM;

    constructor(public payload: CartItem) {}
}

export type CartAction = AddItemAction;