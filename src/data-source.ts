import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "khoqua1996",
    database: "shop_orm",
    synchronize: true,
    entities: ["dist/src/model/*.js"],
})