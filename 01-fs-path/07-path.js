import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "data.txt");

const notes = "/users/jose/notes.txt";

function print(message) {
  console.log(message);
}

print(path.dirname(notes));
print(path.basename(notes));
print(path.extname(notes));

print(path.dirname(filePath));
print(path.basename(filePath));
print(path.extname(filePath));

// Podemos obtener el nombre del archivo sin extensión:
const fileName = path.basename(filePath, path.extname(filePath));
console.log(fileName);


// Trabajando con paths
const name = "jose";
const appPath = path.join("/", "users", name, "app.ts");

console.log("App Path: ", appPath);

// Podemos obtener el path absoluto desde el path relativo usando:
// Node.js simplemente le añade /jose.ts al directorio de trabajo actual.
const appPathAbsoluto = path.resolve("jose.ts");
console.log(appPathAbsoluto);


// Si el primer parámetro comienza con /, entonces este es un path absoluto
print(path.resolve("/etc", "jose.txt"));

// Para calcular el path actual, cuando este contiene especificadores relativos como . o .. o //
// usamos path.normalize();

print(path.normalize("/users/jose/..//test.txt"));

