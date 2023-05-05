import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFieldDtoBase, OptionOfFieldDtoBase } from '../../enums';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-field-dropdown',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './form-field-dropdown.component.html',
  styleUrls: ['./form-field-dropdown.component.scss']
})
export class FormFieldDropdownComponent {

  @Input() parentForm!: FormGroup;
  @Input('field') field!: DynamicFieldDtoBase;


  oneInputChange(event: any) {
    console.log('selected option: ', event.target.value);
  }
}
