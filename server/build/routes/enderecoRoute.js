"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vinicolaController_1 = require("../controllers/vinicolaController");
class EnderecoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/lista', vinicolaController_1.enderecoController.listaEndereco);
        this.router.get('/infoGeral/:id', vinicolaController_1.enderecoController.infoEmpresa);
    }
}
const enderecoRoutes = new EnderecoRoutes();
exports.default = enderecoRoutes.router;
