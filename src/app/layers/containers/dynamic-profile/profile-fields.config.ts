import { DynamicFieldDtoBase, FieldType } from "src/app/widgets/enums";


export const PROFILE_FORM_FIELDS: DynamicFieldDtoBase[] = [
    {
        key: 'name',
        label: 'Name',
        controlType: { value: FieldType.textbox },
        // rules: {
        //     required: true,
        //     minLength: 4
        // }
    },
    {
        key: 'lastname',
        label: 'LastName',
        controlType: { value: FieldType.textbox },
        // rules: {
        //     required: true,
        //     minLength: 4,
        // }
    },
    {
        key: 'password',
        label: 'Password',
        controlType: { value: FieldType.textbox },
        type: 'password',
        // rules: {
        //     required: true,
        //     minLength: 6,
        //     maxLength: 6
        // }
    },
    {
        key: 'technologies',
        label: 'Technologies',
        controlType: { value: FieldType.dropdown },
        // rules: {
        //     required: false,
        // },
        options: [{ value: 'Angular' }, { value: 'NestJs' }, { value: 'MongoDB' }, { value: 'kubernetes' }]
    },
    {
        key: 'age',
        label: 'Age',
        controlType: { value: FieldType.numberbox },
        type: 'number',
        // rules: {
        //     required: false,
        //     max: 100,
        //     min: 18
        // }
    },
    {
        key: 'file',
        label: 'Profile Photo',
        controlType: { value: FieldType.file },
        type: 'file',
        // rules: {
        //     required: true,
        // }
    },
    {
        key: 'email',
        label: 'email',
        controlType: { value: FieldType.textbox },
        type: 'email',
        // rules: {
        //     required: true,
        //     email: 'email'
        // }
    },
    {
        key: 'startDate',
        label: 'startdate',
        controlType: { value: FieldType.datepicker },
        type: 'date',
        value: Date.now(),
        options: [{ minDate: new Date('2020-01-01'), maxDate: new Date('2020-12-31'), value: Date.now() }],
        rules: {
            required: true,
        }
    },
    {
        key: 'skills',
        label: 'Skills',
        controlType: { value: FieldType.checkbox },
        type: 'checkbox',
        options: [{ name: 'Angular', value: 'Angular' }, { name: 'NestJs', value: 'NestJs' }, { name: 'MongoDB', value: 'MongoDB' }, { name: 'kubernetes', value: 'kubernetes' }, { name: 'Docker', value: 'Docker' }, { name: 'AWS', value: 'AWS' }, ],
        // rules: {
        //     required: true,
        // }
    }
];