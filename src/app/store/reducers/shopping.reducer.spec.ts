import { ShoppingReducer } from './shopping.reducer';

describe('shopping reducer test', () => {
  const array = [
    {
      name: 'Skittles',
      price: 16.00,
      type: 'candy',
      origin: ''
    },
    {
      name: 'Walkman',
      price: 99.99,
      type: 'technology',
      origin: ''
    },
    {
      name: 'Popcorn',
      price: 0.99,
      type: 'popcorn',
      origin: ''
    },
    {
      name: 'Imported Vanilla Coffee',
      price: 11.00,
      type: 'coffee',
      origin: 'imported'
    },
    {
      name: 'Imported Vespa',
      price: 15001.25,
      type: 'motor',
      origin: 'imported'
    },
    {
      name: 'Imported Almond Snickers',
      price: 75.99,
      type: 'candy',
      origin: 'imported'
    },
    {
      name: 'Discman',
      price: 55.00,
      type: 'technology',
      origin: ''
    },
    {
      name: 'Imported Bottle of Wine',
      price: 10.00,
      type: 'wine',
      origin: 'imported'
    },
    {
      name: 'Fair-Trade Coffee',
      price: 997.99,
      type: 'coffee',
      origin: ''
    },
  ]
  it('should return shopping array', () => {
    expect(ShoppingReducer()).toEqual(array);
  });
});