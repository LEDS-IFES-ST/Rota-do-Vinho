import { Router } from 'express';
import { empresaController } from '../controllers/empresaController';
class EmpresaRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', empresaController.fotosCarrosselMain);
        this.router.get('/vinicolas/', empresaController.listaVinicolas);
        this.router.post('/add/', empresaController.addEmpresa);
        this.router.get('/:id', empresaController.infoEmpresa);

        this.router.get('/avist/', empresaController.getAvistInfo);
        this.router.get('/fotos/', empresaController.fotosCarrosselMain);
    }

    


}

const empresaRoutes = new EmpresaRoutes();
export default empresaRoutes.router;