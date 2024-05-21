import { DataSource } from "typeorm";
import { User3 } from "../entities/User.entity";
import { Profile } from "../entities/Profile.entity";

const dataSource = new DataSource({
    type: 'mysql',
  host: 'localhost',  // Add host if needed
  port: 3306,  // Add port if needed
  database: 'TypeormTutorial',
  username: 'root',
  password: 'Ydurga232bhavani@',
  logging: true,
  synchronize: false,
  entities:[User3,Profile],
})

export default dataSource;