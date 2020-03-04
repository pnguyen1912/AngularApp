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
  total$: Observable<number>
  totalSaleTax$: Observable<number>
  totalImportTax$: Observable<number>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping)
    this.cartItems$ = this.store.select(store => store.cart)
    this.total$ = this.store.select(store => store.cart.map(item => item.total).reduce((a, b) => a + b, 0))
    this.totalSaleTax$ = this.store.select(store => store.cart.map(item => item.saleTax).reduce((a, b) => a + b, 0))
    this.totalImportTax$ = this.store.select(store => store.cart.map(item => item.importTax).reduce((a, b) => a + b, 0))
  }


  addItem(item) {
    this.store.dispatch(new AddItemAction(item))
  }

  removeAll() {
    this.store.dispatch(new RemoveAllAction)
  }

}
