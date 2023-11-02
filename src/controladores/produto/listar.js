const knex = require('../../conexoes/bancoDeDados');

const listar = async (req, res) => {
    try {

        const listarProdutos = await knex('produtos');
        return res.status(200).json(listarProdutos);
    } catch (erro) {
        console.log(erro.message);
        return res.status(500).json('Erro interno do Servidor')
    }
}

module.exports = listar;