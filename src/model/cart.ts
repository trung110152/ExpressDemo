import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    status: string
    @Column()
    quantity: number
    @Column()
    product: number
    @Column()
    user: number
}