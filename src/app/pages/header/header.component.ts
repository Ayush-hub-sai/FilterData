import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { category } from 'src/app/enum/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  category: any;
  searchqry: any

  @Output() dataEvent = new EventEmitter<any>();
  @Input() productCartFromParent: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.category = category
  }

  searchAutoComplete() {
    this.dataEvent.emit(this.searchqry);
  }

  goToCart() {
    this.router.navigate(["pages/cart"])
  }

  totalQuantityInCart(): number {
    return this.productCartFromParent?.reduce((total, cartItem) => total + cartItem.itemQty, 0);
  }

  goToHome() {
    this.router.navigate(['pages'])
  }
}
