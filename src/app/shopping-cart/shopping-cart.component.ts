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
  itemCout: number;

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
        // this.sum = data.cartList.reduce((total, amount, index) => {
        //   const itemId =  this.cartItemKeys[index];
        //   const itemInCart = this.cartItems[itemId];
        //   // this.sum = itemInCart.item.price;
        //   return (amount + total)  ;
        // }, 0);
        // console.log('sum1',this.sum);
      },
      error: (err) => { },
      complete: () => { }
    });

  //   this.formGroup.valueChanges.subscribe({
  //     next: (data) => {
  //   this.itemCout = data.cartList.reduce((total, amount, index) => {
  //     const itemId =  this.cartItemKeys[index];
  //     const itemInCart = this.cartItems[itemId];
  //     // this.sum = itemInCart.item.price;
  //     return (amount + total)  ;
  //   }, 0);
  //   console.log('sum1',this.itemCout);
  // }
  // });
    // this.amountInput = new FormControl(1, [Validators.min(1), Validators.required]);
    // this.yyyy = this.sum;
    // this.yyyy = this.sum;
    // console.log('sum2',this.itemCout);
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
