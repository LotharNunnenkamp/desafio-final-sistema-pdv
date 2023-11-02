const knex = require("../../conexoes/bancoDeDados");

const detalharProdutoPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const produtoExiste = await knex('produtos').where({ id }).first();
        if (!produtoExiste) {
            return res.status(404).json({ mensagem: 'Não foi encontrado produto para o id informado.' });
        }

        return res.status(200).json(produtoExiste);

    } catch (erro) {
        console.log(erro.message);
        return res.status('Erro interno do servidor.');
    }
}

module.exports = detalharProdutoPorId;