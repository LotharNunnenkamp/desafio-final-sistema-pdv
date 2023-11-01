const { Router } = require('express');
const cadastrar = require('../controladores/produto/cadastrar');
const autenticacao = require('../intermediarios/autenticacao');


const rotasProduto = Router();
rotasProduto.use(autenticacao);

// rotasProduto.post('/produto', cadastrar);
// rotasProduto.post('/produto', editar);
// rotasProduto.post('/produto', listar);
// rotasProduto.post('/produto', detalharProdutoPorId);
// rotasProduto.post('/produto', excluirProdutoPorId);

module.exports = rotasProduto;