import { Router } from "express";
import { addTask, completeTask, deleteTask, editTask, getAddTaskForm, getAllTasks, getEditTaskForm, uncompleteTask } from "../controllers/task.controller.js";

const router = Router();


router.get("/", getAllTasks);
router.get("/add", getAddTaskForm);
router.post("/add", addTask);
router.get("/edit/:id", getEditTaskForm);
router.post("/edit/:id", editTask);
router.get("/complete/:id", completeTask);
router.get("/uncomplete/:id", uncompleteTask);
router.get("/delete/:id", deleteTask);

export default router;