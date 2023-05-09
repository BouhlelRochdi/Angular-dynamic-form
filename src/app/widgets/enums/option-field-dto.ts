

export interface OptionOfFieldDtoBase {
    key?: string;
    value: any;
    name?: string;
    props?: any;//has value for example

    minDate?: Date;
    maxDate?: Date;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    pattern?: string;
}
