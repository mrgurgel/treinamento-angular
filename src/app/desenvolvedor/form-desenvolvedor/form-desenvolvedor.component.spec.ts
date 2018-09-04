import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDesenvolvedorComponent } from './form-desenvolvedor.component';

describe('FormDesenvolvedorComponent', () => {
  let component: FormDesenvolvedorComponent;
  let fixture: ComponentFixture<FormDesenvolvedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDesenvolvedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDesenvolvedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
