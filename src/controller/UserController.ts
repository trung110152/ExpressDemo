import {Request, Response} from "express";
import userService from "../service/UserService";
import orderService from "../service/OrderService";

class UserController {
    private userService;
    private orderService;

    constructor() {
        this.userService = userService;
        this.orderService =orderService;
    }

    showFormLogin = async (req: Request, res: Response) => {
        await userService.getAll();
        res.render('user/login')// read file
    }

    login = async (req: Request, res: Response)=>{
       let response = await this.userService.checkUser(req.body);
       res.status(200).json(response)
    }

    logout = async (req: Request, res: Response) => {
        await orderService.updateOrderStatus();
        // @ts-ignore
        req.session.destroy((err)=>{
            return  res.redirect('/users/login')
        })

    }
    formSignup = async (req: Request, res: Response) => {
        res.render('user/signup')// read file
    }
    signup = async (req: Request, res: Response) => {
        let user = await this.userService.register(req.body);
               res.status(201).json(user);
    }

}

export default new UserController();