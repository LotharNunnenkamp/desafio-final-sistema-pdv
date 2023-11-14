const knex = require('../../conexoes/bancoDeDados');

const listar = async (req, res) => {
    const { cliente_id } = req.query;
    try {
        if (cliente_id) {
            const clienteExiste = await knex('clientes').where({id: cliente_id}).first();
            if (!clienteExiste) {
                return res.status(404).json({ mensagem: 'Cliente não encontrado.' });
            }

            const pedido = await knex('pedidos').where({ cliente_id }).first();
            if (!pedido) {
                return res.status(404).json({ mensagem: 'Não há pedidos para este cliente.' });
            }

            const produtosPedido = await knex('pedido_produtos').where({pedido_id: pedido.id});

            return res.status(200).json({ 
                pedido,
                pedido_produtos: produtosPedido
            });
        }

        const pedidos = await knex('pedidos')
        if (pedidos.length === 0) {
            return res.status(404).json({ mensagem: 'Nenhum pedido encontrado.' });
        }

        return res.status(200).json({pedidos});

    } catch (error) {
        console.log({ 'mensagem': error.message });
        return res.status(500).json({ "mensagem": "Erro interno do Servidor." });
    }
}

module.exports = listar;