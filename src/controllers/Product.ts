import { Request, Response } from 'express';
import product from '../models/Product';

export const getProducts = async (req: Request, res: Response) => {
    const lisProducts = await product.findAll();
    res.json(lisProducts);
}
export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const Product = await product.findByPk(id);
    if (Product) {
        res.json(Product);
    } else {
        res.status(404).json({
            message: `Product with id ${id} not found`
        });
    }
}
export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const ProductToElimate = await product.findByPk(id);
    if (ProductToElimate) {
        await ProductToElimate.destroy(); 
        res.json({
            message: `Product with id ${id} deleted`
        });
    } else {
        res.status(404).json({
            message: `Product with id ${id} not found`
        });
    }
}
export const postProduct = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await product.create(body);

        res.json(body);
    } catch (error) {
        res.json({
            msg: `Product cannot be created`,
        })
    }
}
export const putProduct = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const Product = await product.findByPk(id);

        if (Product) { 
            await Product.update(body);
            res.json(body);
        } else {
            res.status(404).json({
                msg: `Product with id ${id} not found`
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            msg: `Product cannot be updated`
        });
    }
}