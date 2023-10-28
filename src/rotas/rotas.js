const { Router } = require('express');
const rotas = Router();
const autenticacao = require('../intermediarios/autenticacao');
const login = require('../controladores/login');
const validarCorpoRequisicao = require('../intermediarios/validarCorpoRequisicao');
const podeUsarEmail = require('../intermediarios/podeUsarEmail');
const categoria = require('../controladores/categoria');
const usuario = require('../controladores/usuario');
const schemaUsuario = require('../validacoes/schemaUsuario');
const schemaLogin = require('../validacoes/schemaLogin');

rotas.get('/categoria', categoria.listar);
rotas.post('/usuario', validarCorpoRequisicao(schemaUsuario), podeUsarEmail, usuario.cadastrar);
rotas.post('/login', validarCorpoRequisicao(schemaLogin), podeUsarEmail, login);

rotas.use(autenticacao);
rotas.get('/usuario', usuario.detalhar);
rotas.put('/usuario', validarCorpoRequisicao(schemaUsuario), podeUsarEmail, usuario.atualizar);


module.exports = rotas;