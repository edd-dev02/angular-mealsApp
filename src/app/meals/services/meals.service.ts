import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Category, CategoryResults } from '../interfaces/categories.interface';
import { Meal, MealsResponse } from '../interfaces/meal.interface';
import { MealDetail, MealDetailModel } from '../interfaces/meal-detail.interface';

@Injectable({providedIn: 'root'})
export class MealsService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = `https://www.themealdb.com/api/json/v1/1`;

  getCategories(): Observable<Category[]> {

    const url: string = `${this.baseUrl}/categories.php`;

    return this.http.get<CategoryResults>(url)
      .pipe(
        map( categories => categories.categories),
      );
  }

  getMealsByCategory(category: string): Observable<Meal[]> {

    const url: string = `${this.baseUrl}/filter.php?c=${category}`;

    return this.http.get<MealsResponse>(url)
      .pipe(
        map( meals => meals.meals ),
      );

  }

  getMealDetail(id: string): Observable<MealDetailModel> {

    const url: string = `${this.baseUrl}/lookup.php?i=${id}`;

    return this.http.get<MealDetail>(url)
      .pipe(
        map( resp =>  {

          const meal = resp.meals[0];

          const ingredients: { name: string; measure: string }[] = [];

          for (let i = 1; i <= 20; i++) {

            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];

            if (ingredient && ingredient.trim() !== '') {
              ingredients.push({
                name: ingredient,
                measure: measure ?? ''
              });
            }
          }

          return {
            id: meal['idMeal'] as string,
            name: meal['strMeal'] as string,
            category: meal['strCategory'] as string,
            area: meal['strArea'] as string,
            instructions: meal['strInstructions'] as string,
            image: meal['strMealThumb'] as string,
            ingredients
          };

        }),
      );

  }

}
