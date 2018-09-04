import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSexoComponent } from './select-sexo.component';

describe('SelectSexoComponent', () => {
  let component: SelectSexoComponent;
  let fixture: ComponentFixture<SelectSexoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSexoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
