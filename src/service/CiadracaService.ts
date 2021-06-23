import { CiadracaRepository } from '../repository/index';

export class CiadracaService {
  private ciadracaRepository:CiadracaRepository=new CiadracaRepository()
  contructor() {}
  async cadastrarUsuario(
    nome: string,
    sobrenome: string,
    usuario: string,
    senha: string
  ) {
    return this.ciadracaRepository.cadastroUsuario(nome,sobrenome,usuario,senha)
  }
}
