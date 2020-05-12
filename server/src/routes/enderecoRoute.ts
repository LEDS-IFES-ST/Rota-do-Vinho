import { Router } from 'express';
import { enderecoController } from '../controllers/enderecoController';
class EnderecoRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.post('/addEndereco/', enderecoController.create);
        this.router.delete('/delEndereco/', enderecoController.delete);
        this.router.get('/enderecos/', enderecoController.getList);
    }

    


}

const enderecoRoutes = new EnderecoRoutes();
export default enderecoRoutes.router;