"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const order_1 = require("../model/order");
class OrderService {
    constructor() {
        this.orderLoad = async () => {
            let sql = `INSERT INTO shop_orm.order (costumer, address, phone, orderDate, status, total)
VALUES (1,'Hd','01','01/01/2023','loading',0);`;
            return this.orderRepository.query(sql);
        };
        this.findByStatus = async () => {
            let order = await this.orderRepository.findOneBy({ status: 'loading' });
            if (!order) {
                return null;
            }
            return order;
        };
        this.orderRepository = data_source_1.AppDataSource.getRepository(order_1.Order);
    }
}
exports.default = new OrderService();
//# sourceMappingURL=OrderService.js.map