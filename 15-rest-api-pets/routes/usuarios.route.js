import { Router } from "express";
import usuariosController from "../controllers/usuarios.controller.js";
import { autorizarUsuario } from "../middlewares/auth.middleware.js";

const router = Router();


router.post("/register", usuariosController.register);
router.post("/login", usuariosController.login);
router.get("/profile", autorizarUsuario, usuariosController.profile);


export default router;