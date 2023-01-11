"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../service/UserService"));
class UserController {
    constructor() {
        this.showFormLogin = async (req, res) => {
            await UserService_1.default.getAll();
            res.render('user/login');
        };
        this.login = async (req, res) => {
            let user = await UserService_1.default.checkUser(req.body);
            if (!user) {
                res.redirect(301, '/users/login');
            }
            else {
                req.session.User = user;
                res.redirect(301, '/home');
            }
        };
        this.userService = UserService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map