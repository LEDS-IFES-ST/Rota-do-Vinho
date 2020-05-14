import { Request, Response } from 'express';
import { pool } from '../database';


class InformacaoController {
    /*
    1 Histórico           
    2 Descrição da Empresa
    3 Missão              
    4 Valores             
    5 Outros   
    */
   public async listaAll(req: Request, res: Response) {
        const informacao = await pool.query('select * from Informacao');
        res.json(informacao);
    }
    public async getInformacaoByEmpresaID(req: Request, res: Response) {
        const id = req.params.id;
        var str = id.split(',', 2);
        const informacao = await pool.query('select * from Informacao where Empresa_codEmpresa = ?', str[0]);
        res.json(informacao);
    }

    // get para biografia by Vinicola_id ? redundancia
    public async getBioVinicola(req: Request, res: Response) {
        const id = req.params.id;
        var str = id.split(',', 2);
        const biografia = await pool.query('select * from Informacao where TipoInformacao_codTipoInformacao = 2 and Empresa_codEmpresa = ?', str[0]);
    }


    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('insert into Informacao set ? ', [req.body])
        res.json({
            message: 'Adicionando Informacao' + req.body
        });
    }

    public async delete(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const info = await pool.query('DELETE FROM Informacao WHERE codInformacao = ?', [id]);
        console.log(info);
        res.json({ message: 'Info deletada' });
    }







}
export const informacaoController = new InformacaoController();