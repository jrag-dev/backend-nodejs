import readline from "node:readline";
import process from "node:process";


const rl = readline.emitKeypressEvents(process.stdin);

if (process.stdin.setRawMode != null) {
  process.stdin.setRawMode(true);
}

process.stdin.on("keypress", (str, key) => {
  if (key.name === "right") {
    console.log("tipeaste: ", key.name)
  } else if (key.name === "down") {
    console.log("presionaste: ", key.name)
  } else {
    console.log({ str, key });
  }
  process.exit();
})
