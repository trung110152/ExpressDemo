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
        res.render('orders/orderDetail', {product: product, idOrder: order.id});

    }

    orderDetail = async (req: Request, res: Response) => {
        let orderDetail = req.body;
        // console.log(orderDetail)
        await this.orderService.saveOrderDetail(orderDetail);
        res.redirect('/home')

    }

    showOrder = async (req: Request, res: Response) => {
        let order = await orderService.findByStatus();
        let orderDetail = await orderService.findByOrderId(order.id);
        // console.log(orderDetail)
        res.render('orders/showOrder', {orderDetail: orderDetail});

    }

    showOrderList = async (req: Request, res: Response) => {
        await orderService.updateOrderStatus();
        await orderService.orderLoad();
        res.render('orders/showOrderlist');
    }
}

export default new OrderController();