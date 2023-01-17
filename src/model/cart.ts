import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    quantity: number
    @Column()
    product: number
    @Column()
    oder: number
}