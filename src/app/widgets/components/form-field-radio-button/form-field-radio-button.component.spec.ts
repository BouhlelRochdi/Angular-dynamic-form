import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldRadioButtonComponent } from './form-field-radio-button.component';

describe('FormFieldRadioButtonComponent', () => {
  let component: FormFieldRadioButtonComponent;
  let fixture: ComponentFixture<FormFieldRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormFieldRadioButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
