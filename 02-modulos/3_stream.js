import fs from "node:fs";
import { stdin, stdout } from "node:process";
import readline from "node:readline";


let i = readline.createInterface({
  input: stdin,
  output: stdout,
})

i.question("Cuál es tu nombre? > ", (nombre) => {

  let stream = fs.createWriteStream(`./${nombre}.txt`);
  stream.write(`Esto dijo ${nombre} \n`);
  stdout.write("Qué quieres decir? \n");

  i.on("line", (dicho) => {
    if (dicho.trim() == "salir") {
      stream.close();
      i.close();
    } else {
      stream.white(dicho.trim() + "\n");
    }
  })
})
