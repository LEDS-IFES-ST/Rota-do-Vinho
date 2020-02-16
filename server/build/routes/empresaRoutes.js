"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empresaController_1 = require("../controllers/empresaController");
class EmpresaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/avist/', empresaController_1.empresaController.getAvistInfo);
        this.router.get('/', empresaController_1.empresaController.showAll);
        this.router.get('/vinicolas/', empresaController_1.empresaController.listaVinicolas);
        //this.router.get('/:id', empresaController.infoEmpresa);
    }
}
const empresaRoutes = new EmpresaRoutes();
exports.default = empresaRoutes.router;
