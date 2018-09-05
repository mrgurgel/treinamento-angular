import { TestBed, inject } from '@angular/core/testing';

import { DesenvolvedorService } from './desenvolvedor.service';

describe('DesenvolvedorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesenvolvedorService]
    });
  });

  it('should be created', inject([DesenvolvedorService], (service: DesenvolvedorService) => {
    expect(service).toBeTruthy();
  }));
});
