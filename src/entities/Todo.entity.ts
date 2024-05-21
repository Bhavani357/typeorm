import { Entity, PrimaryGeneratedColumn, Column,OneToOne,ManyToOne } from "typeorm";
import { User3 } from "./User.entity";

@Entity({name: "Todo"})
export class Todo{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable: false})
    title: string;

    @Column({nullable: true})
    description: string;

    @Column({default: false})
    isCompleted: boolean;

    @ManyToOne(()=>User3, (user)=>user.todos)
    user: User3;
    

}