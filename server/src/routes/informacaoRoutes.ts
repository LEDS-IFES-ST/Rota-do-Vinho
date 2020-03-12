import { Router } from 'express';
import { informacaoController } from '../controllers/informacaoController';
class InformacaoRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/:id', informacaoController.getInformacao);
    }

    


}

const informacaoRoutes = new InformacaoRoutes();
export default informacaoRoutes.router;