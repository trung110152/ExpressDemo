import {model, Schema} from "mongoose";
import {ICategory} from "./category";
 export interface IProducts{
    name ?: string;
    price ?: number;
    image ?: string;
    category?: ICategory;
}

const ProductSchema = new Schema<IProducts>({
    name: String,
    price: Number,
    image: String,
    category: {
        type: String,
        ref: 'Category'
    }
})

const Product = model<IProducts>('Product', ProductSchema);
export {Product}