import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import util from "node:util";


const rl = createInterface({
  input: stdin,
  output: stdout,
})

let person = {
  name: "",
  comments: [],
}

rl.question("Cual es tú nombre? ", (answer) => {
  person["name"] = answer;

  rl.setPrompt("Dime un comentario: ")
  rl.prompt();
})

rl.on('line', (input) => {

  if (input.trim() === "salir") {
    let message = util.format("Te llamas %s y esto me dijistes: %j", person.name, person.comments);
    console.log(message);
    rl.close();
    return;
  }
  person.comments.push(input.trim());

  rl.setPrompt("Dime un comentario: ")
  rl.prompt();
})
