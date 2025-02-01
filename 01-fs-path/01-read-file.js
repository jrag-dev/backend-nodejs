import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'example.txt');

console.log('1')

// Leer un archivo de texto
fs.readFile(filePath, 'utf-8', (err, data) => {
  console.log('2')
  if (err) {
    console.log('Error al leer el archivo: ', err);
    return;
  }
  console.log('Contenido del archivo: ', data);
  console.log('3')
})

console.log('4')
const content = "Estoy aprendiendo Nodejs, sus métodos básicos para despues aprender express js"

// Escribir en un archivo
fs.writeFile(filePath, content, 'utf-8', (err) => {
  console.log('5')
  if (err) {
    console.log('Error al escribir e el archivo:', err);
    return;
  }
  console.log('Archivo escrito exitosamente.')
  console.log('6')
})

console.log('7')

