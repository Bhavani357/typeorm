import "reflect-metadata";
import express, {Request,Response} from 'express';
import dataSource from "./datasource/dataSource";
import { User3 } from "./entities/User.entity";
import { Profile } from "./entities/Profile.entity";
import { Todo } from "./entities/Todo.entity";
import { Student } from "./entities/Student.entity";
import { Course } from "./entities/Course.entity";
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
    let studentRepo = dataSource.getRepository(Student)

    const course1 = new Course();
    course1.code = 'CS-993';
    course1.title = 'Computer programming';

    const course2 = new Course();
    course1.code = 'CS-994';
    course1.title = 'web programming';
    
    const student = new Student();
    student.age = 22;
    student.firstName = 'rani';
    student.lastName = 'ande';
    student.rollNo = 'st-334';
    student.courses = [course1,course2]

    let savedStudent = await studentRepo.save(student)
    res.json(savedStudent)
})
app.listen(PORT, ()=>{
    console.log("server has started http://localhost:3000/")
})