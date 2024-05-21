import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Profile } from "./Profile.entity";
import { profile } from "console";

@Entity()
export class User3{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    isActive: boolean;

    @OneToOne(()=> Profile, (profile)=>profile.user, {cascade: true}) //one to one relation with profile table,cascade is for auto creation of foreign key table,eager is for fetching the foreign key table data along with primary table
    @JoinColumn() //telling this is a foreign key
    profile: Profile;

}