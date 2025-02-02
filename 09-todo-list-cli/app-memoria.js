import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import chalk from "chalk";

const tasks = [];

const rl = createInterface({
  input: stdin,
  output: stdout,
})

// punto de entrada de la aplicación
function main() {
  displayManu();
  chooseOption();
}

// Menu principal
function displayManu() {
  //console.log("\n" + chalk.hex('#5CB338').bold("***************") + " " + chalk.hex("#FFFDF0").bold("Task Manager") + " " + chalk.hex("#5CB338").bold("***************"));
  console.log("\n💥💥💥💥💥💥💥💥💥💥 TO DO App 💥💥💥💥💥💥💥💥💥💥💥")
  console.log(chalk.hex("#EFB036").bold("1.") + " " + "Agregar tarea");
  console.log(chalk.hex("#EFB036").bold("2.") + " " + "Listar tareas");
  console.log(chalk.hex("#EFB036").bold("3.") + " " + "Completar tarea");
  console.log(chalk.hex("#EFB036").bold("4.") + " " + "Eliminar tarea");
  console.log(chalk.hex("#EFB036").bold("5.") + " " + "Salir");
  //console.log(chalk.hex('#5CB338').bold("********************************************\n"));
  console.log("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥")
}

function addTask() {
  rl.question("Escribe la tarea: ", (task) => {
    tasks.push({ task, completed: false });
    console.log(chalk.green.bold("Tarea agregada con éxito\n"));
    displayManu();
    chooseOption();
  })
}

function listarTareas() {
  if (tasks.length === 0) {
    console.log(chalk.hex("#BE3144").bold("\nListado de tareas vacio. Empiece agregando una!!"));
  } else {    
    console.log(chalk.hex("#5B913B").bold("\nListado de Tareas: "));
    tasks.forEach( (item, index) => {
      const status = item.completed ? "✅ " : "❌"
      let tarea = `${index + 1}. ${status} ${item.task}`;

      if (item.completed) {
        console.log(chalk.greenBright.bold(tarea));
      } else {
        console.log(chalk.redBright.bold(tarea));
      }
    })
  }
  displayManu();
  chooseOption();
}

function completarTarea() {
  rl.question("Digita el número de la tarea a completar: ", (taskNumber) => {
    const index = parseInt(taskNumber) - 1;
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = true;
      console.log(chalk.green.bold("Tarea completada con éxito\n"));
    } else {
      console.log(chalk.hex("#BE3144").bold("Número de tarea inválido."))
    }
    displayManu();
    chooseOption();
  })
}

function chooseOption() {
  rl.question("\nSelecciona una opción: ", (choice) => {
    switch(choice) {
      case "1":
        addTask();
        break;
      case "2":
          listarTareas();
        break;
      case "3":
        completarTarea();
        break;
      case "4":
        console.log("Eliminar una tarea");
        break;
      case "5":
        console.log(chalk.hex("#F72C5B").bold("\nCerrando Task Manager CLI..."));
        console.log(chalk.hex("#F72C5B").bold("Adiós\n"));
        rl.close();
        break;
      default:
        console.log(chalk.red.bold("\nOpción inválida, Intenta nuevamente."));
        displayManu();
        chooseOption();
        break;
    }
  })
}

main();