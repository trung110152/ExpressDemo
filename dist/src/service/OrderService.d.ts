declare class OrderService {
    private orderRepository;
    constructor();
    orderLoad: () => Promise<any>;
    findByStatus: () => Promise<any>;
}
declare const _default: OrderService;
export default _default;
