import { express, Express } from "express";
import cors from "cors";
import * as routes from "./routes";

class Application {
  express: Express;

  constructor() {
    this.express = express();
    this.middlewares();
    this.client();
    this.routes();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json({ limit: "5mb" }));
  }

  routes() {
    this.express.use(routes.user);
  }

  client() {
    this.express.get("/", (req, res) => {
      res.json({
        App: "desafioViitra",
        Status: "develop",
        Autor: "isaquetdiniz",
      });
    });
  }
}

const app = new Application().express;

export { app };
