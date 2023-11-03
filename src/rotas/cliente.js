const { Router } = require('express');
const autenticacao = require('../intermediarios/autenticacao');
const cadastrarCliente = require('../controladores/cliente/cadastrar');
const detalhar = require('../controladores/cliente/detalhar');
const listar = require('../controladores/cliente/listar');
const validarCorpoRequisicao = require('../intermediarios/validarCorpoRequisicao');
const schemaCliente = require('../validacoes/schemaCliente');
const validarCliente = require('../intermediarios/validarCliente');
const editarCliente = require('../controladores/cliente/editar');


const rotasCliente = Router();
rotasCliente.use(autenticacao);

rotasCliente.post('/cliente', validarCorpoRequisicao(schemaCliente), validarCliente, cadastrarCliente);
rotasCliente.put('/cliente/:id', validarCorpoRequisicao(schemaCliente), editarCliente);
rotasCliente.get('/cliente', listar);
rotasCliente.get('/cliente/:id', detalhar);

module.exports = rotasCliente;