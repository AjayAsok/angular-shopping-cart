import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CartService {
  items = [];
  constructor(private httpClient: HttpClient) {}
  addItemsToCart(item) {
    this.items.push(item);
  }
  removeItemFromCart(item) {
    // this.items.po
  }
  getCartItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.httpClient.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }
}
