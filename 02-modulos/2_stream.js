import fs from "node:fs";
import { stdin, stdout } from "node:process";
import readline from "node:readline";


let i = readline.createInterface({
  input: stdin,
  output: stdout,
})

i.question("Cuál es tu nombre? > ", (nombre) => {

  fs.writeFileSync(`./${nombre}.txt`, `Esto dijo ${nombre}`);
  stdout.write("Qué quieres decir? \n");

  i.on("line", (dicho) => {
    if (dicho.trim() == "salir") {
      i.close();
    } else {
      fs.appendFileSync(`./${nombre}.txt`, dicho.trim() + "\n");
    }
  })
})
