import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.css']
})
export class HorizontalMenuComponent implements OnInit, AfterViewInit {

  @Input() shop_categories_horizontal: any;
  @Input() searchQry: any
  ngOnInit(): void {

    // $(
    //   "<style>.horizontal_menu { background-color:'red;' }</style>"
    // ).appendTo("body");

    // $('style').appendTo('body').html('.horizontal_menu { background-color: red; }');
  }

  mouseEnter(category: any) {
  }

  mouseLeave() {
  }

  viewCategory(item: any, event: any) {
   
  }

  viewSubcategory(category: any, label?: any) { }

  ngAfterViewInit(): void {
    // $('document').ready(function () {
    //   $('.horizontal_menu').css('background-color', 'red');
    // });
  }
}
