const { Router } = require('express');
const autenticacao = require('../intermediarios/autenticacao');
const cadastrar = require('../controladores/cliente/cadastrar');
const detalhar = require('../controladores/cliente/detalhar');
const editar = require('../controladores/cliente/editar');
const listar = require('../controladores/cliente/listar');


const rotasCliente = Router();
rotasCliente.use(autenticacao);

rotasCliente.post('/cliente', cadastrar);
rotasCliente.put('/cliente', editar);
rotasCliente.get('/cliente', listar);
rotasCliente.post('/cliente/:id', detalhar);

module.exports = rotasCliente;