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
              total: (item.quantity + 1) * item.price,
              saleTax: (item.type === 'candy' || item.type === 'popcorn' || item.type === 'coffee') ? 0 : Math.round((item.quantity + 1) * item.price * 0.1 * 20) / 20,
              importTax: item.origin === 'imported' ? Math.round((item.quantity + 1) * item.price * 0.05 * 20) / 20 : 0
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
        newObj.saleTax = action.payload.type === 'candy' || action.payload.type === 'popcorn' || action.payload.type === 'coffee' ? 0 : Math.round(action.payload.total * 0.1 * 20) / 20;
        newObj.importTax = action.payload.origin === 'imported' ? Math.round(action.payload.total * 0.05 * 20) / 20 : 0
        return [...state, newObj]
      }

    case CartActionTypes.REMOVE_ALL:
      return initialState
    default:
      return state;
  }
}