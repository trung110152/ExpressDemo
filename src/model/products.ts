import {model, Schema} from "mongoose";
 export interface IProducts{
    name ?: string;
    price ?: number;
    image ?: string;
}

const ProductSchema = new Schema<IProducts>({
    name: String,
    price: Number,
    image: String
})

const Product = model<IProducts>('Product', ProductSchema);
export {Product}