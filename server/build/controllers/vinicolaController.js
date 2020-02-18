"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class VinicolaController {
    listaVinicolas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const vinicolas = yield database_1.pool.query('select * from Empresa where TipoEmpresa_codTipoEmpresa = 2');
            res.json(vinicolas);
        });
    }
    /* Funcao p/ montar pag padrao com informações de X Vinicola (byId)
     - Retorna JSON array com as inform: [pos]
     0 -- Informacoes basicas da emp.
     1 -- Endereco
     2 -- Fotos
     3 -- Contato
     4 -- Informações ***TODO//
    */
    infoEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            var str = id.split(',', 2);
            //Queries
            const infoEmpresa = yield database_1.pool.query('select * from Empresa where codEmpresa = ?', str[0]);
            infoEmpresa[1] = yield database_1.pool.query('select * from Endereco where Empresa_codEmpresa = ?', str[0]);
            infoEmpresa[2] = yield database_1.pool.query('select * from Imagem where Empresa_codEmpresa = ?', str[0]);
            infoEmpresa[3] = yield database_1.pool.query('select * from Contato where Empresa_codEmpresa = ?', str[0]);
            return res.json(infoEmpresa);
        });
    }
    /*
    Metodo pra busca de fotos para montagem do carrossel da pag. principal
    Uma foto de cada vinicola
    Adicionar ao array final p. retornar path e codEmpresa

    TODO:// fix for - length query -
    */
    fotosCarrosselMain(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let length;
            //console.log(pool.query('select count(codEmpresa) from Empresa where TipoEmpresa_codTipoEmpresa = 2'));
            let list;
            let i = 0;
            try {
                for (i = 0; i < 5; i++) {
                    list = yield database_1.pool.query('select pathImagem, Empresa_codEmpresa from Imagem where TipoImagem_codTipoImagem = 2');
                }
            }
            catch (error) {
                console.log("Please report this error");
            }
            return res.json(list);
        });
    }
}
exports.vinicolaController = new VinicolaController();
