import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldCheckboxComponent } from './form-field-checkbox.component';

describe('FormFieldCheckboxComponent', () => {
  let component: FormFieldCheckboxComponent;
  let fixture: ComponentFixture<FormFieldCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormFieldCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
