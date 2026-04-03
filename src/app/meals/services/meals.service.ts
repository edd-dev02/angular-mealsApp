import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Category, CategoryResults } from '../interfaces/categories.interface';

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

}
