import fs from "node:fs";

/*
// mkdir -> Forma sincróna
fs.mkdirSync('img');

// mkdir -> Forma asíncrona
fs.mkdir('css', (err) => {
  if (err) {
    throw new Error(`Error: ${err}`);
  }
  console.log('Directorio creado...')
})
*/

if (fs.existsSync('css')) {
  console.log("El directorio ya existe")
} else {
  fs.mkdir('css', (err) => {
    if (err) {
      console.log("Error al crear el directorio")
    }
    console.log("El directorio ha sido creado")
  })
}
