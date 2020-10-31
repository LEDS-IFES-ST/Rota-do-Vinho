import { Router } from 'express';
import { informacaoController } from '../controllers/informacaoController';
class InformacaoRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/:id', informacaoController.getInformacaoByEmpresaID);
        this.router.get('/', informacaoController.listaAll);
        this.router.post('/addInfo/', informacaoController.create);
        this.router.delete('/:id', informacaoController.delete);
    }

    


}

const informacaoRoutes = new InformacaoRoutes();
export default informacaoRoutes.router;