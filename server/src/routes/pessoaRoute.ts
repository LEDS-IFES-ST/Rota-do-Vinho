import { Router } from 'express';
import { pessoaController } from '../controllers/pessoaController';
class PessoaRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', pessoaController.listaAll);
        this.router.post('/addPessoa/', pessoaController.create);
        this.router.get('/:id', pessoaController.getPessoaByID);
        this.router.delete('/:id', pessoaController.delete);
    }

    


}
const pessoaRoutes = new PessoaRoutes();
export default pessoaRoutes.router