import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProductByLocal: any = JSON.parse(localStorage.getItem("localStorageCart"))
  total: number = 0
  deliveryTot: number = 0
  taxTot: number = 0

  constructor(
    private spinner: NgxUiLoaderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.spinner.start()
    setTimeout(() => {
      this.spinner.stop()
    }, 1000);
  }

  totalQuantityInCart(): number {
    return this.cartProductByLocal?.reduce((total, cartItem) => total + cartItem.itemQty, 0);
  }

  itemTotal() {
    this.total = this.cartProductByLocal?.reduce((total, cartItem) => total + cartItem.subTotal, 0);
    return Math.round(this.total)
  }

  deliveryCharges() {
    this.deliveryTot = this.cartProductByLocal?.reduce((total, cartItem) => total + cartItem.deliveryCharges, 0);
    return Math.round(this.deliveryTot)
  }

  taxCharges() {
    this.taxTot = this.cartProductByLocal?.reduce((total, cartItem) => total + cartItem.tax_charges, 0);
    return Math.round(this.taxTot)
  }

  grandTotal() {
    return Math.round(this.total + this.deliveryTot + this.taxTot)
  }

  goToHome() {
    this.router.navigate(['pages'])
  }

  clearCart() {
    localStorage.removeItem("localStorageCart")
    this.router.navigate(['pages'])
  }
}
