import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormBasicComponent } from '../../containers/dynamic-form-basic/dynamic-form-basic.component';
import { DynamicFieldDtoBase, FieldType } from '../../enums';

@Component({
  selector: 'app-form-field-list-inputs',
  standalone: true,
  imports: [CommonModule, DynamicFormBasicComponent, ReactiveFormsModule],
  templateUrl: './form-field-list-inputs.component.html',
  styleUrls: ['./form-field-list-inputs.component.scss']
})
export class FormFieldListInputsComponent {

  arrayForms: DynamicFieldDtoBase[][] = [];

  selectedOptions: any[] = [];
  @Input() parentForm!: FormGroup;
  private _field!: any;
  @Input('field')
  set field(ifield: any) {

    if (ifield) {
      console.log('ifield in form field list inputs: ', ifield);
      this._field = ifield;
      console.log('this._field affected: ', this._field);
      if (ifield.value) {
        console.log('ifield.value in form field list inputs: ', ifield.value);
        this.updateArrayForms(ifield);
        this.parentForm.controls[ifield.key].setValue(ifield?.value);
      } else {
        this.arrayForms = [this.toSubForm('')]
        console.log('this.arrayForm: ', this.arrayForms);
      }
    }
  }

  get field() {
    return this._field;
  }

  updateArrayForms(ifield: DynamicFieldDtoBase) {
    console.log('ifield.childFormFields: ', ifield.childFormFields);

    if (ifield.childFormFields) {
      this.arrayForms = this.field.value.map((e:any) => this.toSubForm(e, ifield.childFormFields))
    } else {
      this.arrayForms = this.field.value.map((e:any) => this.toSubForm(e))
    }
  }

  private toSubForm(value: any, subFormFields?: DynamicFieldDtoBase[]): DynamicFieldDtoBase[] {
    if (subFormFields && value) return subFormFields.map(elem => { return { ...elem, value: value[elem.key] } });
    else {
      const defaultField = {
        key: 'title',
        label: 'Title',
        required: 'false',
        controlType: { value: 'textbox' },
        value: value
      };
      return [defaultField];
    }
  }


  getSubFormData(data: any) {
    console.log('data in form field list inputs: ', data);
    
  }
}
