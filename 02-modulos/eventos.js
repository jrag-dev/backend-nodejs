import { Persona } from "./libs/persona.js";


let persona = new Persona("Bob");


persona.on('hablar', (mensaje) => {
  leerMensaje(mensaje, persona.nombre);
})

persona.emit('hablar', "Aprendiendo Node.js");


function leerMensaje(mensaje, nombre) {
  console.log(`${nombre} -> ${mensaje}`);
}
