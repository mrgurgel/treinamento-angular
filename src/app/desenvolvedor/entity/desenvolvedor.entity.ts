
export class Desenvolvedor {
  private _nome;
  private _cargo: string;
  especialidades: Array<string>;
  dataAdmissao: Date;

  constructor(
    nome: string,
    cargo: string,
    especialidades: Array<string>,
    dataAdmissao: Date,
    public sexo: number
  ) {
    this.nome = nome;
    this.cargo = cargo;
    this.especialidades = especialidades;
    this.dataAdmissao = dataAdmissao;
  }

  get nome() {
    return this._nome;
  }

  set nome(nome) {
    this._nome = nome;
  }

  get cargo() {
    return this._cargo;
  }

  set cargo(cargo) {
    this._cargo = cargo;
  }

  public getCargo(): string {
    return this.cargo;
  }

  public get tempoFoton(): number {
    return new Date().getTime() - this.dataAdmissao.getTime();
  }
}
