import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'meals-select-category',
  templateUrl: './select-category.component.html',
  styleUrl: './select-category.component.css'
})
export class SelectCategoryComponent {

  constructor( private fb: FormBuilder ) {}

  public myForm: FormGroup = this.fb.group({
    category: ["", Validators.required]
  });

}
