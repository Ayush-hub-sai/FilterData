import { Routes } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { PagesComponent } from "./pages.component";
import { CartComponent } from "./cart/cart.component";


export const PagesRoutes: Routes = [
    { path: "", component: PagesComponent },
    { path: "cart", component: CartComponent }
]