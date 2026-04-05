import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MealsRoutingModule } from './meals-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { SelectCategoryComponent } from './components/select-category/select-category.component';
import { MealCardComponent } from './components/meal-card/meal-card.component';
import { DetailMealDialogComponent } from './components/detail-meal-dialog/detail-meal-dialog.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    MainPageComponent,
    SelectCategoryComponent,
    MealCardComponent,
    DetailMealDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MealsRoutingModule,
    SharedModule,
    MaterialModule,

  ]
})
export class MealsModule { }
