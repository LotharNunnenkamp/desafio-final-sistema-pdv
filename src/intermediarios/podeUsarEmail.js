const knex = require('../conexoes/bancoDeDados');

const podeUsarEmail = async (req, res, next) => {
    console.log('entrou no podeUsarEmail');
    const { email } = req.body;
    // const usuario = req;
    try {

        const usuarioExiste = await knex('usuarios').where({ email }).first();
        // const cadastrarUsuario = req.route.methods.post && req.path === '/usuario';
        // const atualizarUsuario = req.route.methods.put && req.path === '/usuario';
        // const fazerLogin = req.path === '/login';
        req.usuarioExiste = usuarioExiste;
        next()
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
}

module.exports = podeUsarEmail;