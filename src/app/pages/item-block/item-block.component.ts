import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-block',
  templateUrl: './item-block.component.html',
  styleUrls: ['./item-block.component.css']
})
export class ItemBlockComponent implements OnInit {
  @Input() products

  ngOnInit(): void {
  }
}
