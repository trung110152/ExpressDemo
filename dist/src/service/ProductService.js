"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../model/products");
const data_source_1 = require("../data-source");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let sql = 'select p.id, p.name, p.price, p.image, c.id as idCategory, c.name as nameCategory from product p join category c on p.id = c.id';
            let products = await this.productRepository.query(sql);
            return products;
        };
        this.save = async (product) => {
            return this.productRepository.save(product);
        };
        this.update = async (id, newProduct) => {
            let product = await this.productRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return this.productRepository.update({ id: id }, newProduct);
        };
        this.findById = async (id) => {
            let product = await this.productRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return product;
        };
        this.remove = async (id) => {
            let product = await this.productRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return this.productRepository.delete({ id: id });
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(products_1.Product);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=ProductService.js.map