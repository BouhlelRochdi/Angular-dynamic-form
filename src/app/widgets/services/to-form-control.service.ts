import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicFieldDtoBase } from '../enums';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class ToFormsControlService {


  toFormGroup(fields: DynamicFieldDtoBase[]) {
    const group: any = {};

    fields.forEach(field => {
      let validatorInput: any = this.addValidator(field.rules);
      console.log('validatorInput: ', validatorInput)
      group[field.key] = new FormControl(field.value, validatorInput)

    });
    return new FormGroup(group);
  }

  private addValidator(rules: any) {
    if (!rules) {
      return [];
    }

    const validators = Object.keys(rules).map((rule) => {

      switch (rule) {


        case "required":
          return Validators.required;
        case "min":
          return Validators.min(rules[rule]);
        case "max":
          return Validators.max(rules[rule]);
        case "email":
          return Validators.email(rules[rule]);
        case "minLength":
          return Validators.minLength(rules[rule]);
        case "maxLength":
          return Validators.maxLength(rules[rule]);
        default: return []
      }
    });
    return validators;
  }
}
