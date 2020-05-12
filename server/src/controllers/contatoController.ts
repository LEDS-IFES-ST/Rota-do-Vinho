import { Request, Response } from 'express';
import { pool } from '../database';


class ContatoController {

   public async listaAll(req: Request, res: Response) {
        const contato = await pool.query('select * from Contato');
        res.json(contato);
    }
    public async getContatoByID(req: Request, res: Response) {
        const id = req.params.id;
        var str = id.split(',', 2);
        const contato = await pool.query('select * from Contato where codContato = ?', str[0]);
        res.json(contato);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('insert into Contato set ? ', [req.body])
        res.json({
            message: 'Adicionando Contato' + req.body
        });
    }

    public async delete(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const info = await pool.query('DELETE FROM Contato WHERE codContato = ?', [id]);
        console.log(info);
        res.json({ message: ' contato deletado' });
    }







}

export const contatoController = new ContatoController();