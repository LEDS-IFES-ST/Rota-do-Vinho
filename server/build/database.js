"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const key_1 = __importDefault(require("./key"));
const poolDB = promise_mysql_1.default.createPool(key_1.default.database);
poolDB.getConnection()
    .then(connection => {
    poolDB.releaseConnection(connection);
    console.log('DB-avist conectado');
});
exports.default = poolDB;
exports.pool = poolDB;
