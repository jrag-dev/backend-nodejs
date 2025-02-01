import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// renombrar síncrono

const oldPath = path.join(__dirname, "archivo.txt");
const newPath = path.join(__dirname, "data.txt");

fs.renameSync(oldPath, newPath)

// renombrar asíncrono

const oldPathFile = path.join(__dirname, "file.dat");
const newPathFile = path.join(__dirname, "file.txt");

fs.rename(oldPathFile, newPathFile, (err) => {
  if (err) {
    console.log("Error al renombrar el directorio")
    return;
  }
  console.log("Se renombro el directorio")
})

// mover archivo

const oldPathFileMove = path.join(__dirname, "test.txt");
const newPathFileMove = path.join(__dirname, "./css/", "main.css");

fs.rename(oldPathFileMove, newPathFileMove, (err) => {
  if (err) {
    console.log("Error al renombrar el directorio")
    return;
  }
  console.log("Se renombro el directorio")
})

// eliminar archivo
const file = path.join(__dirname, "./css/main.css");

if (fs.existsSync(file)) {
  fs.unlinkSync(file);
  console.log("Archivo eliminado correctamente")
} else {
  console.log("El archivo: ", file, " no existe")
}
