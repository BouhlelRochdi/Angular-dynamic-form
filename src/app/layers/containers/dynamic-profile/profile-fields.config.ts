import { DynamicFieldDtoBase, FieldType } from "src/app/widgets/enums";


export const PROFILE_FORM_FIELDS: DynamicFieldDtoBase[] = [
    {
        key: 'name',
        label: 'Name',
        controlType: { value: FieldType.textbox },
        rules: {
            required: true,
            minLength: 4,
            maxLength: 10
        }
    },
    {
        key: 'lastname',
        label: 'LastName',
        controlType: { value: FieldType.textbox },
        rules: {
            required: true,
            minLength: 4,
        }
    }, 
    {
        key: 'password',
        label: 'Password',
        controlType: { value: FieldType.textbox },
        type: 'password',
        rules: {
            required: true,
            minLength: 4,
            maxLength: 10
        }
    },
    {
        key: 'technologies',
        label: 'Technologies',
        controlType: { value: FieldType.dropdown },
        rules: {
            required: false,
        },
        options: [{ value: 'Angular' }, { value: 'NestJs' }, { value: 'MongoDB' }, { value: 'kubernetes' }]
    }, 

    {
        key: 'age',
        label: 'Age',
        controlType: { value: FieldType.numberbox },
        type: 'number',
        rules: {
            required: false,
            max: 100,
            min: 18
        }
    }, 
    // {
    //     key: 'description',
    //     label: 'Description',
    //     controlType: { value: FieldType.textbox },
    //     rules: {
    //         required: true,
    //         minLength: 4,
    //         maxLength: 10,
    //     }
    // },

    // *******************************************************************************************
    {
        key: 'email',
        label: 'Email',
        controlType: { value: FieldType.textbox }
    },
    //   {
    //     key: 'gendre',
    //     label: 'Gender',
    //     required: 'true',
    //     controlType: { value: FieldType.radiobuttons }
    //   },
    //   {
    //     key: 'conditions',
    //     label: 'Conditions générales',
    //     required: 'true',
    //     controlType: { value: FieldType.checkbox }
    //   },
    //   {
    //     key: 'role',
    //     label: 'Role',
    //     required: 'true',
    //     controlType: { value: FieldType.dropdown }
    //   }
];