import { Component } from '@angular/core';
import { imgSlide } from 'src/app/enum/imgSlider';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  slideImages: any = imgSlide
}
