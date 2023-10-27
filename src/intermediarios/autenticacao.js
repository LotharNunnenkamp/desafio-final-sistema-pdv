const jwt = require('jsonwebtoken');
const chaveSecreta = require('../chaveSecreta');
const knex = require('../conexoes/bancoDeDados');

const autenticacao = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(400).json({ mensagem: 'Não autorizado.' })
        }

        const token = authorization.split(' ')[1];
        const verificado = jwt.verify(token, chaveSecreta);

        const usuarioExiste = await knex('usuarios')
            .where({ id: verificado.id, email: verificado.email }).first();

        if (!usuarioExiste) {
            return res.status(400).json({ mensagem: 'Usuario nao encontrado.' })
        }

        req.usuarioLogado = {
            id: verificado.id,
            nome: verificado.nome,
            email: verificado.email
        };
        next();
    } catch (erro) {
        console.log({ 'mensagem': erro.message });
        return res.status(500).json({ "mensagem": "Erro interno do Servidor." });
    }
}

module.exports = autenticacao;