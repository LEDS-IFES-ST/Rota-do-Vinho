import { Router } from 'express';
import { vinicolaController } from '../controllers/vinicolaController';
class VinicolasRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/lista', vinicolaController.listaVinicolas);
        this.router.get('/infoGeral/:id', vinicolaController.infoEmpresa);
        this.router.get('/fotosMain', vinicolaController.fotosCarrosselMain);
    }

    


}

const vinicolaRoutes = new VinicolasRoutes();
export default vinicolaRoutes.router;