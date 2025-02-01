import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// eliminar archivo
const file = path.join(__dirname, "./css/main.css");

if (fs.existsSync(file)) {
  fs.unlinkSync(file);
  console.log("Archivo eliminado correctamente")
} else {
  console.log("El archivo: ", file, " no existe")
}
