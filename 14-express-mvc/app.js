import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import taskRouter from "./routes/task.route.js";
import { error404 } from "./controllers/error.controller.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
const port = process.env.PORT || 3001;

// configurations
app.set('view engine', 'pug');
app.set("views", join(__dirname, "views"));

// middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "public")));

// rutas
app.use("/tasks", taskRouter);

// manejo de errores
app.use(error404)


app.listen(port, () => {
  console.log(`Servidor corriendo por el puerto: ${port}`);
})