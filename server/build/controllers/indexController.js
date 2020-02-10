"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({
            text: 'API -> /api/empresas'
        });
    }
}
exports.indexController = new IndexController();
