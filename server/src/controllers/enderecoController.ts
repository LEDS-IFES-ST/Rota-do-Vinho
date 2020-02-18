import { Request, Response } from 'express';
import { pool } from '../database';


class EnderecoController {

    public async getEndereco(req: Request, res: Response) {
        const id = req.params.id;
        var str = id.split(',', 2);
        const endereco = await pool.query('select * from Endereco where Empresa_codEmpresa = ?', str[0]);
        res.json(endereco);
    }



}
export const enderecoController = new EnderecoController();