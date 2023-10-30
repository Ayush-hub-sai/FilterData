import { Injectable } from '@angular/core';
import { products } from '../enum/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productData = products

  constructor() { }

  getProducts(): any[] {
    return this.productData;
  }

  filterProducts(searchQuery: string): any[] {
    return this.productData.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
}
