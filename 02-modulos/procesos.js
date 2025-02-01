import { arch, argv, argv0, stdout, stdin } from "node:process";

// node procesos.js --name jose --edad 36 --job "backend developer"


// process.arch
console.log(`This processor architecture is ${arch}`)

// process.argv
console.log(argv)

argv.forEach((val, index) => {
  console.log(`${index}: ${val}`)
});

// process argv0
console.log(argv0)

// example

function param(p) {
  let index = process.argv.indexOf(p);
  console.log(index);
  return process.argv[index + 1];
}


const name = param("--name");
const edad = param("--edad");
const job = param("--job");

console.log("\nDatos del Empleado: ");
console.log("Nombre: ", name);
console.log("Edad: ", edad);
console.log("Puesto: ", job);

// process.stdout y process.stdin
console.log("\nstdin y stdout\n")

/*
let nombre;

stdout.write("Dime tú nombre: ");

stdin.on("data", function (data) {
  nombre = data.toString().trim();
  stdout.write(`Hola ${nombre}!! \n`)
  process.exit();
})

*/

// Otro ejemplo:
let preguntas = [
  "¿Cúal es tu nombre?",
  "¿Cuántos años tienes?",
  "¿Lenguaje de programación favorito?"
];

function pregunta(i) {
  process.stdout.write(preguntas[i]);
}

function leerRespuestas() {
  let promise = new Promise(resolve => {
    let respuestas = [];
    process.stdin.on("data", function (data) {
      respuestas.push(data.toString().trim());

      if (respuestas.length < preguntas.length) {
        pregunta(respuestas.length);
      } else {
        resolve(respuestas);
      }
    })
  })
  return promise;
}

async function main() {

  leerRespuestas()
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log("Error: ", err);
    })

}

main()

console.log("aprediendo nodejs")
