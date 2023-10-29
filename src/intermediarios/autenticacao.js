const jwt = require('jsonwebtoken');
const chaveSecreta = require('../chaveSecreta');
const knex = require('../conexoes/bancoDeDados');

const autenticacao = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({ mensagem: 'Não autorizado.' })
        }

        const token = authorization.split(' ')[1];
        const verificado = jwt.verify(token, chaveSecreta);

        req.usuarioLogado = {
            id: verificado.id,
            nome: verificado.nome,
            email: verificado.email
        };
        next();
    } catch (erro) {
        const errosToken = ['jwt expired', 'invalid signature', 'jwt must be provided'];
        console.log({ 'mensagem': erro.message });
        if (errosToken.includes(erro.message)) {
            return res.status(401).json({ mensagem: "Token de autenticação inválido ou expirado." });
        }
        return res.status(500).json({ "mensagem": "Erro interno do Servidor." });
    }
}

module.exports = autenticacao;