import {Router} from "express";
import orderController from "../controller/OrderController";

export const orderRouter = Router();
orderRouter.get('/showOrderDetail/:id',orderController.showOrderDetail);
orderRouter.post('/orderDetail',orderController.orderDetail);