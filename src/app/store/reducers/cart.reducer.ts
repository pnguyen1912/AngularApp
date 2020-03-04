import { CartAction, CartActionTypes } from '../actions/cart.actions'
import { CartItem } from '../models/cart-item.model';

const initialState: Array<CartItem> = [
]

export function CartReducer(state: Array<CartItem> = initialState, action: CartAction) {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      if (state.find((item) => item.name === action.payload.name)) {
        return state.map(item => {
          if (item.name === action.payload.name) {
            return Object.assign({}, item, {
              quantity: item.quantity + 1,
              total: item.quantity * item.price
            })
          }
          else {
            return item
          }
        })

      } else {
        let newObj = action.payload;
        newObj.quantity = 1;
        newObj.total = action.payload.price;
        return [...state, newObj]
      }

    case CartActionTypes.REMOVE_ALL:
      return initialState
    default:
      return state;
  }
}