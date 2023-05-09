import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldDtoBase } from '../../enums';

@Component({
  selector: 'app-form-field-files',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-field-files.component.html',
  styleUrls: ['./form-field-files.component.scss']
})
export class FormFieldFilesComponent {

  @Input() parentForm!: FormGroup;
  @Input('field') field!: DynamicFieldDtoBase;
  @Output() uploadFile = new EventEmitter<any>();

  oneInputChange(event: any) {
    let formData:FormData = new FormData
    formData.append('file', event.target.files[0]);
    this.uploadFile.emit(formData);
  }
}
