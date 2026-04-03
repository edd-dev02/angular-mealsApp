import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MealsService } from '../../services/meals.service';
import { Category } from '../../interfaces/categories.interface';

@Component({
  selector: 'meals-select-category',
  templateUrl: './select-category.component.html',
  styleUrl: './select-category.component.css'
})
export class SelectCategoryComponent implements OnInit{

  public categories: Category[] = [];

  constructor( private fb: FormBuilder, private mealsService: MealsService ) {}

  ngOnInit(): void {

    this.getCategories();

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

}
