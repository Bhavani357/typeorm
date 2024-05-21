import { Entity, PrimaryGeneratedColumn, Column,OneToOne,ManyToMany } from "typeorm";
import { User3 } from "./User.entity";
import { Student } from "./Student.entity";

@Entity({name: "Course"})
export class Course{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable: false})
    title: string;

    @Column({nullable: false})
    code: string;

    @ManyToMany(()=>Student, (student)=>student.courses)
    students: Student[]

    
    

}