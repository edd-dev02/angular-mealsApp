import { Component, Inject, OnInit } from '@angular/core';
import { MealDetailModel } from '../../interfaces/meal-detail.interface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Meal } from '../../interfaces/meal.interface';
import { MealsService } from '../../services/meals.service';
import { map } from 'rxjs';

@Component({
  selector: 'meals-detail-meal-dialog',
  templateUrl: './detail-meal-dialog.component.html',
  styleUrl: './detail-meal-dialog.component.css'
})
export class DetailMealDialogComponent {

  // Uso de un Stream para reactividad
  public mealExist$ = this.mealsService.favorites$;

  public idMeal: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: MealDetailModel, private mealsService: MealsService) { }

  /*
  ngOnInit(): void {

    this.idMeal = this.data.id;
    this.validateFavorites(this.idMeal);

  }
  */

  saveInLocalStorage({ id, name, image }: MealDetailModel, ) {

    const meal: Meal = {
      strMeal: name,
      strMealThumb: image,
      idMeal: id
    };

    this.mealsService.saveMealInLocalStorage(meal);

  }

  /*
  validateFavorites(id: string): void {

    this.mealExist = this.mealsService.existMealInLocalStorage(id);

  }
  */

  public isFavorite$ = this.mealsService.favorites$
    .pipe(
      map( meals => meals.some( m => m.idMeal === this.data.id ) )
    );

  deleteFromFavorites(id: string): void {

    this.mealsService.deleteMealFromLocalStorage(id);

  }

}
