
let tasks = [
  {
    id: "101",
    title: "Aprendiendo Node.js",
    completed: false
  },
  {
    id: "102",
    title: "Tarea 2",
    completed: true
  },
  {
    id: "103",
    title: "Tarea 3",
    completed: false
  },
  {
    id: "104",
    title: "Tarea 4",
    completed: true
  }
];

const getAllTasks = (req, res) => {
  res.render("index", { title: "Listado de tareas", tasks})
}

const getAddTaskForm = (req, res) => {
  res.render("add", { title: "Agregar Tarea" })
}

const addTask = (req, res) => {
  let { title } = req.body;
  let id = generarId();
  tasks.push({ id, title, completed: false })
  res.redirect("/tasks");
}

const getEditTaskForm = (req, res) => {
  let id = req.params.id;
  let task = tasks.find( task => task.id === id);
  
  if (!task) {
    res.redirect("/tasks");
  } else {
    res.render("edit", { title: "Editar Tarea", task });
  }
}

const editTask = (req, res) => {
  let id = req.params.id;
  let task = tasks.find( task => task.id === id);
  
  if (!task) {
    res.redirect("/tasks");
  } else {
    let newTasks = tasks.map( taskInfo => {
      if (taskInfo.id === id) {
        taskInfo.title = req.body.title;
      }
      return taskInfo;
    })
    tasks = [...newTasks];
    res.redirect("/tasks");
  }
}

const completeTask = (req, res) => {
  let id = req.params.id;
  let task = tasks.find( task => task.id === id);

    if (task) {
    let newTasks = tasks.map( taskInfo => {
      if (taskInfo.id === id) {
        taskInfo.completed = true;
      }
      return taskInfo;
    })
    tasks = [...newTasks];
  }
  res.redirect("/tasks")
}

const uncompleteTask = (req, res) => {
  let id = req.params.id;
  let task = tasks.find( task => task.id === id);

    if (task) {
    let newTasks = tasks.map( taskInfo => {
      if (taskInfo.id === id) {
        taskInfo.completed = false;
      }
      return taskInfo;
    })
    tasks = [...newTasks];
  }
  res.redirect("/tasks")
}

const deleteTask = (req, res) => {
  let id = req.params.id;
  let task = tasks.find( task => task.id === id);

  if (task) {
    let newTasks = tasks.filter( taskInfo => taskInfo.id !== id);
    console.log(newTasks)
    tasks = [...newTasks];
  }
  res.redirect("/tasks")
}

function generarId() {
  let part1 = Date.now().toString(36);
  let part2 = Math.random().toString(36).slice(2);
  return part1 + part2;
}

export {
  getAllTasks,
  getAddTaskForm,
  addTask,
  getEditTaskForm,
  editTask,
  completeTask,
  uncompleteTask,
  deleteTask
}