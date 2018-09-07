import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

itemList: Item[];

  constructor() { }
}
