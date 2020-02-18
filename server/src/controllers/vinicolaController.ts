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
        return res.json(infoEmpresa);
    }

    /* 
    Metodo pra busca de fotos para montagem do carrossel da pag. principal
    Uma foto de cada vinicola 
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