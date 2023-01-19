"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const order_1 = require("../model/order");
const orderDetail_1 = require("../model/orderDetail");
class OrderService {
    constructor() {
        this.orderLoad = async () => {
            let sql = `INSERT INTO shop_orm.order (costumer, address, phone, orderDate, status, total)
                   VALUES (1, 'Hd', '01', '01/01/2023', 'loading', 0);`;
            return this.orderRepository.query(sql);
        };
        this.findByStatus = async () => {
            let order = await this.orderRepository.findOneBy({ status: 'loading' });
            if (!order) {
                return null;
            }
            return order;
        };
        this.updateOrderStatus = async () => {
            let order = await this.findByStatus();
            let sql = `UPDATE shop_orm.order
                   SET status = 'buy'
                   WHERE id = ${order.id}`;
            await this.orderRepository.query(sql);
            if (!order) {
                return null;
            }
            return order;
        };
        this.saveOrderDetail = async (orderDetail) => {
            let sql = `INSERT INTO order_detail(quantity, product, order_detail.order)
                   VALUES (${orderDetail.quantity}, ${orderDetail.idProduct}, ${orderDetail.idOrder})`;
            return this.orderDetailRepository.query(sql);
        };
        this.findByOrderId = async (id) => {
            let sql = `select p.name, p.price, d.quantity, d.order, p.id as idProduct, d.id as idDetail
                   from order_detail d

                            join product p on d.product = p.id
                   where d.order = ${id};`;
            let order = await this.orderDetailRepository.query(sql);
            return order;
        };
        this.orderRepository = data_source_1.AppDataSource.getRepository(order_1.Order);
        this.orderDetailRepository = data_source_1.AppDataSource.getRepository(orderDetail_1.OrderDetail);
    }
}
exports.default = new OrderService();
//# sourceMappingURL=OrderService.js.map