import {Product} from "../model/products";
import {AppDataSource} from "../data-source";

class ProductService {
    private productRepository
    constructor() {
        this.productRepository = AppDataSource.getRepository(Product)
    }

    getAll = async () => {
        let sql ='select p.id, p.name, p.price, p.image, c.id as idCategory, c.name as nameCategory from product p join category c on p.category = c.id'
        let products = await this.productRepository.query(sql);
        // console.log(products)
        return products;
    }

    save = async (product) => {// product ko id
        // console.log(product)
       return  this.productRepository.save(product);
    }

    update = async (id, newProduct)=>{
        let product = await this.productRepository.findOneBy({id:id});
        if(!product){
            return null;
        }
        return this.productRepository.update({id: id}, newProduct);
    }

    findById = async (id)=> {
        let product = await this.productRepository.findOneBy({id:id});
        if(!product){
            return null;
        }
        return product;
    }

    findByName = async (search)=> {
        // console.log(search)

        let sql =`select p.id, p.name, p.price, p.image, c.id as idCategory, c.name as nameCategory from product p join category c on p.category = c.id where p.name like '%${search}%'`
        let products = await this.productRepository.query(sql);
        // console.log(products)
        if(!products){
            return null;
        }
        return products;
    }


    remove = async (id)=> {
        let product = await this.productRepository.findOneBy({id:id});
        if(!product){
            return null;
        }
        return  this.productRepository.delete({id: id});
    }
}

export default new ProductService();