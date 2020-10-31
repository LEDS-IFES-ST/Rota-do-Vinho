import { Router } from 'express';
import { vinicolaController } from '../controllers/vinicolaController';
class VinicolasRoutes {
    // teclado 35x14
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/lista', vinicolaController.listaVinicolas);
        this.router.get('/infoGeral/:id', vinicolaController.infoEmpresa);
        this.router.get('/infoNovo/:id', vinicolaController.infoEmpresa2);
    }

}

const vinicolaRoutes = new VinicolasRoutes();
export default vinicolaRoutes.router;