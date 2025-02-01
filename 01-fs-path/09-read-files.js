/*
 * Reading files with Node.js
*/

import fs from "node:fs";
//import fs from "node:fs/promises";
import path from "node:path";

const file = path.join("./", "data.txt");

fs.readFile(file, "utf8", (err, data) => {
  if (err) {
    console.log("Error leyendo el archivo: ", err)
    return;
  }
  console.log("Primer método: ", data);
})

// Método alternativo: Version Sincróna
try {
  const data = fs.readFileSync(file, "utf8");
  console.log("Segundo método: ", data);
} catch (err) {
  console.error(err);
}

// Tercer Método: Usando promesas -> Requiere fs/promises
async function example() {
  try {
    const data = await fs.readFile(file, { encoding: "utf8" });
    console.log("Tercer método: ", data);
  } catch (err) {
    console.log(err);
  }
}

example();
