import "reflect-metadata";
import express, {Request,Response} from 'express';
import dataSource from "./datasource/dataSource";
import { User3 } from "./entities/User.entity";
import { Profile } from "./entities/Profile.entity";

const PORT = 3000;
const app = express();

dataSource.initialize().then(()=>{
    console.log("datasource successfully connected with the database")
}).catch((err)=>{
    console.log("datasource connection faild", err);
})

// app.get("/", async(req: Request,res:Response)=>{
    // let userRepo = dataSource.getRepository(User3)

    // update data 

    // res.json(await userRepo.update(2,{firstName:"ramu"}))

    // deleting data from database
    // res.json(await userRepo.delete(3))

    // finding data or quering
    // res.json(await userRepo.find({select:["firstName","lastName"]}));
    
    // creating Rows or inserting data into database
    
    // const user1 = new User3();
    // user1.firstName = "bhavani";
    // user1.lastName = "yasarla";
    // user1.isActive = true;

    // const user2 = new User3();
    // user2.firstName = "latha";
    // user2.lastName = "yasarla";
    // user2.isActive = false;

    // const user3 = new User3();
    // user3.firstName = "remo";
    // user3.lastName = "dundugolu";
    // user3.isActive = true;

    // res.json(await userRepo.save([user1,user2,user3]));
// })

app.get("/", async(req: Request,res:Response)=>{
    let profileRepo = dataSource.getRepository(Profile);
    // let userRepo = dataSource.getRepository(User3);

    // let profile = new Profile();
    // profile.gender = 'female';
    // profile.skill = 'software';
    

    // let saveProfile = await profileRepo.save(profile);

    // let user = new User3();
    // user.firstName = 'bhavani';
    // user.lastName = 'yasarla';
    // user.isActive = true;
    // user.profile = saveProfile;

    // let savedUser = await userRepo.save(user)
    // res.json(savedUser)

    // if you want to join tables without saving the table 

    //post data
    
    // let userRepo = dataSource.getRepository(User3);

    // let profile = new Profile();
    // profile.gender = 'male';
    // profile.skill = 'graphic designer';

    // let user = new User3();
    // user.firstName = 'thanu';
    // user.lastName = 'tentu';
    // user.isActive = true;
    // user.profile = profile;

    // let savedUser = await userRepo.save(user);

    // left to right 
    // user to profile

    // res.json(savedUser)
    

    // finding data
    res.json(await profileRepo.find({ relations:['user']}));//{ relations:['profile']} is for showing foreign key table data with primary table


})
app.listen(PORT, ()=>{
    console.log("server has started http://localhost:3000/")
})