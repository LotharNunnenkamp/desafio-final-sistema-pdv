const knex = require('../conexoes/bancoDeDados');

const podeUsarEmail = async (req, res, next) => {
    const { email } = req.body;
    try {
        const usuarioExiste = await knex('usuarios').where({ email }).first();
        req.usuarioExiste = usuarioExiste;
        next()
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
}

module.exports = podeUsarEmail;