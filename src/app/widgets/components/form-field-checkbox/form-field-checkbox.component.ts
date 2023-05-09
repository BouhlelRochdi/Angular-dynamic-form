import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldDtoBase } from '../../enums';

@Component({
  selector: 'app-form-field-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './form-field-checkbox.component.html',
  styleUrls: ['./form-field-checkbox.component.scss']
})
export class FormFieldCheckboxComponent {

  selectedOptions: any[] = [];
  @Input() parentForm!: FormGroup;
  private _field!: any;
  @Input('field')
  set field(value: DynamicFieldDtoBase) {
    this._field = value;
  }

  get field() {
    return this._field;
  }

  onCheckboxChange(event: any) {
    if (event.target.checked) {
      this.selectedOptions.push(event.target.value);
    } else {
      const index = this.selectedOptions.indexOf(event.target.value);
      this.selectedOptions.splice(index, 1);
    }
    this.parentForm.controls[this.field.key].patchValue(this.selectedOptions);
  }
}
