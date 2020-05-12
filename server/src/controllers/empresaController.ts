import { Request, Response } from 'express';
import { pool } from '../database';


/* Dicionario tipo empresa
1 -> Associacao
2 -> Vinicola / Cantina
3 -> Parceiro
4 -> Colaborador
*/

class EmpresaController {

    public async listaVinicolas(req: Request, res: Response) {
        const vinicolas = await pool.query('select * from Empresa where TipoEmpresa_codTipoEmpresa = 2');
        res.json(vinicolas);
    }

    public async getAvistInfo(req: Request, res: Response): Promise<any> {
        const avist = await pool.query('select * from Empresa where Empresa.nomeEmpresa = "Avist"');
        return res.json(avist);
    }

    public async showAll(req: Request, res: Response) {
        const empresas = await pool.query('select * from Empresa');
        res.json(empresas);
    }

    public async addEmpresa(req: Request, res: Response) {
        await pool.query('insert into Empresa set ? ',[req.body]);
        res.json({
            text: 'Adicionando empresa: ' + req.body.nomeEmpresa + ' <-',
            retorno: req.body
        });
    }













}
export const empresaController = new EmpresaController();