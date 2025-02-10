import { Router } from "express";
import mascotaController from "../controllers/mascota.controller.js";
import { validarToken } from "../helpers/jsonwebtoken.js";
import { autorizarUsuario } from "../middlewares/auth.middleware.js";

const router = Router();


router.get("/", mascotaController.getAll);
router.get("/:id", mascotaController.getOne);
router.post("/", mascotaController.create);
router.put("/:id", autorizarUsuario, mascotaController.update);
router.delete("/:id", autorizarUsuario, mascotaController.delete);


export default router;