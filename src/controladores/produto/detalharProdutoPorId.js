const knex = require("../../conexoes/bancoDeDados");

const detalharProdutoPorId = async (req, res) => {
    try {
        const produtoExiste = req.produtoExiste;

        return res.status(200).json(produtoExiste);

    } catch (erro) {
        console.log(erro.message);
        return res.status('Erro interno do servidor.');
    }
}

module.exports = detalharProdutoPorId;