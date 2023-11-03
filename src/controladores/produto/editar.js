const knex = require('../../conexoes/bancoDeDados')


const editarProduto = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body
    const { id } = req.params
    try {
        const produtoExiste = await knex('produtos').where({id}).first()

        if (!produtoExiste) {
            return res.status(404).json({
                mensagem: "O produto informado não existe."
            })
        }

        const editar = await knex('produtos').where({id}).update({descricao, quantidade_estoque, valor, categoria_id})

        if (!editar) {
            return res.status(400).json({ mensagem: 'Não foi possivel atualizar o produto.' })
        }

        return res.status(204).send();

    } catch (error) {
        console.log({ 'mensagem': error.message });
        return res.status(500).json({ "mensagem": "Erro interno do Servidor." });
    }
}

module.exports = editarProduto;