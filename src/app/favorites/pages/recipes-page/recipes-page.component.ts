import { Component, OnInit } from '@angular/core';
import { Meal } from '../../../meals/interfaces/meal.interface';
import { MealsService } from '../../../meals/services/meals.service';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styles: `
    .container {
        width: 95%;
        max-width: 1200px;
        margin: 0 auto;
    }
  `
})
export class RecipesPageComponent implements OnInit{

  public mealsList: Meal[] = [];

  constructor( private mealsServie: MealsService ) {}

  ngOnInit(): void {
    this.getFavoritesMeals();
  }

  getFavoritesMeals(): void {

    this.mealsList = this.mealsServie.getMealsFromLocalStorage();

  }

}
