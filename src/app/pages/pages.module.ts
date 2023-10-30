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
@NgModule({
    declarations: [
        PagesComponent,
        HeaderComponent,
        ProductComponent,
        FooterComponent,
        ProductModalComponent,
        HorizontalMenuComponent,
        CartComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(PagesRoutes),
        NgbModule
    ]

})
export class PagesModule { }
