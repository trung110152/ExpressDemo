"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OrderService_1 = __importDefault(require("../service/OrderService"));
const ProductService_1 = __importDefault(require("../service/ProductService"));
class OrderController {
    constructor() {
        this.showOrderDetail = async (req, res) => {
            let id = req.params.id;
            let product = await this.productService.findById(id);
            let order = await this.orderService.findByStatus();
            res.render('orders/orderDetail', { product: product, idOrder: order.id });
        };
        this.orderDetail = async (req, res) => {
            let orderDetail = req.body;
            await this.orderService.saveOrderDetail(orderDetail);
            res.redirect('/home');
        };
        this.showOrder = async (req, res) => {
            let order = await OrderService_1.default.findByStatus();
            let orderDetail = await OrderService_1.default.findByOrderId(order.id);
            res.render('orders/showOrder', { orderDetail: orderDetail });
        };
        this.showOrderList = async (req, res) => {
            await OrderService_1.default.updateOrderStatus();
            await OrderService_1.default.orderLoad();
            res.render('orders/showOrderlist');
        };
        this.orderService = OrderService_1.default;
        this.productService = ProductService_1.default;
    }
}
exports.default = new OrderController();
//# sourceMappingURL=OrderController.js.map