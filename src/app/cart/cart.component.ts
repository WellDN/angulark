import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  items = this.CartService.getItems();

  checkoutForm = this.FormBuilder.group({
    name: '',
    adress: ''
  });
  constructor(
    private CartService: CartService,
    private FormBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.CartService.clearCart();
    console.warn('Your order has been submitted',
     this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
  }

}
