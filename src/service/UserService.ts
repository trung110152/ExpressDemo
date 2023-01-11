
import {User} from "../model/user";

class UserService {
    constructor() {
    }

    getAll = async () => {
        let users = await User.find();
        return users;
    }

    checkUser = async (user)=> {
        let userCheck = await User.findOne({username : user.username, password: user.password} )
        if (!userCheck){
            return null;
        }
        return userCheck;
    }
}

export default new UserService();