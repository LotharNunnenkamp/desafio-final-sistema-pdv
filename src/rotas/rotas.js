const { Router } = require('express');
const rotas = Router();
const categoria = require('../controladores/categoria')

rotas.get('/categoria', categoria.listar);

module.exports = rotas;