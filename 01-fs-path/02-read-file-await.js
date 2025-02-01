import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'example.txt');

async function handlerFile(file) {
  console.log('1')
  try {
    const data = await fs.readFile(file, 'utf-8');
    console.log('2');
    console.log('Contenido del archivo: ', data);
    console.log('3')
  } catch (err) {
    console.log('Error al leer el archivo: ', err);
  }

  console.log('4');

  const content = "Aprendiendo Typescript"

  try {
    console.log('5')
    await fs.writeFile(file, content, 'utf-8');
    console.log('6')
  } catch (err) {
    console.log('Error al escribir el archivo: ', err);
  }

  console.log('7')
}


handlerFile(filePath);
