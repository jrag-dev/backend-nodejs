import fs from "node:fs";

/*
const data = fs.readFileSync("./logs.log", "UTF-8");
console.log(`Tamaño: ${data.length}`);
*/

let stream = fs.createReadStream("./logs.log", "UTF-8");

let data = "";

stream.once("data", () => {
  console.log("Iniciando el stream...\n")
})


stream.on("data", (chunk) => {
  console.log(`${chunk.length} |`);
  data += chunk;
})

stream.on("end", () => {
  console.log("Fin del stream...\n");
  console.log(data.length);
})
