import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaValoresComponent } from './lista-valores.component';

describe('ListaValoresComponent', () => {
  let component: ListaValoresComponent;
  let fixture: ComponentFixture<ListaValoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaValoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
