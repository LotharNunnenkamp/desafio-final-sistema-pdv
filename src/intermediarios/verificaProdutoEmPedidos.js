const knex = require('../conexoes/bancoDeDados');

const verificaProdutoEmPedidos = async (req, res, next) => {
    const { id } = req.params;

    try {

        const pedidoProdutoExiste = await knex('pedido_produtos').where('produto_id', id).first();

        if (pedidoProdutoExiste) {
            return res.status(400).json({
                mensagem: `Produto informado não pode ser excluído. Há pedido(s) com o produto informado.`
            })
        }

        next();

    } catch (erro) {
        console.log(erro.message);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
}

module.exports = verificaProdutoEmPedidos


