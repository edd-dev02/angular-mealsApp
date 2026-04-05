import { Component, Input, OnInit } from '@angular/core';
import { Meal } from '../../interfaces/meal.interface';
import { MealsService } from '../../services/meals.service';
import { MealDetail, MealDetailModel } from '../../interfaces/meal-detail.interface';
import { tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DetailMealDialogComponent } from '../detail-meal-dialog/detail-meal-dialog.component';

@Component({
  selector: 'meals-meal-cards',
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.css'
})
export class MealCardComponent {


  @Input()
  public meals?: Meal[];

  public mealDetail?: MealDetailModel;

  constructor( private mealsService: MealsService, public dialog: MatDialog ) {}

  openDialog( id: string ) {

    this.mealsService.getMealDetail(id)
      .subscribe(meal => {

      this.dialog.open(DetailMealDialogComponent, {
        data: meal,
        maxWidth: "400px",
      });

    });

  }

}
