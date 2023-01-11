declare class ProductService {
    constructor();
    getAll: () => Promise<Omit<import("mongoose").Document<unknown, any, import("../model/products").IProducts> & import("../model/products").IProducts & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    save: (product: any) => Promise<import("mongoose").Document<unknown, any, import("../model/products").IProducts> & import("../model/products").IProducts & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update: (id: any, newProduct: any) => Promise<import("mongodb").UpdateResult>;
    findById: (id: any) => Promise<import("mongoose").Document<unknown, any, import("../model/products").IProducts> & import("../model/products").IProducts & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findByName: (search: any) => Promise<(import("mongoose").Document<unknown, any, import("../model/products").IProducts> & import("../model/products").IProducts & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    remove: (id: any) => Promise<import("mongodb").DeleteResult>;
}
declare const _default: ProductService;
export default _default;
