import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SEAL SHOP';
  listItem = [
    
    {
      id: "1", title: "หมวก",
      price: 999,
      category: "หมวก",
      imageUrl: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/bthrb4iziga2llxpal8y/%E0%B8%AB%E0%B8%A1%E0%B8%A7%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%84%E0%B8%94%E0%B9%89-sportswear-pro-wDx9WF.jpg",
      detail: "หมวกปรับได้ Nike Sportswear Pro "
    },
    {
      id: "2", title: "เสื้อ",
      price: 2999,
      category: "เสื้อ",
      imageUrl: "http://d126drxy0lew0u.cloudfront.net/catalog/product/large_image/09_190719.jpg",
      detail: "เสื้อแจ็คเก็ตผู้ชาย (สีดำ)"
    },
    {
      id: "3", title: "กางเกง",
      price: 1999,category: "กางเกง",
      imageUrl: "https://ae01.alicdn.com/kf/HTB1oRP9SXXXXXXVXFXXq6xXFXXXr/HIRIGIN-2018-Jogger.jpg_640x640.jpg",
      detail: "กางเกงขายาว ลำลอง ผู้ชาย (สีดำ)"
    },
    {
      id: "4", title: "รองเท้า",
      price: 3999,category: "รองเท้า",
      imageUrl: "https://www.goodmorningostend.be/th/%E0%B8%AD%E0%B8%B2%E0%B8%94%E0%B8%B4%E0%B8%94%E0%B8%B2%E0%B8%AA%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%9A%E0%B8%A2%E0%B9%89%E0%B8%AD%E0%B8%99-S78621-%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B2%E0%B8%A2%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%AA%E0%B8%B5%E0%B8%94%E0%B8%B3-129.jpg",
      detail: "อาดิดาสรองเท้า ทำงานผู้ชาย (สีดำสีขาว)"
    },
    {
      id: "5", title: "ถุงเท้า",
      price: 199,category: "ถุงเท้า",
      imageUrl: "https://www.adidas.co.th/static/on/demandware.static/-/Sites-adidas-products/default/dw8e932b90/zoom/AA2292_00_plp_standard.jpg",
      detail: "ถุงเท้าสำหรับออกกำลังกาย"
    },
    {
      id: "6", title: "กระเป๋า",
      price: 1199,category: "กระเป๋า",
      imageUrl: "http://static3.central.co.th/productimages/lpimage/O194733.jpg",
      detail: "กระเป๋าเป้ Chuck Bis Fifth (สีดำ)"
    }
  ];
  toogleCart = false;
  constructor(productService: ProductService, private cartService:CartService) {
    productService.itemList = this.listItem;
  }
}

