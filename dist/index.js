"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepo = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const data_source_1 = require("./src/data-source");
const Product_1 = require("./src/entity/Product");
const api_router_1 = __importDefault(require("./src/routers/api.router"));
const app = (0, express_1.default)();
const PORT = 8080;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
data_source_1.AppDataSource.initialize().then(() => {
    console.log(`Success`);
}).catch(err => {
    console.log(err);
});
exports.ProductRepo = data_source_1.AppDataSource.getRepository(Product_1.Product);
app.use(api_router_1.default);
app.listen(PORT, 'localhost', () => {
    console.log(`App running with port : http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map