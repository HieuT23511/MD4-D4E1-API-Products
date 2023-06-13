"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const index_1 = require("../../../index");
class ProductControllers {
    static async addProduct(req, res) {
        try {
            const productSearch = await index_1.ProductRepo.findOneBy({ name: req.body.name });
            if (productSearch) {
                res.status(500).json({
                    message: `Product was existed! `
                });
            }
            else {
                const productData = {
                    name: req.body.name,
                    avatar: req.body.avatar,
                    author: req.body.author,
                    price: req.body.price
                };
                const product = await index_1.ProductRepo.save(productData);
                if (product) {
                    res.status(200).json({
                        message: `Create product successfully! `,
                        product: product
                    });
                }
            }
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
    static async updateProduct(req, res) {
        try {
            let productSearch = await index_1.ProductRepo.findOneBy({ id: +req.params.id });
            if (!productSearch) {
                res.status(500).json({
                    message: "Product was not existed! "
                });
            }
            await index_1.ProductRepo.update({ id: +req.params.id }, req.body);
            res.status(200).json({
                message: "Update product success",
            });
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
    static async deleteProduct(req, res) {
        try {
            let productSearch = await index_1.ProductRepo.findOneBy({ id: +req.params.id });
            if (!productSearch) {
                res.status(500).json({
                    message: "Product was not existed! "
                });
            }
            await index_1.ProductRepo.delete({ id: +req.params.id });
            res.status(200).json({
                message: "Delete product success",
            });
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
    static async listProduct(req, res) {
        try {
            const products = await index_1.ProductRepo.find();
            if (products) {
                res.status(200).json({ message: "Display Success", products: products });
            }
        }
        catch (err) {
            res.status(500).json({ message: err.mesage });
        }
    }
    static async detailProduct(req, res) {
        try {
            let productId = +req.params.id;
            const product = await index_1.ProductRepo.findOneBy({ id: productId });
            if (product) {
                res.status(200).json({ message: "Detail Success", product });
            }
        }
        catch (err) {
            res.status(500).json({ message: err.mesage });
        }
    }
}
exports.ProductControllers = ProductControllers;
//# sourceMappingURL=product.controllers.js.map