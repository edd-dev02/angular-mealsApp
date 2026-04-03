import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Category, CategoryResults } from '../interfaces/categories.interface';
import { Meal, MealsResponse } from '../interfaces/meal.interface';

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

}
