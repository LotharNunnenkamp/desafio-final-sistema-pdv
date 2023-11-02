const { Router } = require('express');
const rotas = Router();

const rotasCategoria = require('./categoria.js');
const rotasUsuario = require('./usuario');
const rotasCliente = require('./cliente.js');
const rotasProduto = require('./produto.js');

rotas.use(rotasCategoria);
rotas.use(rotasUsuario);
rotas.use(rotasCliente);
rotas.use(rotasProduto);

module.exports = rotas;