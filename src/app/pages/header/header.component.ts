import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { category } from 'src/app/enum/category';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  category: any;
  searchqry: any

  @Output() dataEvent = new EventEmitter<any>();
  productCartFromParent: any;

  constructor(private router: Router,
    private _cartService: CartService) {

    this._cartService.cartItem.subscribe(products => {
      this.productCartFromParent = products
    });

  }

  ngOnInit(): void {
    this.category = category
  }

  searchAutoComplete() {
    this.dataEvent.emit(this.searchqry);
  }

  goToCart() {
    this.router.navigate(["/cart"])
  }

  totalQuantityInCart(): number {
    return this.productCartFromParent?.reduce((total, cartItem) => total + cartItem.itemQty, 0);
  }

  goToHome() {
    this.router.navigate(["/"])
  }
}
