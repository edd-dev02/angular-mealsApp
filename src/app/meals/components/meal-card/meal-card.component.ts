import { Component, Input, OnInit } from '@angular/core';
import { Meal } from '../../interfaces/meal.interface';
import { MealsService } from '../../services/meals.service';
import { MealDetail, MealDetailModel } from '../../interfaces/meal-detail.interface';
import { tap } from 'rxjs';

@Component({
  selector: 'meals-meal-cards',
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.css'
})
export class MealCardComponent {


  @Input()
  public meals?: Meal[];

  public mealDetail?: MealDetailModel;

  constructor( private mealsService: MealsService ) {}

  getMealDetail(id: string): void {

    this.mealsService.getMealDetail(id)
      .pipe(
        tap( meal => console.log(meal) ),
      )
      .subscribe( meal => {

        this.mealDetail = meal;

      })

  }

}
