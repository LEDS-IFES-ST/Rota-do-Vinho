import { Request, Response } from 'express';
import { pool } from '../database';
import { empresaController } from './empresaController';

class VinicolaController {


    public async listaVinicolas(req: Request, res: Response) {
        const vinicolas = await pool.query('select * from Empresa where TipoEmpresa_codTipoEmpresa = 2');
        res.json(vinicolas);
    }

    /* Funcao p/ montar pag default com informações de X Vinicola (byId) 
     - Retorna JSON array com as inform: [pos]
     1 -- Informacoes basicas da emp.
     2 -- Endereco
     3 -- Fotos 
     4 -- Contato ??
    */
    public async infoEmpresa(req: Request, res: Response): Promise<any> {
        const id = req.params.id;
        var str = id.split(',', 2);
        console.log(str[0] + "<--blablalba---");
        //Queries
        const infoEmpresa: any[][0] = await pool.query('select * from Empresa where codEmpresa = ?', str[0]);
        infoEmpresa[1] = await pool.query('select * from Endereco where Empresa_codEmpresa = ?', str[0]);
        infoEmpresa[2] = await pool.query('select * from Imagem where Empresa_codEmpresa = ?', str[0]);

        return res.json(infoEmpresa);
    }

    /* 
    Buscar 1 imagem de cada Vinicola (img type -> 2/Carrossel)
    Adicionar ao array final p. retornar path e codEmpresa
    
    TODO:// fix for - length query - 
    */
    public async fotosCarrosselMain(req: Request, res: Response): Promise<any> {
        let length: number;
        //console.log(pool.query('select count(codEmpresa) from Empresa where TipoEmpresa_codTipoEmpresa = 2'));

        let list: any[][0];
        let i = 0;
        try {
            for (i = 0; i < 5; i++) {
                list = await pool.query('select pathImagem, Empresa_codEmpresa from Imagem where TipoImagem_codTipoImagem = 2');
            }
        } catch (error) {
            console.log("Please report this error")
        }
        return res.json(list);
    }







}
export const vinicolaController = new VinicolaController();