import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CartReducer } from './store/reducers/cart.reducer';
import { ShoppingReducer } from './store/reducers/shopping.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ cart: CartReducer, shopping: ShoppingReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
