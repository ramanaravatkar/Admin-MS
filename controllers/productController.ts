import { Request, Response } from 'express';
import { createProduct, getProductInfo, getAllProducts, blockProduct, unblockProduct } from '../services/productService';

export const create = async (req: Request, res: Response) => {
    try {
        const { name, category, price } = req.body;
        const product = await createProduct(name, category, price);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

export const getInfo = async (req: Request, res: Response) => {
    try {
        const product = await getProductInfo(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

export const getAll = async (req: Request, res: Response) => {
    try {
        const products = await getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

export const block = async (req: Request, res: Response) => {
    try {
        const product = await blockProduct(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

export const unblock = async (req: Request, res: Response) => {
    try {
        const product = await unblockProduct(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};
