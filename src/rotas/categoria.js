const { Router } = require('express');
const { listar } = require('../controladores/categoria/listar');

const rotasCategoria = Router();

rotasCategoria.get('/categoria', listar);

module.exports = rotasCategoria;