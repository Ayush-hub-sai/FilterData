import { Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { CartComponent } from "./cart/cart.component";
import { HomeComponent } from "./home/home.component";


export const PagesRoutes: Routes = [

    {
        path: "",
        component: PagesComponent,
        children: [
            { path: "", component: HomeComponent },
            // { path: "all-categories", component: HomeComponent },
        ],
    },

    {
        path: "cart",
        component: CartComponent,
    },
]