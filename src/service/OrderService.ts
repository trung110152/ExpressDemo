import {AppDataSource} from "../data-source";
import {Order} from "../model/order";

class OrderService {
    private orderRepository;

    constructor() {
        this.orderRepository = AppDataSource.getRepository(Order)
    }

    orderLoad = async () => {
        let sql = `INSERT INTO shop_orm.order (costumer, address, phone, orderDate, status, total)
VALUES (1,'Hd','01','01/01/2023','loading',0);`
        return  this.orderRepository.query(sql);
    }

    findByStatus = async ()=> {
        let order = await this.orderRepository.findOneBy({status:'loading'});
        if(!order){
            return null;
        }
        return order;
    }
}

export default new OrderService();