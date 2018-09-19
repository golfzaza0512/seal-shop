import { Injectable } from '@angular/core';
import { Item } from './item';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  itemList: Item[];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Item[]> {
   return this.http.get("http://localhost:5000/product") as Observable<Item[]>;
  }

}
