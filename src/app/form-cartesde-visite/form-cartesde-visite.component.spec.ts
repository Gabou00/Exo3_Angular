import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCartesdeVisiteComponent } from './form-cartesde-visite.component';

describe('FormCartesdeVisiteComponent', () => {
  let component: FormCartesdeVisiteComponent;
  let fixture: ComponentFixture<FormCartesdeVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCartesdeVisiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCartesdeVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
