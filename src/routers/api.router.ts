import express from "express";
import {ProductControllers} from "../controllers/api.controllers/product.controllers";

const router = express.Router();
router.get('/products',ProductControllers.listProduct)
router.get('/product/:id/detail',ProductControllers.detailProduct)
router.post('/products', ProductControllers.addProduct)
router.put('/product/:id/update', ProductControllers.updateProduct)
router.delete('/product/:id/delete', ProductControllers.deleteProduct)


export default router

