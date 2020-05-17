import { Request, Response } from 'express';
import { pool } from '../database';


class ImagemController {
    /* Tipos imagem
        1 | Logomarca
        2 | Carrossel 
|       3 | Fotos
     */

    public async listaAll(req: Request, res: Response) {
        const imagem = await pool.query('select * from Imagem');
        res.json(imagem);
    }
    public async getImagemByID(req: Request, res: Response) {
        const id = req.params.id;
        var str = id.split(',', 2);
        const imagem = await pool.query('select * from Imagem where codImagem = ?', str[0]);
        res.json(imagem);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('insert into Imagem set ? ', [req.body])
        res.json({
            message: 'Adicionando Imagem' + req.body
        });
    }

    public async delete(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const info = await pool.query('DELETE FROM Imagem WHERE codImagem = ?', [id]);
        console.log(info);
        res.json({ message: ' imagem deletada' });
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
            console.log(error);
            console.log("Please report this error");
        }
        return res.json(list);
    }

    /*
        
    */
    public async ftosVinicolaByID(req: Request, res: Response): Promise<any> {
        const id = req.params.id;
        var str = id.split(',', 2);
        let list: any[][0];
        let i = 0;
        try {
            for (i = 0; i < 5; i++) {
                list = await pool.query('select Empresa_codEmpresa, pathImagem from Imagem where TipoImagem_codTipoImagem <> 1 and Empresa_codEmpresa = ? ', str[0]);
            }
        } catch (error) {
            console.log(error);
            console.log("Please report this error");
        }
        return res.json(list);

    }


}

export const imagemController = new ImagemController();