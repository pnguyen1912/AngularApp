import { AddItemAction, RemoveAllAction } from '../actions/cart.actions';
import { CartReducer } from './cart.reducer';

describe('Cart Reducer', () => {
  describe('[CART] Add Item', () => {
    it('Should add new item to state', () => {
      const state = []
      const action = new AddItemAction({
        name: 'Kittle',
        type: 'candy',
        quantity: 0,
        saleTax: 0,
        importTax: 0,
        price: 16,
        total: 0,
        origin: '',
      });
      const result = CartReducer(state, action);

      expect(result).toEqual([
        {
          name: 'Kittle',
          type: 'candy',
          quantity: 1,
          saleTax: 0,
          importTax: 0,
          price: 16,
          total: 16,
          origin: '',
        }
      ])
    })


    it('Should add 2nd item to state', () => {
      const state = [{
        name: 'Popcorn',
        type: 'popcorn',
        quantity: 1,
        saleTax: 0,
        importTax: 0,
        price: 0.99,
        total: 0.99,
        origin: '',
      }]
      const action = new AddItemAction({
        name: 'Popcorn',
        type: 'popcorn',
        quantity: 1,
        saleTax: 0,
        importTax: 0,
        price: 0.99,
        total: 0.99,
        origin: '',
      });
      const result = CartReducer(state, action);

      expect(result).toEqual([
        {
          name: 'Popcorn',
          type: 'popcorn',
          quantity: 2,
          saleTax: 0,
          importTax: 0,
          price: 0.99,
          total: 1.98,
          origin: '',
        }
      ])
    })


    it('Should remove all items', () => {
      const state = [{
        name: 'Popcorn',
        type: 'popcorn',
        quantity: 1,
        saleTax: 0,
        importTax: 0,
        price: 0.99,
        total: 0.99,
        origin: '',
      }]
      const action = new RemoveAllAction();
      const result = CartReducer(state, action);

      expect(result).toEqual([])
    })
  })
})