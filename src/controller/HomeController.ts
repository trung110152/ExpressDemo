import {Request, Response} from "express";
import productService from "../service/ProductService";
import categoryService from "../service/CategoryService";
import orderService from "../service/OrderService";
class HomeController {
    private productService;
    private categoryService;
    private orderService;

    constructor() {
        this.productService = productService;
        this.categoryService = categoryService;
        this.orderService = orderService;

    }

    getAll = async (req: Request, res: Response) => {
        try{
            let products = await productService.getAll();
            res.status(200).json(products)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    findById = async (req: Request, res: Response) => {
        try{
            let id = req.params.id
            let product = await productService.findById(id);
            res.status(200).json(product)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    create = async (req: Request, res: Response) => {
       let newProduct = await productService.save(req.body);
       res.status(200).json(newProduct);
    }

    update = async (req: Request, res: Response) => {
        let id = req.params.id;
        let newProduct = req.body;
        let product = await this.productService.update(id, newProduct);
        res.status(200).json('Success!')
    }


    remove = async (req: Request, res: Response) => {
        let id = req.params.id;
        await this.productService.remove(id);
        res.status(200).json('Success!')

    }
    search = async (req: Request, res: Response) => {
        let search = req.body;
        // console.log(search)
        let products = await productService.findByName(search);
        res.render('home', {products: products})
    }


    getCategories = async (req: Request, res: Response) => {
        try{
            let categories = await categoryService.getAll();
            // console.log(categories)
            res.status(200).json(categories)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new HomeController();