import { MongoClient } from "mongodb";


class DbClient {

  constructor() {
    const queryString = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_SERVER}/?retryWrites=true&w=majority&appName=${process.env.MONGODB_CLUSTER}`;
    this.client = new MongoClient(queryString);
    this.connectMongoDB();
  }

  async connectMongoDB() {
    try {
      await this.client.connect();
      this.db = this.client.db(process.env.MONGODB_DATABASE);
      console.log("Conectado al servidor de base de datos de Mongo.")
    } catch (err) {
      console.log(err);
    }
  }
}

export default new DbClient();