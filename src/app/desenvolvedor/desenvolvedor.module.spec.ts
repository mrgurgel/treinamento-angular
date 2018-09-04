import { DesenvolvedorModule } from './desenvolvedor.module';

describe('DesenvolvedorModule', () => {
  let desenvolvedorModule: DesenvolvedorModule;

  beforeEach(() => {
    desenvolvedorModule = new DesenvolvedorModule();
  });

  it('should create an instance', () => {
    expect(desenvolvedorModule).toBeTruthy();
  });
});
