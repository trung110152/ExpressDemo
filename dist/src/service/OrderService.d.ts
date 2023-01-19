declare class OrderService {
    private orderRepository;
    private orderDetailRepository;
    constructor();
    orderLoad: () => Promise<any>;
    findByStatus: () => Promise<any>;
    updateOrderStatus: () => Promise<any>;
    saveOrderDetail: (orderDetail: any) => Promise<any>;
    findByOrderId: (id: any) => Promise<any>;
}
declare const _default: OrderService;
export default _default;
