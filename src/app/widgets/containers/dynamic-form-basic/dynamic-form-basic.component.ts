import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldDtoBase } from '../../enums';
import { ToFormsControlService } from '../../services/to-form-control.service';
import { FormFieldsComponent } from '../../components/form-fields/form-fields.component';

@Component({
  selector: 'app-dynamic-form-basic',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormFieldsComponent],
  templateUrl: './dynamic-form-basic.component.html',
  styleUrls: ['./dynamic-form-basic.component.scss']
})
export class DynamicFormBasicComponent {

  @ViewChild('dForm', { static: false }) dForm!: NgForm;
  public form!: FormGroup;
  initialForm!: FormGroup;
  payLoad = '';

  @Input() submitLabel = 'Submit';
  @Input() formId = 'dynamic-form-id';
  protected _fields: any;
  @Input('fields')
  set fields(value: DynamicFieldDtoBase[]) {
    if (value) {
      this._fields = value;
      this.initForm();
    }
  }
  get fields() {
    return this._fields;
  }
  @Output() onSave = new EventEmitter<any>();
  @Output() onFormChange = new EventEmitter<any>();
  @Output() onFormValidation = new EventEmitter<boolean>();

  constructor(private toFormsControlService: ToFormsControlService) { }

  initForm() {
    this.form = this.toFormsControlService.toFormGroup(this.fields);
    this.initialForm = this.toFormsControlService.toFormGroup(this.fields);
    this.form.valueChanges.pipe()
      .subscribe((next) => {
        // console.log('next value is: ', next)
        this.onFormChange.emit(next);
        this.onFormValidation.emit(this.form.valid);
      });
      // console.log('initForm in dynamic basic form: ', this.form.value);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    this.onSave.emit(this.form.value);
  }
}
