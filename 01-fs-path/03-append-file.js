import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'example.txt');

function addContentToFile(file, content) {
  fs.appendFile(file, content, 'utf-8', (err) => {
    if (err) {
      console.log('Error al agregar contenido adicional al archivo.');
      return;
    }
    console.log("Contenido agregado exitosamente.")
  })
}

function readContentFromFile(file) {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      console.log("Error al leer el archivo: ", err);
      return;
    }
    console.log("Contenido del archivo: ", data);
  })
}


addContentToFile(filePath, 'Tambien estoy aprendiendo Python');
readContentFromFile(filePath);
