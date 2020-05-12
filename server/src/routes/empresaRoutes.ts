import { Router } from 'express';
import { empresaController } from '../controllers/empresaController';
class EmpresaRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/avist/', empresaController.getAvistInfo);
        this.router.get('/', empresaController.showAll);
        this.router.get('/vinicolas/', empresaController.listaVinicolas);
        this.router.post('/addEmpresa/', empresaController.addEmpresa);
    }

    


}

const empresaRoutes = new EmpresaRoutes();
export default empresaRoutes.router;