import fs from "node:fs";


const archivo = "file.txt";

/*
// validar si existe un archivo
if (fs.existsSync(archivo)) {
  console.log("El archivo existe")
} else {
  console.log("El archivo no existe")
}

// Otra forma de validar si un archivo existe
fs.access(archivo, fs.constants.F_OK, (err) => {
  if (err) {
    console.log("El archivo no existe")
  } else {
    console.log("El archivo si existe")
  }
})
*/


// Escribir en un archivo
const contenido = "Este es el contenido de mi readme.md"

/*
fs.writeFileSync(archivo, contenido);
console.log("Se ha escrito en el archivo")
*/

/*
// forma asíncrona
fs.writeFile(archivo, contenido, (err) => {
  if (err) {
    console.log("Error alm escribir el archivo")
  }
  console.log("Se escribio en el archivo")
})
*/

// Agregar contenido a un archivo

const texto = "Aprendiendo Node.js\n";

fs.appendFile(archivo, texto, (err) => {
  if (err) {
    console.log("Error")
  }
  console.log("Se adjunto mas información")
})
