"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controllers_1 = require("../controllers/api.controllers/product.controllers");
const router = express_1.default.Router();
router.post('/products', product_controllers_1.ProductControllers.addProduct);
router.put('/product/:id/update', product_controllers_1.ProductControllers.updateProduct);
router.delete('/product/:id/delete', product_controllers_1.ProductControllers.deleteProduct);
exports.default = router;
//# sourceMappingURL=api.router.js.map