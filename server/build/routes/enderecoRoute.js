"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const enderecoController_1 = require("../controllers/enderecoController");
class EnderecoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', enderecoController_1.enderecoController.getEndereco);
    }
}
const enderecoRoutes = new EnderecoRoutes();
exports.default = enderecoRoutes.router;
