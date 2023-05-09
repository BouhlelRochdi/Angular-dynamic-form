import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldDtoBase } from '../../enums';

@Component({
  selector: 'app-form-field-radio-button',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-field-radio-button.component.html',
  styleUrls: ['./form-field-radio-button.component.scss']
})
export class FormFieldRadioButtonComponent {

  
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
      this.parentForm.controls[this.field.key].patchValue(event.target.value);
    }
  }
  
}
