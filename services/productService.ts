import { Product, IProduct } from '../models/product';

export const createProduct = async (name: string, category: string, price: number) => {
    const product = await Product.create({ name, category, price });
    return product;
};

export const getProductInfo = async (id: string) => {
    const product = await Product.findById(id);
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
};

export const getAllProducts = async () => {
    const products = await Product.find();
    return products;
};

export const blockProduct = async (id: string) => {
    const product = await Product.findById(id);
    if (!product) {
        throw new Error('Product not found');
    }
    product.blocked = true;
    await product.save();
    return product;
};

export const unblockProduct = async (id: string) => {
    const product = await Product.findById(id);
    if (!product) {
        throw new Error('Product not found');
    }
    product.blocked = false;
    await product.save();
    return product;
};
