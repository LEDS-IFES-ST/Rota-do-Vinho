import { Request, Response } from 'express';
import { pool } from '../database';


class InformacaoController {

    public async getInformacao(req: Request, res: Response) {
        const id = req.params.id;
        var str = id.split(',', 2);
        const informacao = await pool.query('select * from Informacao where Empresa_codEmpresa = ?', str[0]);
        res.json(informacao);
    }

    // get para biografia by Vinicola_id
    public async getBioVinicola(req: Request, res: Response) {
        const id = req.params.id;
        var str = id.split(',', 2);
        const biografia = await pool.query('select * from Informacao where TipoInformacao_codTipoInformacao = 2 and Empresa_codEmpresa = ?', str[0]);
    }




}
export const informacaoController = new InformacaoController();