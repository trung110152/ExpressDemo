import {Request, Response} from "express";
import userService from "../service/UserService";

class UserController {
    private userService;

    constructor() {
        this.userService = userService;
    }

    showFormLogin = async (req: Request, res: Response) => {
        await userService.getAll();
        res.render('user/login')// read file
    }

    login = async (req: Request, res: Response)=>{
        let user = await userService.checkUser(req.body);
        // console.log(user)
        if(!user){
            res.redirect(301,'/users/login')
        } else {
            // @ts-ignore
            req.session.User = user
            res.redirect(301,'/home')
        }
    }

    logout = async (req: Request, res: Response) => {
        // @ts-ignore
        req.session.destroy((err)=>{
            return  res.redirect('/users/login')
        })

    }
    formSignup = async (req: Request, res: Response) => {
        res.render('user/signup')// read file
    }
    signup = async (req: Request, res: Response) => {
        let user = req.body;
                await userService.save(user);
                res.redirect(301, '/home');

    }

}

export default new UserController();