const { Router } = require('express');
const cadastrar = require('../controladores/cliente/cadastrar');
const autenticacao = require('../intermediarios/autenticacao');
const listar = require('../controladores/cliente/listar');

const rotasCliente = Router();
rotasCliente.use(autenticacao);

// rotasCliente.post('/Cliente', cadastrar);
// rotasCliente.post('/Cliente', editar);
rotasCliente.get('/cliente', listar);
// rotasCliente.post('/Cliente', detalhar);

module.exports = rotasCliente;