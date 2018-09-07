import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart';
import { FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: CartItem;
  cartItemKeys: string[];
  formGroup: FormGroup;
  amountArrayConteol: FormArray;
  totalPrice: number;

  constructor(public cartService: CartService) {
    this.cartItems = cartService.getItem();
    console.dir(this.cartItems);
    this.cartItemKeys = Object.keys(this.cartItems);
    console.dir(this.cartItemKeys);
    this.amountArrayConteol = new FormArray([], Validators.required)
    this.formGroup = new FormGroup({
      cartList: this.amountArrayConteol
    });
    this.formGroup.valueChanges.subscribe({
      next: (data) => {
        this.totalPrice = data.cartList.reduce((total, amount, index) => {
          const itemId = this.cartItemKeys[index];
          const itemInCart = this.cartItems[itemId];
          return (amount * itemInCart.item.price) + total;
        }, 0);
        // console.log(data);
      },
      error: (err) => { },
      complete: () => { }
    });
    // this.amountInput = new FormControl(1, [Validators.min(1), Validators.required]);
  }
  ngOnInit() {
    this.cartItemKeys.forEach((cartItemKey) => {
      this.amountArrayConteol.push(
        new FormControl(this.cartItems[cartItemKey].amount, [Validators.min(1), Validators.required]))
    });
  }
  removeItem(itemId: string, index: number) {
    this.cartItemKeys.splice(index, 1);
    this.amountArrayConteol.removeAt(index);
    delete this.cartItems[itemId];
  }
}
