const { Router } = require('express');
const rotas = Router();
const categoria = require('../controladores/categoria');
const validarCorpoRequisicao = require('../intermediarios/validarCorpoRequisicao');
const schemaUsuario = require('../validacoes/schemaUsuario');
const usuario = require('../controladores/usuario');
const podeUsarEmail = require('../intermediarios/podeUsarEmail');
const schemaLogin = require('../validacoes/schemaLogin');
const login = require('../controladores/login');
const autenticacao = require('../intermediarios/autenticacao');

rotas.get('/categoria', categoria.listar);
rotas.post('/usuario', validarCorpoRequisicao(schemaUsuario), podeUsarEmail, usuario.cadastrar);
rotas.post('/login', validarCorpoRequisicao(schemaLogin), podeUsarEmail, login);

rotas.use(autenticacao);
rotas.get('/usuario', usuario.detalhar);
rotas.put('/usuario', validarCorpoRequisicao(schemaUsuario), podeUsarEmail, usuario.atualizar);



module.exports = rotas;