const { Router } = require('express');
const { listar } = require('../controladores/categiria/listar');

const rotasCategoria = Router();

rotasCategoria.get('/categoria', listar);

module.exports = rotasCategoria;