import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "pages",
    pathMatch: "full",
  },
  {
    path: "pages", //same as redirectTo path otherwise it will not working
    loadChildren: () =>
      import("src/app/pages/pages.module").then(
        (m) => m.PagesModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
