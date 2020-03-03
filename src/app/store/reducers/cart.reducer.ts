import { CartAction, CartActionTypes } from '../actions/cart.actions'
import { CartItem } from '../models/cart-item.model';

const initialState: Array<CartItem> = [
]

export function CartReducer(state: Array<CartItem> = initialState, action:CartAction){
    switch(action.type){
        case CartActionTypes.ADD_ITEM:
            return [...state, action.payload]
        default:
            return state;
    }
}