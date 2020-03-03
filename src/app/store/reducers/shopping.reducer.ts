import { ShoppingItem } from '../models/shopping-item.model';

const initialState: Array<ShoppingItem> = [
    {id: '1',
    name: 'DietCoke'},
    {id: '2',
    name: 'yo'},
    {id: '3',
    name: 'sada'},
]
export function ShoppingReducer(state: Array<ShoppingItem> = initialState){
 return state;
}