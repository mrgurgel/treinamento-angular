import { PaletaModule } from './paleta.module';

describe('PaletaModule', () => {
  let paletaModule: PaletaModule;

  beforeEach(() => {
    paletaModule = new PaletaModule();
  });

  it('should create an instance', () => {
    expect(paletaModule).toBeTruthy();
  });
});
