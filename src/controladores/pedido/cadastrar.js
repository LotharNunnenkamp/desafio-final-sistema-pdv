const knex = require("../../conexoes/bancoDeDados");

const cadastrar = async (req, res) => {

    const { cliente_id, observacao, pedido_produtos } = req.body;

    try {
        let valorTotal = 0;
        let erros = [];
        // Verificar se os produtos existem e descobrir o valor total do pedido
        for (const produto of pedido_produtos) {
            let produtoEncontrado = await knex('produtos').where('id', produto.produto_id).first();
            if (!produtoEncontrado) {
                erros.push({ messagem: `Produto com ID ${produto.produto_id} não encontrado` });
                continue
            }

            if (produto.quantidade_produto > produtoEncontrado.quantidade_estoque) {
                erros.push({
                    mensagem: `A quantidade solicitada: ${produto.quantidade_produto} para o produto de ID: ${produtoEncontrado.id} é maior que a quantidade atual em estoque: ${produtoEncontrado.quantidade_estoque}`
                })
                continue
            }

            valorTotal += produtoEncontrado.valor * produto.quantidade_produto;

            produto.valor_produto = produtoEncontrado.valor;
            produto.quantidade_estoque = produtoEncontrado.quantidade_estoque;
        }

        if (erros.length > 0) {
            console.log({ erros })
            return res.status(400).json(erros)
        }

        // Inserir o pedido
        const cadastrarPedido = await knex('pedidos').insert({ cliente_id, observacao, valor_total: valorTotal }).returning('*');
        const pedidoId = cadastrarPedido[0].id
        // Associar os produtos ao pedido
        for (const produto of pedido_produtos) {
            // const valorProduto = knex('produtos').select('valor').where('id', produto.produto_id)

            const ProdutoPedidoObj = {
                pedido_id: pedidoId,
                produto_id: produto.produto_id,
                quantidade_produto: produto.quantidade_produto,
                valor_produto: produto.valor_produto
            }

            await knex('pedido_produtos').insert(ProdutoPedidoObj)

            let descontarEstoque = produto.quantidade_estoque - produto.quantidade_produto

            await knex('produtos').where('id', produto.produto_id)
                .update({ quantidade_estoque: descontarEstoque })
        }


        return res.status(201).json({ message: 'Pedido cadastrado com sucesso' });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Erro Interno do Servidor' });
    }

};

module.exports = cadastrar;