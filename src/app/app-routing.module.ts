import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "meals",
    loadChildren: () => import("./meals/meals.module").then(m => m.MealsModule),
  },
  {
    path: "favorites",
    loadChildren: () => import("./favorites/favorites.module").then(m => m.FavoritesModule)
  },
  {
    path: "",
    redirectTo: "meals",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "meals"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
