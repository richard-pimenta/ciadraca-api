import { CiadracaRepository } from '../repository/index';

export class CiadracaService {
  private ciadracaRepository: CiadracaRepository = new CiadracaRepository();
  contructor() {}
  async registerUser(
    nome: string,
    sobrenome: string,
    usuario: string,
    senha: string,
    email:string
  ) {
    const ret = await this.ciadracaRepository.registerUser(
      nome,
      sobrenome,
      usuario,
      senha,
      email
    );
    
    return ret
  }


  async authenticationUser(username: string, password: string) {
    return this.ciadracaRepository.authenticationUser(username,password)
  }
}
