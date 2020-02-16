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
        console.log("blabalbla");
        const avist = await pool.query('select * from Empresa where Empresa.nomeEmpresa = "Avist"');
        return res.json(avist);
    }

    public async showAll(req: Request, res: Response) {
        const empresas = await pool.query('select * from Empresa');
        res.json(empresas);
    }

    // 00000000 ZONA FANTASMA --- nao toque 
    /* 
    Buscar 1 imagem de cada Vinicola (img type -> 2/Carrossel)
    Adicionar ao array final p. retornar path e codEmpresa
    
    TODO:// fix for - length query - 
    public async fotosCarrosselMain(req: Request, res: Response): Promise<any> {
        let length: number;
        console.log(pool.query('select count(codEmpresa) from Empresa where TipoEmpresa_codTipoEmpresa = 2'));


        /* length = await pool.query('select count(codEmpresa) from Empresa where TipoEmpresa_codTipoEmpresa = 2');
        let list: any[][0];
        let i = 0;
        try {
            for (i = 0; i < length; i++) {
                //list = await pool.query('select pathImagem, Empresa_codEmpresa from Imagem where TipoImagem_codTipoImagem = 2');
                console.log("loop working fine")
            }
        } catch (error) {
            console.log("Please report this error")
        }
        return res.json(list);
    }

------------------------------------------------------------------------------------------------------------
    private async getCarrosIndi(id: any): Promise<any>{
        console.log(id + "id recebido: (getcarro method) ---------------00000000000000000000000000");
        const catcher = null;
        try {
            const catcher = await pool.query('select * from Imagem where Empresa_codEmpresa = ?', id);
        } catch (error) {
            console.log("report this error (getCarrorsInidi())");
            return '-1';
            
        }
        return -3;

    }

        */

    public addEmpresa(req: Request, res: Response) {
        console.log(req.body);
        res.json({
            text: 'Addedendo empresa: -> ' + req.body.nomeEmpresa + ' <-'
        });
    }











}
export const empresaController = new EmpresaController();