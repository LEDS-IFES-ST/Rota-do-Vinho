import { Router } from 'express';
import { enderecoController } from '../controllers/vinicolaController';
class EnderecoRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/lista', enderecoController.listaEndereco);
        this.router.get('/infoGeral/:id', enderecoController.infoEmpresa);
    }

    


}

const enderecoRoutes = new EnderecoRoutes();
export default enderecoRoutes.router;