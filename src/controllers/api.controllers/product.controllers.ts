
import {ProductRepo} from "../../../index";

export class ProductControllers {
    static async addProduct(req: any, res: any) {
        try {
            const productSearch = await ProductRepo.findOneBy({name: req.body.name});
            if (productSearch) {
                res.status(500).json({
                    message: `Product was existed! `
                })
            } else {
                const productData = {
                    name: req.body.name,
                    avatar: req.body.avatar,
                    author: req.body.author,
                    price: req.body.price
                }
                const product = await ProductRepo.save(productData);
                if (product) {
                    res.status(200).json({
                        message: `Create product successfully! `,
                        product: product
                    })
                }
            }
        } catch (err) {
            res.status(500).json({
                message: err.message
            })
        }
    }

    static async updateProduct(req: any, res: any) {
        try {
            let productSearch = await ProductRepo.findOneBy({id: +req.params.id});
            if (!productSearch) {
                res.status(500).json({
                    message: "Product was not existed! "
                })
            }
            await ProductRepo.update({id: +req.params.id}, req.body);
            res.status(200).json({
                message: "Update product success",
            });
        } catch (err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
    static async deleteProduct(req: any, res: any) {
        try {
            let productSearch = await ProductRepo.findOneBy({id: +req.params.id});
            if (!productSearch) {
                res.status(500).json({
                    message: "Product was not existed! "
                })
            }
            await ProductRepo.delete({id: +req.params.id});
            res.status(200).json({
                message: "Delete product success",
            });
        } catch (err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}

