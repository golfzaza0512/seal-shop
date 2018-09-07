import { Component, OnInit, Input } from '@angular/core';
import { Item } from "../item";
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() listItem: Item[]

  constructor(productService: ProductService,
    private cartService: CartService,
    private router: ActivatedRoute) {
    this.router.queryParamMap.subscribe({
      next: (queryParamMap: ParamMap) => {
        if (queryParamMap.has("category")) {
          const category = queryParamMap.get("category")
          this.listItem = productService.itemList.filter((item) => {
            return item.category == category
          });

        } else {
          this.listItem = productService.itemList
        }
      }
    });
    // this.listItem = productService.itemList;

  }
  ngOnInit() {
    console.log("ProductLictComponent", "ngOnInit");

  }

  addToCart(item: Item) {
    this.cartService.addItem(item);


  }
}

