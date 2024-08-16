import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    category: string;
    price: number;
    blocked: boolean;
}

const ProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    blocked: { type: Boolean, default: false }
});

export const Product = mongoose.model<IProduct>('Product', ProductSchema);
