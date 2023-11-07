const knex = require("../../conexoes/bancoDeDados");

const excluirProdutoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        
     
        const produtoExcluido = await knex('produtos').where('id', id).del().returning('*');
                
        return res.status(200).json(produtoExcluido);

    } catch (erro) {
        console.log(erro.message);
        return res.status('Erro interno do servidor.');
    }

}

module.exports = excluirProdutoPorId;