import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { RecipesPageComponent } from './pages/recipes-page/recipes-page.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { MealsModule } from '../meals/meals.module';


@NgModule({
  declarations: [
    LayoutPageComponent,
    RecipesPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FavoritesRoutingModule,
    SharedModule,
    MealsModule,
    MaterialModule,
  ]
})
export class FavoritesModule { }
