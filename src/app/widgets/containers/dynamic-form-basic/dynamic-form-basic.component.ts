import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldDtoBase } from '../../enums';
import { ToFormsControlService } from '../../services/to-form-control.service';
import { FormFieldsComponent } from '../../components/form-fields/form-fields.component';
import { FormFieldListInputsComponent } from '../../components/form-field-list-inputs/form-field-list-inputs.component';

@Component({
  selector: 'app-dynamic-form-basic',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormFieldsComponent, FormFieldListInputsComponent],
  templateUrl: './dynamic-form-basic.component.html',
  styleUrls: ['./dynamic-form-basic.component.scss']
})
export class DynamicFormBasicComponent {

  @ViewChild('dForm', { static: false }) dForm!: NgForm;
  @ContentChild('fieldItemTemplate', { read: TemplateRef, static: false }) fieldItemTempl!: TemplateRef<any>;

  public form!: FormGroup;
  payLoad = '';
  formData: FormData = new FormData();
  isFormData: boolean = false;

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

  constructor(private toFormsControlService: ToFormsControlService) {     
  }

  initForm() {
    this.form = this.toFormsControlService.toFormGroup(this.fields);
    this.form.valueChanges.pipe()
      .subscribe((next) => {
        this.onFormChange.emit(next);
        this.onFormValidation.emit(this.form.valid);
        console.log('form valueChanges ', next);
        
      });
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    if (this.formData.has('file')) {
      for (const [key, val] of Object.entries(this.form.value)) {
        console.log(`==> ${key}: ${val}`);
      }
      this.onSave.emit(this.formData);
    }
    else this.onSave.emit(this.form.value);
  }
}
