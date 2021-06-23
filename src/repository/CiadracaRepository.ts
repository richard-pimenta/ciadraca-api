import { UserModel } from '../Models/User';
import mongoose = require('mongoose');
import { response } from 'express';

export class CiadracaRepository {

  constructor(){

  }
  async cadastroUsuario(
    nome: string,
    sobrenome: string,
    usuario: string,
    senha: string
  ) {
    const newUser={
      name: nome,
      lastname: sobrenome,
      username: usuario,
      password: senha
    }
    try {
      const user: any= await UserModel.create(newUser)
      return `usuario ${user.name} salvo`
    } catch (err) {

      console.log(err)
      return err

    }
  }
}
