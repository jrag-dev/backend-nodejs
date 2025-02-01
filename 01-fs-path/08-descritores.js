/*
 * Working with file descriptors in Node.js
*/

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "data.txt");


fs.open(filePath, "r", (err, fd) => {
  if (err) {
    console.log("Error al tratar de abrir el archivo: ", err);
    return;
  }
  console.log(fd)
})
