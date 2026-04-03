import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MealsService } from '../../services/meals.service';
import { Category } from '../../interfaces/categories.interface';
import { switchMap, tap } from 'rxjs';
import { Meal } from '../../interfaces/meal.interface';

@Component({
  selector: 'meals-select-category',
  templateUrl: './select-category.component.html',
  styleUrl: './select-category.component.css'
})
export class SelectCategoryComponent implements OnInit{

  public categories: Category[] = [];

  public meals: Meal[] = [];

  constructor( private fb: FormBuilder, private mealsService: MealsService ) {}

  ngOnInit(): void {

    this.getCategories();
    this.onCategoryChange();
  }

  public myForm: FormGroup = this.fb.group({
    category: ["", Validators.required]
  });

  getCategories(): void {

    this.mealsService.getCategories()
      .subscribe( categories => {
        this.categories = categories;
        console.log(this.categories);
    } );

  }

  onCategoryChange(): void {

    this.myForm.get("category")!.valueChanges
      .pipe(
        switchMap( category => this.mealsService.getMealsByCategory(category)),
      )
      .subscribe( meals => {

        this.meals = meals;
        console.log( this.meals );

      } )

  }

}
