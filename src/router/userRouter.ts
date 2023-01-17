import {Router} from "express";
import userController from "../controller/UserController";

export const userRouter = Router();
// userRouter.get('/login', userController.showFormLogin);
userRouter.post('/login', userController.login);
