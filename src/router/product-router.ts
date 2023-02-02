import {Router} from "express";
import homeController from "../controller/HomeController";
import {router} from "./router";
import {auth} from "../../middleware/auth";
import {role} from "../../middleware/role";
export const productRouter = Router();
productRouter.use(auth)
productRouter.get('/', homeController.getAll);
productRouter.post('/' ,role, homeController.create);
productRouter.put('/:id',role, homeController.update);
productRouter.delete('/:id',role, homeController.remove);
productRouter.get('/findById/:id', homeController.findById);
productRouter.get('/getCategories', homeController.getCategories);
productRouter.get('/search/findByName', homeController.search);
