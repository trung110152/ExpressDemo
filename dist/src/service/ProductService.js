"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../model/products");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let products = await products_1.Product.find().populate('category');
            return products;
        };
        this.save = async (product) => {
            return products_1.Product.create(product);
        };
        this.update = async (id, newProduct) => {
            let product = await products_1.Product.findOne({ _id: id });
            if (!product) {
                return null;
            }
            return products_1.Product.updateOne({ _id: id }, newProduct);
        };
        this.findById = async (id) => {
            let product = await products_1.Product.findOne({ _id: id });
            if (!product) {
                return null;
            }
            return product;
        };
        this.findByName = async (search) => {
            let products = await products_1.Product.find({ name: { $regex: `(.*)${search.search}(.*)` } });
            if (!products) {
                return null;
            }
            return products;
        };
        this.remove = async (id) => {
            let product = await products_1.Product.findOne({ _id: id });
            if (!product) {
                return null;
            }
            return products_1.Product.deleteOne({ _id: id });
        };
    }
}
exports.default = new ProductService();
//# sourceMappingURL=ProductService.js.map