import { Component, Input, OnChanges, OnInit, Pipe, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldDtoBase } from '../../enums';
import { FormFieldDropdownComponent } from '../form-field-dropdown/form-field-dropdown.component';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-form-fields',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormFieldDropdownComponent],
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss']
})
export class FormFieldsComponent implements OnInit, OnChanges {

  errorMessage: string = '';
  errorMsg: BehaviorSubject<string> = new BehaviorSubject<string>('');
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

  initForm!: FormGroup;

  submit() {
    console.log('submitting form in form fields component: ', this.initForm);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    let error = this.form?.controls[this.field.key]?.errors as object;
    if (error) {
      let keys: any = Object.keys(error);
      let value: any = Object.values(error);
      keys.forEach((element: any) => {
        switch (element) {
          case 'required':
            return this.errorMessage = 'This field is required';
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
