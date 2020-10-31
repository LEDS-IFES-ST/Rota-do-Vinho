import { Router } from 'express';
import { imagemController } from '../controllers/imagemController';
class ImagemRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/carrosselMain', imagemController.fotosCarrosselMain);
        this.router.get('/', imagemController.listaAll);
        this.router.get('/ftvinicola/:id', imagemController.ftosVinicolaByID);
        this.router.post('/addImagem/', imagemController.create);
        this.router.delete('/:id', imagemController.delete);
    }

    


}

const imagemRoutes = new ImagemRoutes();
export default imagemRoutes.router
