import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'example.txt');

async function appendContentToFile(file, content) {
  try {
    await fs.appendFile(file, content, 'utf-8')
    const data = await fs.readFile(file, 'utf-8');

    console.log("Contenido del archivo: ", data);
  } catch (err) {
    console.log("Error al agregar contenido al archivo: ", err);
  }
}

appendContentToFile(filePath, "Nodejs lo voy a lograr este 2025")
