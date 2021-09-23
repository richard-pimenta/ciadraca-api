import {
  BodyParam,
  Get,
  JsonController,
  Post,
  UseBefore,
  Req,
} from 'routing-controllers';
import { Request } from 'express'
import { CiadracaService } from '../service/Index';
import {TokenDecoder} from "../middlewares"
import { UserSchemaInterface } from '../interfaces/index';
@JsonController()
export class CiadracaController {

  private ciadracaService: CiadracaService = new CiadracaService();

  constructor() {}

  @Post('/ciadraca/register')
  async registerUser(
    @BodyParam('name') name: string,
    @BodyParam('lastname') lastname: string,
    @BodyParam('username') username: string,
    @BodyParam('password') password: string,
    @BodyParam('email') email:string
   ): Promise<any> {
    const ret = await this.ciadracaService.registerUser(
      name,
      lastname,
      username,
      password,
      email
    );
    JSON.stringify(ret)
    console.log(ret)
    return JSON.parse(JSON.stringify(ret))
  }

  @Get('/ciadraca/auth')
  async authenticationUser(
    @BodyParam('username') username: string,
    @BodyParam('password') password: string
  ): Promise<any> {
    console.log(username, password)
    return  await this.ciadracaService.authenticationUser(username,password)
  }

  @Get("/ciadraca/teste")
  @UseBefore(TokenDecoder)
  async teste(
    @Req() req: Request | any
  ){
    console.log(req.userId)
    return {ok:true, user:req.userId}
  }
}
