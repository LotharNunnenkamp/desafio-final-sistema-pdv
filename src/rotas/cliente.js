const { Router } = require('express');
const cadastrar = require('../controladores/cliente/cadastrar');
const autenticacao = require('../intermediarios/autenticacao');

const rotasCliente = Router();
rotasCliente.use(autenticacao);

// rotasCliente.post('/Cliente', cadastrar);
// rotasCliente.post('/Cliente', editar);
// rotasCliente.post('/Cliente', listar);
// rotasCliente.post('/Cliente', detalhar);

module.exports = rotasCliente;