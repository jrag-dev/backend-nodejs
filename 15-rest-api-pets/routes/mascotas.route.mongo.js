import { Router } from "express";
import mascotaController from "../controllers/mascota.controller.mongo.js";

const router = Router();


router.get("/", mascotaController.getAll);
router.get("/:id", mascotaController.getOne);
router.post("/", mascotaController.create);
router.put("/:id", mascotaController.update);
router.delete("/:id", mascotaController.delete);


export default router;