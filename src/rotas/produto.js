const { Router } = require('express');
const autenticacao = require('../intermediarios/autenticacao');
const cadastrar = require('../controladores/produto/cadastrar');
const editar = require('../controladores/produto/editar');
const listar = require('../controladores/produto/listar');
const detalharProdutoPorId = require('../controladores/produto/detalharProdutoPorId');
const excluirProdutoPorId = require('../controladores/produto/excluirProdutoPorId');

const rotasProduto = Router();
rotasProduto.use(autenticacao);

rotasProduto.post('/produto', cadastrar);
rotasProduto.put('/produto/:id', editar);
rotasProduto.get('/produto', listar);
rotasProduto.get('/produto/:id', detalharProdutoPorId);
rotasProduto.delete('/produto/:id', excluirProdutoPorId);

module.exports = rotasProduto;