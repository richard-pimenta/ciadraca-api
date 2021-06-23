import {
  BodyParam,
  Get,
  JsonController,
  Param,
  Post,
} from 'routing-controllers';
import { CiadracaService } from '../service/Index';

@JsonController()
export class CiadracaController {
  private ciadracaService: CiadracaService = new CiadracaService();
  constructor() {}
  @Post('/ciadraca/register')
  async registerUser(
    @BodyParam('name') name: string,
    @BodyParam('lastname') lastname: string,
    @BodyParam('username') username: string,
    @BodyParam('password') password: string
  ): Promise<any> {

    return this.ciadracaService.cadastrarUsuario(name,lastname,username,password)
  }

  @Get("/ciadraca/hello/:id")
  async BuscarHello(@Param('id') id:number): Promise<String>{
    return `Hello ${id}`
  }
}

