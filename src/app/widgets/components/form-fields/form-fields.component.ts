import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldDtoBase } from '../../enums';
import { FormFieldDropdownComponent } from '../form-field-dropdown/form-field-dropdown.component';
import { FormFieldFilesComponent } from '../form-field-files/form-field-files.component';
import { FormFieldDateComponent } from '../form-field-date/form-field-date.component';
import { FormFieldCheckboxComponent } from '../form-field-checkbox/form-field-checkbox.component';
import { FormFieldRadioButtonComponent } from '../form-field-radio-button/form-field-radio-button.component';

@Component({
  selector: 'app-form-fields',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    FormFieldDropdownComponent, 
    FormFieldFilesComponent, 
    FormFieldDateComponent,
    FormFieldCheckboxComponent,
    FormFieldRadioButtonComponent
  ],
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss']
})
export class FormFieldsComponent implements OnChanges {

  errorMessage: string = '';
  private _field: any;
  @Input('field')
  set field(value: DynamicFieldDtoBase) {
    this._field = value;
  }
  get field() {
    return this._field;
  }

  @Input() form!: FormGroup;
  get isValid() {
    return this.form.controls[this.field.key].valid;
  }
  @Output() changeValueForm = new EventEmitter<any>();
  initForm!: FormGroup;

  submit() {
    console.log('submitting form in form fields component: ', this.initForm);
  }

  ngOnChanges(changes: any) {
    let error = this.form?.controls[this.field.key]?.errors as object;
    if (error) {
      let keys: any = Object.keys(error);
      let value: any = Object.values(error);
      keys.forEach((element: any) => {
        switch (element) {
          case 'required':
            return this.errorMessage = 'This field is required';
          case 'email':
            return this.errorMessage = 'input is not a valid email';
          case 'minlength':
            return this.errorMessage = `min length is ${value[0]['requiredLength']}`;
          case 'maxlength':
            return this.errorMessage = `max length is ${value[0]['requiredLength']}`;
          case 'min':
            return this.errorMessage = `minimum ${value[0]['min']}`;
          case 'max':
            return this.errorMessage = `maximum ${value[0]['max']}`;
          case 'maxlength':
            return this.errorMessage = `max length is ${value[0]['requiredLength']}`;
          default:
            return this.errorMessage = '';
        }
      });
    }
  }
}
