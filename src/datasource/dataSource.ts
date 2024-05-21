import { DataSource } from "typeorm";
import { User3 } from "../entities/User.entity";
import { Profile } from "../entities/Profile.entity";
import { Todo } from "../entities/Todo.entity";
import { Student } from "../entities/Student.entity";
import { Course } from "../entities/Course.entity";
const dataSource = new DataSource({
    type: 'mysql',
  host: 'localhost',  // Add host if needed
  port: 3306,  // Add port if needed
  database: 'TypeormTutorial',
  username: 'root',
  password: 'Ydurga232bhavani@',
  logging: true,
  synchronize: false,
  entities:[Todo,User3,Profile,Student,Course],
})

export default dataSource;