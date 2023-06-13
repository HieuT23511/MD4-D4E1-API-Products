import "reflect-metadata";
import {DataSource} from "typeorm";


//typeorm kết nối đến database
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username : "root",
    password : "S300pmu1",
    database : "dbTest",
    synchronize : false,
    logging : false,
    entities : ["dist/src/entity/*.js"],
})