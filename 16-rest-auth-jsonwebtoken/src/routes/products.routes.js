import { Router } from "express";
import ProductController from "../controllers/products.controller.js";

const productController = new ProductController();

const router = Router();

router.post('/', (req, res) => productController.createProduct(req, res));
router.get('/', (req, res) => productController.getProducts(req, res));
router.get('/:id', (req, res) => productController.getProduct(req, res));
router.put('/:id', (req, res) => productController.updateProductById(req, res));
router.delete('/:id', (req, res) => productController.deleteProductById(req, res));


export default router;