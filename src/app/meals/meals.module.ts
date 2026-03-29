import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MealsRoutingModule } from './meals-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MealsRoutingModule,
  ]
})
export class MealsModule { }
