import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosDesenvolvedorComponent } from './dados-desenvolvedor.component';

describe('DadosDesenvolvedorComponent', () => {
  let component: DadosDesenvolvedorComponent;
  let fixture: ComponentFixture<DadosDesenvolvedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosDesenvolvedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosDesenvolvedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
