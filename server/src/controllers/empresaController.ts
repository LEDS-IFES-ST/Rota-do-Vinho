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

    /* Funcao p. informações de X Empresa (byId) 
     - Retorna array com as inform: [pos]
     1 -- Informacoes basicas da emp.
     2 -- Endereco
     3 -- Fotos ??
     4 -- Contato ??
    */
    public async infoEmpresa(req: Request, res: Response): Promise<any> {
        const id = req.params.id;
        var str = id.split(',', 2);
        //Queries
        const infoEmpresa: any[][0] = await pool.query('select * from Empresa where codEmpresa = ?', str[0]);
        infoEmpresa[1] = await pool.query('select * from Endereco where Empresa_codEmpresa = ?', str[0]);

        return res.json(infoEmpresa);
    }


    /* 
    Buscar 1 imagem de cada Vinicola (img type -> 2/Carrossel)
    Adicionar ao array final p. retornar path e codEmpresa
    
    TODO:// fix for - length query - 
     */
    public async fotosCarrosselMain(req: Request, res: Response): Promise<any> {
        let lenght = await pool.query('select count(codEmpresa) from Empresa where TipoEmpresa_codTipoEmpresa = 2');
        let list: any[][0];
        let i = 0;
        console.log("=> " + lenght + " < - ");
        try {
            for (i = 0; i < length; i++) {
                list = await pool.query('select pathImagem, Empresa_codEmpresa from Imagem where TipoImagem_codTipoImagem = 2');
            }
        } catch (error) {
            console.log("Please report this error")
        }
        return res.json(list);
    }

    public addEmpresa(req: Request, res: Response) {
        console.log(req.body);
        res.json({
            text: 'Addedendo empresa: -> ' + req.body.nomeEmpresa + ' <-'
        });
    }



}
export const empresaController = new EmpresaController();