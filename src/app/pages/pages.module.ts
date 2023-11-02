import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesRoutes } from './pages.routing';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from './modals/product-modal/product-modal.component';
import { HorizontalMenuComponent } from './horizontal-menu/horizontal-menu.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { ItemBlockComponent } from './item-block/item-block.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
    declarations: [
        PagesComponent,
        HeaderComponent,
        ProductComponent,
        FooterComponent,
        ProductModalComponent,
        HorizontalMenuComponent,
        CartComponent,
        HomeComponent,
        BannerComponent,
        ItemBlockComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(PagesRoutes),
        NgbModule,
        CarouselModule
    ]

})
export class PagesModule { }
