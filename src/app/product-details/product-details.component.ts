import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../cart.service";

import { products } from "../products";
@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private activatedRoots: ActivatedRoute,
    private cartService: CartService
  ) {}
  product;

  ngOnInit() {
    const params = this.activatedRoots.snapshot.paramMap;
    const prodId = Number(params.get("productId"));
    this.product = products.find(product => product.id === prodId);
  }
  addToCart(product) {
    this.cartService.addItemsToCart(product);
    window.alert(product.name + " Added to the cart!");
  }
}
