import { Component, Input, OnInit } from '@angular/core';
import { Meal } from '../../interfaces/meal.interface';

@Component({
  selector: 'meals-meal-cards',
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.css'
})
export class MealCardComponent implements OnInit{


  @Input()
  public meals?: Meal[];

  ngOnInit(): void {

    console.log(this.meals);

  }

}
