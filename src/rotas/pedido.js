const { Router } = require('express');
const cadastrar = require('../controladores/pedido/cadastrar');
const listar = require('../controladores/pedido/listar');


const rotasPedido = Router();

rotasPedido.post('/pedido', cadastrar);
rotasPedido.get('/pedido', listar);

module.exports = rotasPedido;