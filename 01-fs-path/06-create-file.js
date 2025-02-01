#!/usr/bin/node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Crear un directorio

function createDirectory(dirname, name) {
  const dirPath = path.join(dirname, name);

  fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
      console.log("Error al crear el directorio: ", err);
      return;
    }
    console.log("Directorio creado correctamente.");
  })
}

// Leer un directorio

function readDirectory(dirname, name = null) {
  let dirPath;

  if (name !== null) {
    dirPath = path.join(dirname, name);
  } else {
    dirPath = dirname;
  }

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.log("Error al leer el directorio indicado: ", err);
      return;
    }
    console.log("Contendido del directorio: ", files);
    return files;
  })
}

// Renombraro mover un archivo

function renameOrMoveFile(dirname, oldNameFile, newNameFile) {
  const oldPath = path.join(dirname, oldNameFile);
  const newPath = path.join(dirname, newNameFile);

  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error("Error al renombrar el archivo: ", err);
      return;
    }
    console.log("Archivo renombrado correctamente.");
  })
}

// Comprobar si un archivo o directorio existe

function dirOrFileExist(dirname, name) {
  const fileNamePath = path.join(dirname, name);

  fs.access(fileNamePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.log("Error al Comprobar si el archivo/directorio existe: ", err);
      return;
    }
    console.log("El archivo si existe.");
  })
}


// Copiar un archivo

function copyFile(dirname, fileName, fileNameOfCopy) {
  const sourcePath = path.join(dirname, fileName);
  const destPath = path.join(dirname, fileNameOfCopy);

  fs.copyFile(sourcePath, destPath, (err) => {
    if (err) {
      console.error("Error al copiar el archivo: ", err);
      return;
    }
    console.log("Archivo copiado exitosamente.");
  })
}


// Leer un archivo de namera síncrona

function readFileSyncFn(dirname, nameFile) {
  const filePath = path.join(dirname, nameFile);
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    console.log("Contendido del file: ", data);
  } catch (err) {
    console.error("Error al leer el archivo de manera sincrona: ", err);

  }
}


createDirectory(__dirname, "prueba");

readDirectory(__dirname);

renameOrMoveFile(__dirname, "example.txt", "data.txt");

readDirectory(__dirname, "prueba")

readDirectory(__dirname);

copyFile(__dirname, "poema.txt", "poema_copy.txt");

dirOrFileExist(__dirname, "package.json");

readFileSyncFn(__dirname, "poema_copy.txt");

