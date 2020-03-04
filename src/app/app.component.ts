import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.model';
import { Observable } from 'rxjs';
import { CartItem } from './store/models/cart-item.model';
import { AddItemAction, RemoveAllAction } from './store/actions/cart.actions';
import { ShoppingItem } from './store/models/shopping-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  shoppingItems$: Observable<Array<ShoppingItem>>;
  cartItems$: Observable<Array<CartItem>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping)
    this.cartItems$ = this.store.select(store => store.cart)
    console.log(this.cartItems$)
  }


  addItem(item) {
    this.store.dispatch(new AddItemAction(item))
  }

  removeAll() {
    this.store.dispatch(new RemoveAllAction)
  }

}
