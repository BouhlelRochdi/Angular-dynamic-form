import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormBasicComponent } from 'src/app/widgets/containers/dynamic-form-basic/dynamic-form-basic.component';
import { PROFILE_FORM_FIELDS } from './profile-fields.config';

@Component({
  selector: 'app-dynamic-profile',
  standalone: true,
  imports: [CommonModule, DynamicFormBasicComponent],
  templateUrl: './dynamic-profile.component.html',
  styleUrls: ['./dynamic-profile.component.scss']
})
export class DunamicProfileComponent {

  profileFields = PROFILE_FORM_FIELDS;


  saveProfile(data: any) {
    console.log('data in profile component: ', data);
    // this.updateProfile.emit(data);
    // data.entries
  }

  // onFormChange(event: any) {   
  //   console.log('data in profile component: ', event.target.value);
  // }

}
