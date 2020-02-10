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
        this.router.get('/', empresaController_1.empresaController.fotosCarrosselMain);
        this.router.get('/vinicolas/', empresaController_1.empresaController.listaVinicolas);
        this.router.post('/add/', empresaController_1.empresaController.addEmpresa);
        this.router.get('/:id', empresaController_1.empresaController.infoEmpresa);
        this.router.get('/avist/', empresaController_1.empresaController.getAvistInfo);
        this.router.get('/fotos/', empresaController_1.empresaController.fotosCarrosselMain);
    }
}
const empresaRoutes = new EmpresaRoutes();
exports.default = empresaRoutes.router;
