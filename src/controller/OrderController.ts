import {Request, Response} from "express";
import orderService from "../service/OrderService";
import productService from "../service/ProductService";

class OrderController {
    private orderService;
    private productService;
    constructor() {
        this.orderService = orderService;
        this.productService = productService;
    }

    showOrderDetail = async (req: Request, res: Response) => {
        let id = req.params.id;
        let product = await this.productService.findById(id);
        let order = await this.orderService.findByStatus();
        // console.log(order.id)
        // console.log(product)
        res.render('orders/orderDetail', {product: product,idOrder: order.id});

    }

    orderDetail  = async (req: Request, res: Response) => {
        let orderDetail = req.body;
        // console.log(orderDetail)

        res.redirect('/home')

    }



}

export default new OrderController();