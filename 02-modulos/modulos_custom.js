import { Persona } from "./libs/persona.js";


let jose = new Persona("Jose Alvarado");

jose.on('event', (lenguajes) => {
  console.log(lenguajes);
})


jose.emit("event", ["python", "Rust", "TypeScript"]);
