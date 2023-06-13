
import express from 'express';
import bodyParser from "body-parser";
import {AppDataSource} from "./src/data-source";
import {Product} from "./src/entity/Product";
import router from "./src/routers/api.router";
const app = express();
const PORT = 8080;
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());

AppDataSource.initialize().then(() => {
    console.log(`Success`)
}).catch(err =>{
    console.log(err)
})
export const ProductRepo = AppDataSource.getRepository(Product)
//router:
    app.use(router);

app.listen(PORT, 'localhost', () => {
    console.log(`App running with port : http://localhost:${PORT}`);
})





