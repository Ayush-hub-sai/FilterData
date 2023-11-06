import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/services/cart.service';

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
  customOptions: OwlOptions = {};

  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
    private _cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.getProducts()
    this.forCareousalcall()
  }

  getProducts() {
    this.staticProduct = this.productService.getProducts()
    this.products = this.staticProduct
  }

  forCareousalcall() {
    this.customOptions = {
      loop: false,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      margin: 24,
      navSpeed: 500,
      navText: [' < ', ' > '],
      skip_validateItems: true,
      rewind: true,
      // slideBy: this.itemBlockParams.slideBy,
      // autoplay:true,
      nav: true,
      autoHeight: true,
      autoWidth: true,
      lazyLoadEager: 3,
      lazyLoad: true,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        },
        1000: {
          items: 5
          // this.itemBlockParams.itemCount > 10
          //   ? 10
          //   : this.itemCount,
        },
      },
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // var searchChanges = changes["productBySearch"].currentValue
    // if (searchChanges == "") {
    //   this.staticProduct = this.productService.getProducts()
    //   this.products = this.staticProduct
    // }
    // else {
    //   var tempProduct: any
    //   tempProduct = this.productService.filterProducts(searchChanges)
    //   this.products = tempProduct
    // }
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

    this._cartService.cartItem.next(this.addCartProduct)
    // localStorage.setItem("localStorageCart", JSON.stringify(this.addCartProduct))
    // this.productCart.emit(this.addCartProduct);
    this.toastr.success('Cart details updated successfully!');
  }

  changeFavourite(item: any) {
    const favourite = this.products.find(cartItem => cartItem.id === item.id);
    if (favourite) {
      favourite.favourite = favourite.favourite == true ? false : true
    }
    if (favourite.favourite) {
      this.toastr.success('Item added to favourite successfully');
    } else {
      this.toastr.success('Item removed from favourite successfully');
    }
  }

}
