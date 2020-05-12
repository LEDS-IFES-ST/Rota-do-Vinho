import { Request, Response } from 'express';
import { pool } from '../database';


class EnderecoController {

    public async getList(req: Request, res: Response) {
        const vinicolas = await pool.query('select * from Empresa where TipoEmpresa_codTipoEmpresa = 2');
        res.json(vinicolas);
    }



    public async getEndereco(req: Request, res: Response) {
        const id = req.params.id;
        var str = id.split(',', 2);
        const endereco = await pool.query('select * from Endereco where codEndereco = ?', str[0]);
        res.json(endereco);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('insert into Endereco set ? ', [req.body])
        res.json({
            message: 'Adicionando Endereco' + req.body
        });
    }

    public async delete(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const info = await pool.query('DELETE FROM Endereco WHERE codEndereco= ?', [id]);
        console.log(info);
        res.json({ message: 'Endereco deletado' });
    }




}
export const enderecoController = new EnderecoController();