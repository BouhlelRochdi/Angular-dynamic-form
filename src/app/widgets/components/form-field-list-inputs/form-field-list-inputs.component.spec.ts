import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldListInputsComponent } from './form-field-list-inputs.component';

describe('FormFieldListInputsComponent', () => {
  let component: FormFieldListInputsComponent;
  let fixture: ComponentFixture<FormFieldListInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormFieldListInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldListInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
