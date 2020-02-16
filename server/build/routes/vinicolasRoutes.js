"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vinicolaController_1 = require("../controllers/vinicolaController");
class VinicolasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/lista', vinicolaController_1.vinicolaController.listaVinicolas);
        this.router.get('/infoGeral/:id', vinicolaController_1.vinicolaController.infoEmpresa);
        this.router.get('/fotos', vinicolaController_1.vinicolaController.fotosCarrosselMain);
    }
}
const vinicolaRoutes = new VinicolasRoutes();
exports.default = vinicolaRoutes.router;
