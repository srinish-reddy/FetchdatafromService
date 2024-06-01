import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public product_api="https://dummyjson.com/products";

  constructor(public httpClient:HttpClient) { }
  getProducts(){
    return this.httpClient.get(this.product_api);
  }
}
