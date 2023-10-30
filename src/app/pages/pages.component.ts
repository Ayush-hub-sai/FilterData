import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/enum/product';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  public productData: any;
  receivedSearchQry: string = '';
  sendDataToCart: any = []

  ngOnInit(): void { }

  receiveDataFromChild(data: any) {
    this.receivedSearchQry = data;
  }

  addToProductCart(item: any) {
    this.sendDataToCart = item
  }
}
