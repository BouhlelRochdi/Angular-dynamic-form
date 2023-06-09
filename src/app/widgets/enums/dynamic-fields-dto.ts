import { OptionOfFieldDtoBase } from "./option-field-dto";




export interface DynamicFieldDtoBase {
  id?: string;
  value?: any;
  key: string;
  label?: string;
  required?: string;
  controlType: OptionOfFieldDtoBase;

  // display props
  type?: string;
  order?: number;
  isDisable?: string;
  isHide?: string;
  placeholder?: string;
  options?: OptionOfFieldDtoBase[];
  childFormFields?: DynamicFieldDtoBase[];
  rules?: {
    required?: boolean,
    email?: string,
    minLength?: number,
    maxLength?: number,
    min?: number,
    max?: number,
    pattern?: string,
  }
}