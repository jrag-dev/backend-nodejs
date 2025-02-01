import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'file.txt');

function deleteFile(file) {
  fs.unlink(file, (err) => {
    if (err) {
      console.log("Error al eliminar el archivo: ", err);
      return;
    }
    console.log("Archivo eliminado correctamente.");
  })
}


deleteFile(filePath);
