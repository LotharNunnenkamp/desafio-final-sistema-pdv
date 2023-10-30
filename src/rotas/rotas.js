const { Router } = require('express');
const rotas = Router();

const rotasCategoria = require('./categoria.js');
const rotasUsuario = require('./usuario');

rotas.use(rotasCategoria);
rotas.use(rotasUsuario);

module.exports = rotas;