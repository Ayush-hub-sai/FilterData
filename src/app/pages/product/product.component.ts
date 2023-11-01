import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
// declare var bootstrap: any;

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

  constructor(
    private productService: ProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void { }

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
      var itemPrice: number = 0;
      itemPrice = item.price;
      if (isNaN(existingItem.subTotal)) {
        existingItem.subTotal = 0;
      }
      existingItem.subTotal = itemPrice + existingItem.subTotal;
    }
    else {
      item.itemQty = 1;
      item.subTotal = item.price
      this.addCartProduct.push(item);
    }
    localStorage.setItem("localStorageCart", JSON.stringify(this.addCartProduct))
    this.productCart.emit(this.addCartProduct);
    this.toastr.success('Cart details updated successfully!');
  }

  buyNow(item) {
  }


  // ngAfterViewInit(): void {
  //   // Initialize the carousel
  //   const myCarousel = document.getElementById('myCarousel');
  //   const carousel = new bootstrap.Carousel(myCarousel, {
  //     interval: 1000, // Set the desired interval (in milliseconds), or use `false` for no automatic sliding.
  //   });
  // }
}
