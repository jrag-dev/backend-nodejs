import readline from "node:readline";

// Configurar la entrada y salida
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

// Configurar el modo raw para capturar teclas directamente
process.stdin.setRawMode(true);

// Buffer del archivo (contenido del archivo en memoria)
let fileBuffer = [
  "Línea 1: Hola, este es un editor.",
  "Línea 2: Puedes moverte con las flechas.",
  "Línea 3: ¡Edita aquí!",
];
let cursorX = 0;
let cursorY = 0;

// Renderizar el archivo en la terminal
function render() {
  console.clear();
  fileBuffer.forEach((line, index) => {
    if (index === cursorY) {
      // Resaltar la línea actual
      process.stdout.write(line.slice(0, cursorX) + "\x1b[7m" + (line[cursorX] || " ") + "\x1b[0m" + line.slice(cursorX + 1) + "\n");
    } else {
      process.stdout.write(line + "\n");
    }
  });
  process.stdout.write(`\nPosición: (${cursorX}, ${cursorY})`);
}

// Manejar la entrada del teclado
process.stdin.on('data', (key) => {
  if (key === '\u0003') { // Ctrl+C para salir
    process.exit();
  }

  switch (key) {
    case '\x1B[A': // Flecha arriba
      cursorY = Math.max(0, cursorY - 1);
      break;
    case '\x1B[B': // Flecha abajo
      cursorY = Math.min(fileBuffer.length - 1, cursorY + 1);
      break;
    case '\x1B[C': // Flecha derecha
      cursorX = Math.min(fileBuffer[cursorY].length, cursorX + 1);
      break;
    case '\x1B[D': // Flecha izquierda
      cursorX = Math.max(0, cursorX - 1);
      break;
    case '\x7F': // Retroceso (Backspace)
      if (cursorX > 0) {
        fileBuffer[cursorY] = fileBuffer[cursorY].slice(0, cursorX - 1) + fileBuffer[cursorY].slice(cursorX);
        cursorX--;
      }
      break;
    default:
      // Insertar texto
      fileBuffer[cursorY] = fileBuffer[cursorY].slice(0, cursorX) + key + fileBuffer[cursorY].slice(cursorX);
      cursorX++;
      break;
  }

  render();
});

// Renderizar el archivo inicialmente
render();
