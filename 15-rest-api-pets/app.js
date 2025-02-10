import express from "express";
import cors from "cors";
import helmet from "helmet";
import "dotenv/config";

import mascotaRouter from "./routes/mascotas.route.js";
import usuariosRouter from "./routes/usuarios.route.js";
import dbClient from "./config/dbClient.js";


const app = express();



app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/pets", mascotaRouter)
app.use("/users", usuariosRouter)


try {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
  }) 
} catch (err) {
  console.log(err)
}

process.on("SIGINT", async () => {
  dbClient.cerrarConexion();
  process.exit(0);
})