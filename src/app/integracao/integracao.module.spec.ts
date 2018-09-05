import { IntegracaoModule } from './integracao.module';

describe('IntegracaoModule', () => {
  let integracaoModule: IntegracaoModule;

  beforeEach(() => {
    integracaoModule = new IntegracaoModule();
  });

  it('should create an instance', () => {
    expect(integracaoModule).toBeTruthy();
  });
});
