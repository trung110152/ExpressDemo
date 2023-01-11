import {Router} from "express";
import homeController from "../controller/HomeController";
import {productRouter} from "./product-router";

export const router = Router();
router.get('/home', homeController.showHome)
router.post('/home',homeController.search)
router.use('/products', productRouter)