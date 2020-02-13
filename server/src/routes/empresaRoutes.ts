import { Router } from 'express';
import { empresaController } from '../controllers/empresaController';
class EmpresaRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', empresaController.showAll);
        this.router.get('/vinicolas/', empresaController.listaVinicolas);
        this.router.get('/:id', empresaController.infoEmpresa);
        this.router.get('/avist/', empresaController.getAvistInfo);
    }

    


}

const empresaRoutes = new EmpresaRoutes();
export default empresaRoutes.router;