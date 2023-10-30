import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {
  products: any
  staticProduct: any
  @Input() productBySearch
  @Output() productCart = new EventEmitter<any>();
  quantiy: number = 0
  addCartProduct: any = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    var searchChanges = changes["productBySearch"].currentValue
    if (searchChanges == "") {
      this.staticProduct = this.productService.getProducts()
      this.products = this.staticProduct
    }
    else {
      var tempProduct: any
      tempProduct = this.productService.filterProducts(searchChanges)
      this.products = tempProduct
    }
  }

  addToCart(item) {
    const existingItem = this.addCartProduct.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.itemQty++;
    } else {
      item.itemQty = 1;
      this.addCartProduct.push(item);
    }
    this.productCart.emit(this.addCartProduct);
  }

  buyNow(item) {
  }

}
