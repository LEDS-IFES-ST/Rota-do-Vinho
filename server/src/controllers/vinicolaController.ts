import { Request, Response } from 'express';
import { pool } from '../database';

class VinicolaController {


    public async listaVinicolas(req: Request, res: Response) {
        const vinicolas = await pool.query('select * from Empresa where TipoEmpresa_codTipoEmpresa = 2');
        res.json(vinicolas);
    }

    /* Funcao p/ montar pag padrao com informações de X Vinicola (byId) 
     - Retorna JSON array com as inform: [pos]
     0 -- Informacoes basicas da emp.
     1 -- Endereco
     2 -- Fotos 
     3 -- Contato 
     4 -- Informações ***TODO// 
    */
    public async infoEmpresa(req: Request, res: Response): Promise<any> {
        const id = req.params.id;
        var str = id.split(',', 2);
        //Queries
        const infoEmpresa: any[][0] = await pool.query('select * from Empresa where codEmpresa = ?', str[0]);
        infoEmpresa[1] = await pool.query('select * from Endereco where Empresa_codEmpresa = ?', str[0]);
        infoEmpresa[2] = await pool.query('select * from Imagem where Empresa_codEmpresa = ?', str[0]);
        infoEmpresa[3] = await pool.query('select * from Contato where Empresa_codEmpresa = ?', str[0]);
        infoEmpresa[4] = await pool.query('select * from Informacao where Empresa_codEmpresa = ?', str[0]);
        infoEmpresa[5] = await pool.query('select * from Pessoa where Empresa_codEmpresa = ?', str[0]);
        return res.json(infoEmpresa);
    }


    // deve retornar o msmo do met acima
    // wtf?? not working
    public async infoEmpresa2(req: Request, res: Response): Promise<any> {
        const id = req.params.id;
        var str = id.split(',', 2);
        const infoEmpresa = await pool.query('select * from Empresa join Endereco on codEmpresa = Empresa_codEmpresa join Imagem on Endereco.Empresa_codEmpresa = Imagem.Empresa_codEmpresa join Informacao on Imagem.Empresa_codEmpresa = Informacao.Empresa_codEmpresa '
        , str[0]);
        return res.json(infoEmpresa)
    }





}
export const vinicolaController = new VinicolaController();