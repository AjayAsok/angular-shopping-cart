import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items = this.cartService.getCartItems();
  checkOutInfo = this.formBuilder.group({
    name: "",
    address: ""
  });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    console.log(this.items);
  }

  ngOnInit() {}
  onSubmit(): void {
    // code to checkout data
    window.alert("Your order has been submitted");
    this.items = this.cartService.clearCart();
    this.checkOutInfo.reset();
  }
}
