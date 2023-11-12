
const cadastrar = async (req, res) => {

    const { cliente_id, observacao, pedido_produtos } = req.body;

    // Verifica se todos os campos obrigatórios estão presentes na requisição
    if (!cliente_id || !observacao || !pedido_produtos || pedido_produtos.length === 0) {
        return res.status(400).json({ message: 'Campos obrigatórios faltando ou inválidos' });
    }

    try {
        let valorTotal = 0;
        // Verificar se os produtos existem e descobrir o valor total do pedido
        for (const produto of pedido_produtos) {
            const ProdutoEncontrado = await knex('produtos').select('id').where('id', produto.produto_id);
            if (ProdutoEncontrado.length < 1) {
                return res.status(404).json({ message: `Produto com ID ${produto.produto_id} não encontrado` });
            }
            valorTotal += ProdutoEncontrado[0].valor * produto.quantidade_produto;
        }

        // Inserir o pedido
        const cadastrarPedido = await knex('pedidos').insert({ cliente_id, observacao, valor_total: valorTotal }).returning('id');
        const pedidoId = cadastrarPedido[0].id
        // Associar os produtos ao pedido
        for (const produto of pedido_produtos) {
            const valorProduto = knex('produtos').select('valor').where('id', produto.produto_id)

            const ProdutoPedidoObj = {
                pedido_id: pedidoId,
                produto_id: produto.produto_id,
                quantidade_produto: produto.quantidade_produto,
                valor_produto: valorProduto
            }

            const cadastrarProdutosPedidos = await knex('pedido_produtos').insert(ProdutoPedidoObj)
        }

        return res.status(201).json({ message: 'Pedido cadastrado com sucesso' });
    } catch (error) {
        console.log(erro.message);
        return res.status(500).json({ message: 'Erro Interno do Servidor' });
    }

};

module.exports = cadastrar;