import fs from "node:fs";
import path from "node:path";
import { exec } from "node:child_process";


function ls(dir) {
  let files = fs.readdirSync(dir);
  return files;
}

function existFile(files, fileName) {
  let exist = false;
  files.forEach(file => {
    if (file === fileName) {
      exist = true;
    }
  });
  return exist;
}

function main() {
  let dir = "./";
  let fileName = "prueba.txt";
  const filePath = path.join(dir, fileName);

  let files = ls(dir);

  if (!existFile(files, fileName)) {
    exec("touch " + fileName, (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error}`);
        return;
      }
      //console.log(`stdout: ${stdout}`);
      //console.log(`stderr: ${stderr}`);
      console.log(`Archivo ${fileName} creado correctamente`)
    })
  } else {
    const content = fs.readFileSync(filePath, "UTF-8");

    console.log(content);
  }
}

main();
