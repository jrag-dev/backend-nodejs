import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import pkg from "../package.json" assert { type: 'json' };
import "dotenv/config";

import "./config/db.js";

import productRoutes from "./routes/products.routes.js";


class App {

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(morgan('tiny'));
    this.app.use(helmet());
    this.app.use(cors());
    this.app.set('pkg', pkg)
  }

  routes() {
    this.app.get('/api/v1', (req, res) => {
      res.json({
        name: this.app.get('pkg').name,
        author: this.app.get('pkg').author,
        description: this.app.get('pkg').description,
        version: this.app.get('pkg').version,
      })
    })
    this.app.use('/api/v1/products', productRoutes )
  }
}

export default new App().app;