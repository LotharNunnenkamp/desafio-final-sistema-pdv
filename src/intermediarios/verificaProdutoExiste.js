const knex = require('../conexoes/bancoDeDados');

const verificaProdutoExiste = async (req, res, next) => {
    const { id } = req.params;
    try {
        const produtoExiste = await knex('produtos').where({ id }).first();
        if (!produtoExiste) {
            return res.status(404).json({
                mensagem: "O produto informado não foi encontrado."
            });
        }

        req.produtoExiste = produtoExiste;
        next();
    } catch (erro) {
        console.log(erro.message);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }

}

module.exports = verificaProdutoExiste