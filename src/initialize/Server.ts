import "reflect-metadata"
import * as express from "express";
import { createExpressServer } from "routing-controllers";
import { server } from "../configs/Index";
import { CiadracaController } from "../controllers/CiadracaController";
import bodyParser from "body-parser";


export class Server {
  private app: express.Application;

  init(): void {
    this.app = createExpressServer({
      routePrefix: 'api',
      controllers: [CiadracaController]
    })
    console.log("Server Configurado");
  }
  start(): void {
    this.app.listen(server.port, () => {
      console.log("server running at port " + server.port);
    })
  }
}

