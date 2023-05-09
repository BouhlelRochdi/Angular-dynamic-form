import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldDtoBase } from '../../enums';

@Component({
  selector: 'app-form-field-date',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './form-field-date.component.html',
  styleUrls: ['./form-field-date.component.scss']
})
export class FormFieldDateComponent {

  minDate!: string;
  maxDate!: string;
  currentDate!: string;

  @Input() parentForm!: FormGroup;
  private _field!: any;
  @Input('field')
  set field(value: DynamicFieldDtoBase) {
    this._field = value;
    if (value) {

      // if(value?.options?.length > 0){
      //   this.minDate = value?.options[0]?.minDate;
      //   this.maxDate = value?.options[0]?.maxDate;
      //   this.currentDate = value?.options[0]?.value;
      // }
      // let options: any[] = value?.options[];
      value?.options?.forEach(element => {
        if (element.minDate) {
          this.minDate = new Date(element.minDate).toISOString().slice(0, 16);
        }
        if (element.maxDate) {
          this.maxDate = new Date(element.maxDate).toISOString().slice(0, 16);
        }
        if (element.value) {
          this.currentDate = new Date(element.value).toISOString().slice(0, 16);
        }
      });
    }
  }

  get field() {
    return this._field;
  }
}
