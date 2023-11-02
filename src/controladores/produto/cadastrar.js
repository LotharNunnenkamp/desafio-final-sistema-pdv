const knex = require('../../conexoes/bancoDeDados');

const cadastrarProduto = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body

    try {
        
        const cadastroDeProduto = await knex('produtos').insert({
            descricao,
            quantidade_estoque,
            valor,
            categoria_id
        }).returning('*')

        return res.status(201).json(cadastroDeProduto[0])
    } catch (error) {
        console.log({ 'mensagem': erro.message });
        return res.status(500).json({ "mensagem": "Erro interno do Servidor." });
    }

}

module.exports = cadastrarProduto;