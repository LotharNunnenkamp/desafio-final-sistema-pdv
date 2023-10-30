const knex = require('../../conexoes/bancoDeDados');

const detalhar = async (req, res) => {
    try {
        return res.status(200).json(req.usuarioLogado);
    } catch (erro) {
        console.log({ 'mensagem': erro.message });
        return res.status(500).json({ "mensagem": "Erro interno do Servidor." });
    }
}

module.exports = detalhar;