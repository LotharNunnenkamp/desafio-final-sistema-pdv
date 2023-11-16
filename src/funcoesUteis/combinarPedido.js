function combinarListas(listaPedidos, listaProdutos) {
    let saida = [];

    for (const pedido of listaPedidos) {
        let pedidoCombinado = { "pedido": pedido, "pedido_produtos": [] };

        for (const produto of listaProdutos) {
            if (produto.pedido_id === pedido.id) {
                pedidoCombinado.pedido_produtos.push(produto);
            }
        }

        saida.push(pedidoCombinado);
    }

    return saida;
}

module.exports = combinarListas;