import imagemin from "imagemin";
import imageminGifsicle from "imagemin-gifsicle";
import imageminJpegtran from "imagemin-jpegtran";
import imageminSvgo from "imagemin-svgo";
import imageminWebp from "imagemin-webp";
import imageminPngquant from "imagemin-pngquant"

import sharp from "sharp";
import fse from "fs-extra"
import { fileURLToPath } from "node:url"
import path from "node:path";
import { readdirSync } from "node:fs";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const inputFolder = path.join(__dirname, "src");
const outputFolder = path.join(__dirname, "opt");
let targetWidth = 1920;


const processImg = async () => {
  const files = await fse.readdir(inputFolder);

  for (const file of files) {
    let inputPath = path.join(inputFolder, file);
    let outputPath = path.join(outputFolder, file);

    await sharp(inputPath)
      .resize(targetWidth)
      .toFile(outputPath);

    await imagemin([outputPath], {
      destination: outputFolder,
      plugins: [
        imageminJpegtran({ quality: 80 }),
        imageminGifsicle(),
        imageminSvgo(),
        imageminWebp({ quality: 80 }),
        imageminPngquant({ quality: [0.6, 0.8]})
      ]
    })
  }
  detailsOfImg(outputFolder);
}

const detailsOfImg = (dir) => {
  const files = readdirSync(dir);
  files.forEach( file => {
    let filePath = path.join(dir, file);
    sharp(filePath)
      .metadata()
      .then(metadata => {
        // Obtener el tamaño en bytes
        const sizeInBytes = metadata.size;

        // Convertir a KB y MB
        const sizeInKB = (sizeInBytes / 1024).toFixed(2); // 1 KB = 1024 bytes
        const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2); // 1 MB = 1024 * 1024 bytes
        console.log('\nDetalles de la imagen: ', file);
        console.log(`- Formato: ${metadata.format}`);
        console.log(`- Ancho: ${metadata.width}px`);
        console.log(`- Alto: ${metadata.height}px`);
        console.log(`- Tamaño: ${metadata.size} bytes`);
        console.log(`- Espacio de color: ${metadata.space}`);
        console.log(`- Canales: ${metadata.channels}`);
        console.log(`- Densidad: ${metadata.density} PPI`);
        console.log(`- Tamaño en bytes: ${sizeInBytes} bytes`);
        console.log(`- Tamaño en KB: ${sizeInKB} KB`);
        console.log(`- Tamaño en MB: ${sizeInMB} MB`);
      })
      .catch(err => {
        console.error('Error al leer la imagen:', err);
      })
  })
}

detailsOfImg(inputFolder);
processImg();