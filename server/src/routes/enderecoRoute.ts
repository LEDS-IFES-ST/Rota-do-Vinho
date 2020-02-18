import { Router } from 'express';
import { enderecoController } from '../controllers/enderecoController';
class EnderecoRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/:id', enderecoController.getEndereco);
    }

    


}

const enderecoRoutes = new EnderecoRoutes();
export default enderecoRoutes.router;