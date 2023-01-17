import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    costumer: number
    @Column()
    products: number
    @Column()
    quantity: number
    @Column()
    address: string
    @Column()
    phone: string
    @Column()
    orderDate: string
    @Column()
    status: string
    @Column()
    note: string
}