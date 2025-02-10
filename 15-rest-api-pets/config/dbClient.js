import mongoose from "mongoose";


class DbClientMongoose {

  constructor() {
    this.conectarBaseDatos();
  }

  async conectarBaseDatos() {
    const queryString = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_SERVER}/adopcion?retryWrites=true&w=majority`;
    await mongoose.connect(queryString);
    console.log("Conectado a la base de datos MongoDB")
  }

  async cerrarConexion() {
    try {
      await mongoose.disconnect()
      console.log("Conexión a la base de datos cerrada.")
    } catch (err) {
      console.log("Error al cerrar la conexión: ", err);
    }
  }
}

export default new DbClientMongoose();