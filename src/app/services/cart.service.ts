import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(product: Product) {
    let item = CartItems.find((p) => p.product.productId === product.productId);
    if (item) {
      //varsa demektir
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  removeFromCart(product:Product){
    let item:CartItem = CartItems.find(c=>c.product.productId ===product.productId)
    CartItems.splice(CartItems.indexOf(item),1)    //splice belirli bir indekten belirli sayı kadar kesmeyee yarar
  }
  list():CartItem[]{
    return CartItems;
  }
}
