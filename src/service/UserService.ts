
import {User} from "../model/user";
import {AppDataSource} from "../data-source";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserService {
    private userRepository;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }

    register = async (user) =>{
        user.password = await bcrypt.hash(user.password, 10);
        return this.userRepository.save(user);
    }

    getAll = async () => {
        let users = await this.userRepository.find();
        return users;
    }

    checkUser = async (user)=> {
        let userCheck = await this.userRepository.findOneBy({username : user.username} );
        if (!userCheck){
            return 'Username is not existed';
        }
        let comparePassword = await bcrypt.compare(user.password, userCheck.password);
        if(!comparePassword){
            return 'Password is wrong';
        } else {
            let payload = {
                username: userCheck.username,
                idUser: userCheck.id
            }
            let secret = '123456';

            return jwt.sign(payload, secret, {
                expiresIn: 360000
            })
        }
    }

    save = async (user) => {
        // console.log(user)
        return  this.userRepository.save(user);
    }
}

export default new UserService();