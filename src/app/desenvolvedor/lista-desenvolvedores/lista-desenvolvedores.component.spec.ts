import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDesenvolvedoresComponent } from './lista-desenvolvedores.component';

describe('ListaDesenvolvedoresComponent', () => {
  let component: ListaDesenvolvedoresComponent;
  let fixture: ComponentFixture<ListaDesenvolvedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDesenvolvedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDesenvolvedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
