import { Injectable } from '@angular/core';
import { Item } from './item';
import { CartItem } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemList: CartItem

  constructor() {
    this.itemList = {};
  }

  getItem() {
    return this.itemList;
  }

  addItem(item: Item) {
    if (this.itemList[item.id]) {
      this.itemList[item.id].amount++;
    } else {
      this.itemList[item.id] = {
        item: item,
        amount: 1
      }
    }


  }
}
