"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductService_1 = __importDefault(require("../service/ProductService"));
const CategoryService_1 = __importDefault(require("../service/CategoryService"));
const OrderService_1 = __importDefault(require("../service/OrderService"));
class HomeController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let products = await ProductService_1.default.getAll();
                res.status(200).json(products);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.findById = async (req, res) => {
            try {
                let id = req.params.id;
                let product = await ProductService_1.default.findById(id);
                res.status(200).json(product);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.create = async (req, res) => {
            let newProduct = await ProductService_1.default.save(req.body);
            res.status(200).json(newProduct);
        };
        this.update = async (req, res) => {
            let id = req.params.id;
            let newProduct = req.body;
            let product = await this.productService.update(id, newProduct);
            res.status(200).json('Success!');
        };
        this.remove = async (req, res) => {
            let id = req.params.id;
            await this.productService.remove(id);
            res.status(200).json('Success!');
        };
        this.search = async (req, res) => {
            let search = req.body;
            let products = await ProductService_1.default.findByName(search);
            res.render('home', { products: products });
        };
        this.getCategories = async (req, res) => {
            try {
                let categories = await CategoryService_1.default.getAll();
                res.status(200).json(categories);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.productService = ProductService_1.default;
        this.categoryService = CategoryService_1.default;
        this.orderService = OrderService_1.default;
    }
}
exports.default = new HomeController();
//# sourceMappingURL=HomeController.js.map