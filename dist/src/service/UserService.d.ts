declare class UserService {
    private userRepository;
    constructor();
    register: (user: any) => Promise<any>;
    getAll: () => Promise<any>;
    checkUser: (user: any) => Promise<string>;
    save: (user: any) => Promise<any>;
}
declare const _default: UserService;
export default _default;
