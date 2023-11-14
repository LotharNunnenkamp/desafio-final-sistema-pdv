const { Router } = require('express');
const cadastrar = require('../controladores/pedido/cadastrar');
const listar = require('../controladores/pedido/listar');
const validarCorpoRequisicao = require('../intermediarios/validarCorpoRequisicao');
const schemaPedido = require('../validacoes/schemaPedido');


const rotasPedido = Router();

rotasPedido.post('/pedido', validarCorpoRequisicao(schemaPedido), cadastrar);
rotasPedido.get('/pedido', listar);

module.exports = rotasPedido;