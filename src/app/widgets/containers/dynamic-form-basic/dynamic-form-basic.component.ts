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

  constructor(private toFormsControlService: ToFormsControlService) { }

  initForm() {
    this.form = this.toFormsControlService.toFormGroup(this.fields);
    this.form.valueChanges.pipe()
      .subscribe((next) => {
        this.onFormChange.emit(next);
        this.onFormValidation.emit(this.form.valid);
      });
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    // if(this.form.hasOwnProperty('files')){
      // for (const [key, val] of Object.entries(this.form.value)) {
      //   console.log(`${key}: ${val}`);
      //   // this.formData.append(key, val);
      // }
    // }
    for (const pair of this.formData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
    this.onSave.emit(this.form.value);
  }

  changeValueForm(event: any){
    console.log('event: ', event.target.files[0]);
    
    if(event.target.id == 'file'){
      this.formData = new FormData();
      this.formData.append('file', event.target.files[0]);
      console.log('formData: ', this.formData);
      this.form.controls['file'].setValue(event.target.files[0]);
      // this.form?.get('file')?.setValue(event.target.files[0]); 
    }
    

  }
}
