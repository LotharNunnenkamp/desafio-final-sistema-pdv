const knex = require('../../conexoes/bancoDeDados');

const detalhar = async (req, res) => {
    try {
        const detalhesDoUsuario = await knex('usuarios').where({ id: req.usuarioLogado.id })
            .select('id', 'nome', 'email').first();
        return res.status(200).json(detalhesDoUsuario);
    } catch (erro) {
        console.log({ 'mensagem': erro.message });
        return res.status(500).json({ "mensagem": "Erro interno do Servidor." });
    }
}

module.exports = detalhar;