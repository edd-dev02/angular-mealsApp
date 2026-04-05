import { Component, Inject } from '@angular/core';
import { MealDetailModel } from '../../interfaces/meal-detail.interface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'meals-detail-meal-dialog',
  templateUrl: './detail-meal-dialog.component.html',
  styleUrl: './detail-meal-dialog.component.css'
})
export class DetailMealDialogComponent {

  constructor( @Inject(MAT_DIALOG_DATA) public data: MealDetailModel ) {}

}
