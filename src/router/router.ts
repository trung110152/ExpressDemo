import {Router} from "express";
import homeController from "../controller/HomeController";
import {productRouter} from "./product-router";
import userController from "../controller/UserController";
import {userRouter} from "./userRouter";

export const router = Router();
router.get('/home', homeController.showHome)
// router.post('/home',homeController.search)
router.use('/products', productRouter);
router.use('/users', userRouter)