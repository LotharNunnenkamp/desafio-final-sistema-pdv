const { Router } = require('express');
const autenticacao = require('../intermediarios/autenticacao');
const cadastrarProduto = require('../controladores/produto/cadastrar');
const editarProduto = require('../controladores/produto/editar');
const listar = require('../controladores/produto/listar');
const detalharProdutoPorId = require('../controladores/produto/detalharProdutoPorId');
const excluirProdutoPorId = require('../controladores/produto/excluirProdutoPorId');
const validarCorpoRequisicao = require('../intermediarios/validarCorpoRequisicao');
const schemaProduto = require('../validacoes/schemaProduto');
const verificarCategoria = require('../intermediarios/categoriaExiste');
const verificaProdutoExiste = require('../intermediarios/verificaProdutoExiste');

const rotasProduto = Router();
rotasProduto.use(autenticacao);

rotasProduto.post('/produto', validarCorpoRequisicao(schemaProduto), verificarCategoria, cadastrarProduto);
rotasProduto.put('/produto/:id', validarCorpoRequisicao(schemaProduto), verificarCategoria, editarProduto);
rotasProduto.get('/produto', listar);
rotasProduto.get('/produto/:id', verificaProdutoExiste, detalharProdutoPorId);
rotasProduto.delete('/produto/:id', verificaProdutoExiste, excluirProdutoPorId);

module.exports = rotasProduto;