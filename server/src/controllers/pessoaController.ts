import { Request, Response } from 'express';
import { pool } from '../database';


class PessoaController {

   public async listaAll(req: Request, res: Response) {
        const pessoa = await pool.query('select * from Pessoa');
        res.json(pessoa);
    }
    public async getPessoaByID(req: Request, res: Response) {
        const id = req.params.id;
        var str = id.split(',', 2);
        const pessoa = await pool.query('select * from Pessoa where codPessoa = ?', str[0]);
        res.json(pessoa);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('insert into Pessoa set ? ', [req.body])
        res.json({
            message: 'Adicionando Pessoa' + req.body
        });
    }

    public async delete(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const info = await pool.query('DELETE FROM Pessoa WHERE codPessoa = ?', [id]);
        console.log(info);
        res.json({ message: ' pessoa deletada' });
    }
}

export const pessoaController = new PessoaController();