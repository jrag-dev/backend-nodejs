import { EventEmitter } from "node:events";
import util from "node:util";


let Persona = function (nombre) {
  this.nombre = nombre;
}

util.inherits(Persona, EventEmitter);

export {
  Persona
}
