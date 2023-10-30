const { Router } = require('express');
const schemaUsuario = require('../validacoes/schemaUsuario');
const schemaLogin = require('../validacoes/schemaLogin');
const podeUsarEmail = require('../intermediarios/podeUsarEmail');
const cadastrar = require('../controladores/usuario/cadastrar');
const autenticacao = require('../intermediarios/autenticacao');
const detalhar = require('../controladores/usuario/detalhar');
const atualizar = require('../controladores/usuario/atualizar');
const login = require('../controladores/usuario/login');
const validarCorpoRequisicao = require('../intermediarios/validarCorpoRequisicao');
const rotasUsuario = Router();

rotasUsuario.post('/usuario', validarCorpoRequisicao(schemaUsuario), podeUsarEmail, cadastrar);
rotasUsuario.post('/login', validarCorpoRequisicao(schemaLogin), podeUsarEmail, login);
rotasUsuario.use(autenticacao);
rotasUsuario.get('/usuario', detalhar);
rotasUsuario.put('/usuario', validarCorpoRequisicao(schemaUsuario), podeUsarEmail, atualizar);

module.exports = rotasUsuario;