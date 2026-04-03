import { Component } from '@angular/core';
import { Meal } from '../../interfaces/meal.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: `

    .container {
        width: 95%;
        max-width: 1200px;
        margin: 0 auto;
    }

  `
})
export class MainPageComponent {

  public mealsList: Meal[] = [];

  public getMealsList(meals: Meal[]): void {

    this.mealsList = meals;

  }

}
