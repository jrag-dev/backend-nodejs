import { Router } from "express";
import ProductController from "../controllers/products.controller.js";
import verifyIdMiddleware from "../middlewares/verifyId.middleware.js";
import { verifyAuthUser } from "../middlewares/jwt.middleware.js";
import { isAdmin } from "../middlewares/verifyRoles.middleware.js";

const productController = new ProductController();
const router = Router();

router.post('/', [verifyAuthUser, isAdmin ], (req, res) => productController.createProduct(req, res));
router.get('/', (req, res) => productController.getProducts(req, res));
router.get('/:id', verifyIdMiddleware, (req, res) => productController.getProduct(req, res));
router.put('/:id', [verifyAuthUser, isAdmin, verifyIdMiddleware], (req, res) => productController.updateProductById(req, res));
router.delete('/:id', [verifyAuthUser, isAdmin, verifyIdMiddleware], (req, res) => productController.deleteProductById(req, res));


export default router;