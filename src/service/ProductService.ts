import {Product} from "../model/products";

class ProductService {
    constructor() {
    }

    getAll = async () => {
        let products = await Product.find().populate('category');
        return products;
    }

    save = async (product) => {// product ko id
       return  Product.create(product);// product co _id
    }

    update = async (id, newProduct)=>{
        let product = await Product.findOne({_id:id});
        if(!product){
            return null;
        }
        return Product.updateOne({_id: id}, newProduct);
    }

    findById = async (id)=> {
        let product = await Product.findOne({_id:id});
        if(!product){
            return null;
        }
        return product;
    }

    findByName = async (search)=> {
        // console.log(search)
        let products = await Product.find({name:{$regex:`(.*)${search.search}(.*)`}});
        // console.log(products)
        if(!products){
            return null;
        }
        return products;
    }


    remove = async (id)=> {
        let product = await Product.findOne({_id:id});
        if(!product){
            return null;
        }
        return  Product.deleteOne({_id: id});
    }
}

export default new ProductService();