import { CartActionTypes, AddItemAction, RemoveAllAction } from './cart.actions';
import { CartItem } from '../models/cart-item.model';



describe('ADD_ITEM', () => {
  it('should create an action', () => {
    const item: CartItem = {
      name: 'Kittle',
      type: 'candy',
      quantity: 0,
      saleTax: 0,
      importTax: 0,
      price: 16,
      total: 0,
      origin: '',
    }
    const action = new AddItemAction(item);
    expect({ ...action }).toEqual({
      type: CartActionTypes.ADD_ITEM,
      payload: item
    })
  });
});


describe('REMOVE_ALL', () => {
  it('should create an action', () => {
    const action = new RemoveAllAction();
    expect({ ...action }).toEqual({
      type: CartActionTypes.REMOVE_ALL
    })
  });
});


