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
/* Dicionario tipo empresa
1 -> Associacao
2 -> Vinicola / Cantina
3 -> Parceiro
4 -> Colaborador
*/
class EmpresaController {
    listaVinicolas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const vinicolas = yield database_1.pool.query('select * from Empresa where TipoEmpresa_codTipoEmpresa = 2');
            res.json(vinicolas);
        });
    }
    getAvistInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const avist = yield database_1.pool.query('select * from Empresa where Empresa.nomeEmpresa = "Avist"');
            return res.json(avist);
        });
    }
    showAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresas = yield database_1.pool.query('select * from Empresa');
            res.json(empresas);
        });
    }
    /* Funcao p. informações de X Empresa (byId)
     - Retorna array com as inform: [pos]
     1 -- Informacoes basicas da emp.
     2 -- Endereco
     3 -- Fotos ??
     4 -- Contato ??
    */
    infoEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            var str = id.split(',', 2);
            //Queries
            const infoEmpresa = yield database_1.pool.query('select * from Empresa where codEmpresa = ?', str[0]);
            infoEmpresa[1] = yield database_1.pool.query('select * from Endereco where Empresa_codEmpresa = ?', str[0]);
            return res.json(infoEmpresa);
        });
    }
    /*
    Buscar 1 imagem de cada Vinicola (img type -> 2/Carrossel)
    Adicionar ao array final p. retornar path e codEmpresa
    
    TODO:// fix for - length query -
     */
    fotosCarrosselMain(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let lenght = yield database_1.pool.query('select count(codEmpresa) from Empresa where TipoEmpresa_codTipoEmpresa = 2');
            let list;
            let i = 0;
            console.log("=> " + lenght + " < - ");
            try {
                for (i = 0; i < length; i++) {
                    list = yield database_1.pool.query('select pathImagem, Empresa_codEmpresa from Imagem where TipoImagem_codTipoImagem = 2');
                }
            }
            catch (error) {
                console.log("Please report this error");
            }
            return res.json(list);
        });
    }
    addEmpresa(req, res) {
        console.log(req.body);
        res.json({
            text: 'Addedendo empresa: -> ' + req.body.nomeEmpresa + ' <-'
        });
    }
}
exports.empresaController = new EmpresaController();
